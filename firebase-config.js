// Firebase configuration for NEET Test Platform
// Yeh file Firebase project ko is website se jodti hai.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9O_IXZCPWs_O0wH71aX1Qw2a9TN_2Nk4",
  authDomain: "neet-live-test-platform.firebaseapp.com",
  projectId: "neet-live-test-platform",
  storageBucket: "neet-live-test-platform.firebasestorage.app",
  messagingSenderId: "112576254901",
  appId: "1:112576254901:web:4619f85316ca33231e3ffc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (our database)
const db = getFirestore(app);

export { db };
