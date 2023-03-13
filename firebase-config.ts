import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat';
import initializeApp = firebase.initializeApp;
import { initializeFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: 'AIzaSyC3SD7x-MeLLzRa_zUiiOMlrmJYm4zpOh4',
    authDomain: 'kinogo-b22b3.firebaseapp.com',
    projectId: 'kinogo-b22b3',
    storageBucket: 'kinogo-b22b3.appspot.com',
    messagingSenderId: '409803002905',
    appId: '1:409803002905:web:0cc6f0008ade00509e4688',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { db, auth };
