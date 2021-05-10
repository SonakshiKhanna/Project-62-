import firebase  from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk7WlPZ512HOiy9-tUCSUsN5i9Qu8CQHI",
  authDomain: "school-attendnace-app.firebaseapp.com",
  databaseURL: "https://school-attendnace-app-default-rtdb.firebaseio.com",
  projectId: "school-attendnace-app",
  storageBucket: "school-attendnace-app.appspot.com",
  messagingSenderId: "572367842052",
  appId: "1:572367842052:web:d0c30995bc4dc360bf7e51"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
