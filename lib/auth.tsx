import React, {
  useState,
  useEffect,
  useContext,
  createContext
} from "react";
import { createUser } from "./db";

import firebase from "./firebase";

export interface IFirebaseContext {
  user: User;
  signinWithGitHub: () => Promise<any>;
  signout: () => Promise<any>;
}

interface User {
  uid: string;
  email: string;
  name: string;
  provider: string;
  photoUrl: string;
}

export const AuthContext = createContext({} as IFirebaseContext);

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = (): IFirebaseContext => {
  return useContext(AuthContext);
};

export const useProvideAuth = (): IFirebaseContext => {
  const [user, setUser] = useState<User>(null);

  const handleUser = (rawUser: firebase.User) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);
      
      return user;
    } else {
      setUser(null);
      return false;
    }
  };

  const signinWithGitHub = async (): Promise<any> => {
    const response = await firebase
      .auth()
      .signInWithRedirect(new firebase.auth.GithubAuthProvider());
    return handleUser(response as any);
  };

  const signout = async (): Promise<any> => {
    await firebase.auth().signOut();
    return setUser(null);
  };

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => handleUser(user));
    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGitHub,
    signout,
  };
};

const formatUser = (user: firebase.User): User => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
