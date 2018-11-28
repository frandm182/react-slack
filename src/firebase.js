import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var config = {
  apiKey: "",
  authDomain: "react-slack-frandeveloper.firebaseapp.com",
  databaseURL: "https://react-slack-frandeveloper.firebaseio.com",
  projectId: "react-slack-frandeveloper",
  storageBucket: "react-slack-frandeveloper.appspot.com",
  messagingSenderId: "783332347536"
};

firebase.initializeApp(config);

export default firebase;
