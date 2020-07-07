import Firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBAEwNDDDzY0tICZLCcxys8F0MJ4ZxJojE",
  authDomain: "whack-f26c3.firebaseapp.com",
  databaseURL: "https://whack-f26c3.firebaseio.com",
  projectId: "whack-f26c3",
  storageBucket: "whack-f26c3.appspot.com",
  messagingSenderId: "497579605609",
  appId: "1:497579605609:web:0963962ceb50e6ed966cf8",
  measurementId: "G-N94PDJR4TX",
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
