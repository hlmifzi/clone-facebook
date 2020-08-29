import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBygxB-RzAzjrtnVRXUFYBx9iyAv8aBesY",
    authDomain: "clone-facebook-6c145.firebaseapp.com",
    databaseURL: "https://clone-facebook-6c145.firebaseio.com",
    projectId: "clone-facebook-6c145",
    storageBucket: "clone-facebook-6c145.appspot.com",
    messagingSenderId: "192880678220",
    appId: "1:192880678220:web:49e221a49e40e3529eabe9",
    measurementId: "G-QJQ52P4V6V"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db