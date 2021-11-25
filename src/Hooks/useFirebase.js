import React, { useState, useEffect } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import firebaseInitializeApp from "../Firebase/firebase.init";
  
  firebaseInitializeApp();
  const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isloading, setIsloading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
  
                    /* Create Account */
    const register = (email, password) => {
      setIsloading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsloading(false)
      })
      .catch((error) => {
        console.log(error.message)
      });
    };
                    /* Log In */
    const logIn = (email, password) => {
      setIsloading(true)
      return signInWithEmailAndPassword(auth, email, password);
    };
                    /* Google Sign In */
    const googleSignIn = () => {
      setIsloading(true)
      return signInWithPopup(auth, googleProvider);
    };
                  /* Log Out */
    const logOut = () => {
      setIsloading(true)
      signOut(auth)
      .then(() => {
        setUser({});
        setIsloading(false)
      })
     .finally(()=>setIsloading(false))
    };
                    /* State Change */
    useEffect(() => {
      setIsloading(true)
      const unsubscriber = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
        setIsloading(false)
      });
      return () => unsubscriber;
    }, []);
  
    return {
      googleSignIn,
      logOut,
      register,
      logIn,
      user,
      setIsloading,
      isloading
    };
  };

export default useFirebase;
