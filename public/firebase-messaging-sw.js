/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals*/

// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAQjx84sOedNjoVrto3rnw9PvElanhXeGo",
  authDomain: "work-call-denmark.firebaseapp.com",
  projectId: "work-call-denmark",
  storageBucket: "work-call-denmark.appspot.com",
  messagingSenderId: "797056275213",
  appId: "1:797056275213:web:67cc259856acdad6275644",
  measurementId: "G-8NFP8YX42W",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
