import React, { useState, useContext, useEffect } from "react";
import { auth } from "../util/apis/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
      // .then((userCredential) => { setCurrentUser(userCredential.user)});
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(email, password) {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
        setLoading(false);
      })

      return unsubscribe;
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
};