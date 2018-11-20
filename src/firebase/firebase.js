import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyApRIvQLD8aJnPVXtje4rEbIEwMUb-3xJ4",
    authDomain: "expensify-312ab.firebaseapp.com",
    databaseURL: "https://expensify-312ab.firebaseio.com",
    projectId: "expensify-312ab",
    storageBucket: "expensify-312ab.appspot.com",
    messagingSenderId: "915841777308"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export{ firebase,googleAuthProvider,database as default};