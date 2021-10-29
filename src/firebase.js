import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAsLE3j8YUB7A4YRyuL0UqTfIFvN-KK9Q",
  authDomain: "team-rockstars-jessy.firebaseapp.com",
  projectId: "team-rockstars-jessy",
  storageBucket: "team-rockstars-jessy.appspot.com",
  messagingSenderId: "278688888536",
  appId: "1:278688888536:web:b2ec2726f454e9126649ad",
  measurementId: "G-H6FLZXRKJ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
