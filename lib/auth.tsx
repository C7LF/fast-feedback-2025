import React, { useState, useEffect, useContext, createContext } from "react";
import { createUser } from "./db";

import firebase from "./firebase";
import cookie from "js-cookie";

export interface IFirebaseContext {
  user: User;
  signinWithGitHub: () => Promise<any>;
  signout: () => Promise<any>;
}

export interface User {
  uid: string;
  email: string;
  name: string;
  provider: string;
  photoUrl: string;
  token: any;
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

  const handleUser = async (rawUser: firebase.User) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      // Store user object with token and without token seperately
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, user);
      setUser(user);

      cookie.set("fast-feedback-auth", "true", {
        expires: 1,
      });

      return user;
    } else {
      setUser(null);
      cookie.remove("fast-feedback-auth");
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

const formatUser = async (user: firebase.User): Promise<User> => {
  const jwtToken = await user.getIdToken(true);
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    token: jwtToken,
    photoUrl: user.photoURL,
  };
};
