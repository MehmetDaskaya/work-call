import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const FirebaseAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase Auth initialization
    const auth = firebase.auth();

    // Example of using Firebase Auth
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign In with Google</button>
      )}
    </div>
  );
};

export default FirebaseAuth;
