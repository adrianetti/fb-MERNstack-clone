import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBxqNvdb8l4sAERBBydtm_GaqItqc_9Cjk",
    authDomain: "fb-mongodb-clone.firebaseapp.com",
    databaseURL: "https://fb-mongodb-clone.firebaseio.com",
    projectId: "fb-mongodb-clone",
    storageBucket: "fb-mongodb-clone.appspot.com",
    messagingSenderId: "521433754844",
    appId: "1:521433754844:web:25e78701c8d999598e1819",
    measurementId: "G-E2C275PNFD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth }
