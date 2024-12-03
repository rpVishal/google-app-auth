import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "Paste your config",
  authDomain: "Paste your config",
  projectId: "Paste your config",
  storageBucket: "Paste your config",
  messagingSenderId: "Paste your config",
  appId: "Paste your config",
  measurementId: "Paste your config"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
