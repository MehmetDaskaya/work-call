// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQjx84sOedNjoVrto3rnw9PvElanhXeGo",
  authDomain: "work-call-denmark.firebaseapp.com",
  projectId: "work-call-denmark",
  storageBucket: "work-call-denmark.appspot.com",
  messagingSenderId: "797056275213",
  appId: "1:797056275213:web:67cc259856acdad6275644",
  measurementId: "G-8NFP8YX42W",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  // Request notification permission
  getToken(messaging, {
    vapidKey:
      "BFGB9JyP3Zozvy1TH6WD7rSmS1EfaeB5CWpZZMK9187SmCa702uDp3-w2MRvVl9BMfn6fKkwmc86-sKVsB2djKE",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token: ", currentToken);
      } else {
        console.log("no current token");
      }
    })
    .catch((err) => {
      console.log("error while registering token", err);
    });
};

export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("OnMessage payload: ", payload);
      resolve(payload);
    });
  });
};
