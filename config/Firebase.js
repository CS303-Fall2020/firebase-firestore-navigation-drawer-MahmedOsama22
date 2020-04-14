import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage';

const firebaseConfig = {
   apiKey: "AIzaSyAoVQ1gXiUZRr5dSLCY1WlkPZW_J6sVuzI",
  authDomain: "account-f6781.firebaseapp.com",
  databaseURL: "https://account-f6781.firebaseio.com",
  projectId: "account-f6781",
  storageBucket: "account-f6781.appspot.com",
  messagingSenderId: "24346134395",
  appId: "1:24346134395:web:472d7dd3f1d1372612dfde",
  measurementId: "G-92VL38BY5J"
}
 export default !firebase.apps.length ?
  firebase.initializeApp(firebaseConfig) : firebase.app();
