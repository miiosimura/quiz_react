import Firebase from 'firebase'
import Rebase from 're-base'

var firebaseConfig = {
  apiKey: "AIzaSyC9NcbZcCkJ8SXbK4Oni07lB5anQUBnot8",
  authDomain: "miiosimura-projeto-quiz-react.firebaseapp.com",
  databaseURL: "https://miiosimura-projeto-quiz-react.firebaseio.com",
  projectId: "miiosimura-projeto-quiz-react",
  storageBucket: "miiosimura-projeto-quiz-react.appspot.com",
  messagingSenderId: "317607392603",
  appId: "1:317607392603:web:3877ef536f7cf1c24b567e",
  measurementId: "G-91B92JDKX2"
};
// Initialize Firebase
const db = firebase.database(firebaseConfig)
const config = Rebase.createClass(db)

export default config