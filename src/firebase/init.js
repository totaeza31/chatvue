import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

var firebaseConfig  = {
    apiKey: "AIzaSyB3NSh92WkuWGovp9_VUis5xUJ0Yt8AQzs",
    authDomain: "testvuechat.firebaseapp.com",
    databaseURL: "https://testvuechat-default-rtdb.firebaseio.com",
    projectId: "testvuechat",
    storageBucket: "testvuechat.appspot.com",
    messagingSenderId: "860730024980",
    appId: "1:860730024980:web:f355213e61522311cf7301",
    measurementId: "G-LK970PRTM3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig );
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();
