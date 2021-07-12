import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD06mJhrQbmxxvNumB_QoeS8JYruFJcElc",
    authDomain: "auth-demo-e45d6.firebaseapp.com",
    databaseURL: "https://auth-demo-e45d6.firebaseio.com",
    projectId: "auth-demo-e45d6",
    storageBucket: "auth-demo-e45d6.appspot.com",
    messagingSenderId: "672516258440",
    appId: "1:672516258440:web:6471cda10a03d2a0b2bd3d"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt :'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;