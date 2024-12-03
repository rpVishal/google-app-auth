import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0v0NByTpQqZE4noBe6tA6M0YRrddl9oE",
  authDomain: "coding-assignment-920fc.firebaseapp.com",
  projectId: "coding-assignment-920fc",
  storageBucket: "coding-assignment-920fc.firebasestorage.app",
  messagingSenderId: "679152655064",
  appId: "1:679152655064:web:796a21889fd2b695e615ad",
  measurementId: "G-SPZB0B4XF5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
