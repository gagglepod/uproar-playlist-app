import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByKbViZ1QTADUriMUWrmJx1gllDFo4pn4",
  authDomain: "uproar-playlist.firebaseapp.com",
  projectId: "uproar-playlist",
  storageBucket: "uproar-playlist.appspot.com",
  messagingSenderId: "748309353895",
  appId: "1:748309353895:web:487ab0ebc5e376b0091282",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
