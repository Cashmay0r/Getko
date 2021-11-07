import {
  initializeApp,
  getApps
} from "firebase/app";
import {
  getAnalytics,
} from "firebase/analytics";


const config = {
  apiKey: "AIzaSyD1cEZC39UUWwByVLeinL8ZMnee-TPbQ4o",
  authDomain: "getko-b4be9.firebaseapp.com",
  projectId: "getko-b4be9",
  storageBucket: "getko-b4be9.appspot.com",
  messagingSenderId: "578777348041",
  appId: "1:578777348041:web:7cc58ca86b2309219b1a18",
  measurementId: "G-R9DHYQMM2G"
}

if (!getApps.length) {
  initializeApp(config)
}
