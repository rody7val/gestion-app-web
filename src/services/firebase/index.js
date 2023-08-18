import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import 'firebase/compat/storage'
// import 'firebase/functions'

export const init = (config) =>{
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}

//export const auth = firebase.auth();
export {firebase}