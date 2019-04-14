import * as firebase from 'firebase';

const   config = {
    apiKey: "AIzaSyA5JllxE7AQClqug-vFiOxLUxgcGYzBaPU",
    authDomain: "my-store-faa0e.firebaseapp.com",
    databaseURL: "https://my-store-faa0e.firebaseio.com",
    projectId: "my-store-faa0e",
    storageBucket: "my-store-faa0e.appspot.com",
    messagingSenderId: "37391982241"
  };
  firebase.initializeApp(config);

const database = firebase.database();
//const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export{ firebase,database as default};