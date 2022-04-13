
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeHc-RPsjMGDh6IPTOMzAP8kza3KzxDKI",
  authDomain: "hotel-website-e41e4.firebaseapp.com",
  projectId: "hotel-website-e41e4",
  storageBucket: "hotel-website-e41e4.appspot.com",
  messagingSenderId: "719403374606",
  appId: "1:719403374606:web:ddc86b2b5b6c2f59bdc45f"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;