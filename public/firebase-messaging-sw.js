importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts(
    'https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js'
);

firebase.initializeApp({
    apiKey: 'AIzaSyA7srQ6NQdrAjDvvo5iquJCK2hTFeO-388',
    authDomain: 'expense-tracker-f332f.firebaseapp.com',
    databaseURL: 'https://expense-tracker-f332f.firebaseio.com',
    projectId: 'expense-tracker-f332f',
    storageBucket: 'expense-tracker-f332f.appspot.com',
    messagingSenderId: '837483703269',
    appId: '1:837483703269:web:0f52f3713ca18ea0df5d0c',
});

firebase.messaging();