import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  Context,
  ContextType,
} from "react";

import firebase from "./firebase";

export interface IFirebaseContext {
    user: firebase.User,
    signinWithGitHub: () => Promise<any>,
    signout: () => Promise<any>
}

export const AuthContext = createContext({} as IFirebaseContext);

export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth();
    return (<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>);
}

export const useAuth = (): IFirebaseContext => {
  return useContext(AuthContext);
};

export const useProvideAuth = (): IFirebaseContext => {
  const [user, setUser] = useState<firebase.User>(null);

  const signinWithGitHub = (): Promise<any> => {
    return firebase
      .auth()
      .signInWithRedirect(new firebase.auth.GithubAuthProvider())
      .then((response: any) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = (): Promise<any> => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(null));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGitHub,
    signout,
  };
};
