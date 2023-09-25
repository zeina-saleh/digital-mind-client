importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAPJjQOB4a4fNKQL1zvetWVrG1nQsS-0Wc",
    authDomain: "digital-mind-59d90.firebaseapp.com",
    projectId: "digital-mind-59d90",
    storageBucket: "digital-mind-59d90.appspot.com",
    messagingSenderId: "544865937046",
    appId: "1:544865937046:web:5b060bcacf1291209004b7"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('firebase-messaging-sw.js Received Background Message', payload)
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
})