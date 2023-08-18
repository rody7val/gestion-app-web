import 'firebaseui/dist/firebaseui.css';
import './auth.scss';

import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';

import {useEffect} from 'react';

export default function AuthGoogle () {
const ui = firebaseui.auth.AuthUI.getInstance() ||
new firebaseui.auth.AuthUI(firebase.auth());
 
  useEffect(() => {

    ui.start(".firebase-auth-container", {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: "/admin",
      //privacyPolicyUrl: "/auth/privacy-policy",
      //termOfServiceUrl: "/auth/term-of-service",
     });
  }, [firebase.auth()]);

  return <main>
    <h6>Acceder</h6>
    <div className={"firebase-auth-container"}></div>
  </main>
}