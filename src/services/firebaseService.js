import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA7srQ6NQdrAjDvvo5iquJCK2hTFeO-388',
  authDomain: 'expense-tracker-f332f.firebaseapp.com',
  databaseURL: 'https://expense-tracker-f332f.firebaseio.com',
  projectId: 'expense-tracker-f332f',
  storageBucket: 'expense-tracker-f332f.appspot.com',
  messagingSenderId: '837483703269',
  appId: '1:837483703269:web:0f52f3713ca18ea0df5d0c',
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

// Add the public key generated from the console here.
// messaging.usePublicVapidKey('BNu8xN1Gwo0bzxBaufAc0LrPJnz_6u2uFyV4BTuJMtGfBwP7G5vqHjK6Nf7v5uzLDZQq7RkD5n_Ow-MMSELJ6NQ');

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === 'granted') {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log('Token =>');
            console.log(currentToken);
          } else {
            // Show permission request.
            console.log(
              'No Instance ID token available. Request permission to generate one.'
            );
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
    }
  });
}

export default firebase;
