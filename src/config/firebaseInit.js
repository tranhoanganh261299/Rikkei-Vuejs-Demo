import firebase from 'firebase';
import firebaseconfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseconfig);
export default firebaseApp.firestore();