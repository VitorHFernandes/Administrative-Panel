import firebase from "firebase/app"
import 'firebase/app';

if(!firebase.apps.length) {
  firebase.initializeApp({
    authDomain  : process.env._NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId   : process.env._NEXT_PUBLIC_FIREBASE_API_KEY,
    apiKey      : process.env._NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export default firebase