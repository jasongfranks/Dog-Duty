importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBaIQVgPLcCj4T8-wvZ90L9iKSJHZ_7Srg",
  authDomain: "dog-duty-fe307.firebaseapp.com",
  projectId: "dog-duty-fe307",
  messagingSenderId: "864273780235",
  appId: "1:864273780235:web:42c82e06afa5deadc1c10e"
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/dogdutyicon.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
