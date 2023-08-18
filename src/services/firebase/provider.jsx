import {firebase} from './index.js';
import {createContext} from 'react';

export const FirebaseContext = createContext();

const FirebaseProvider = (props) => (
   <FirebaseContext.Provider value={firebase}>
      {props.children}
   </FirebaseContext.Provider>
);

export default FirebaseProvider;