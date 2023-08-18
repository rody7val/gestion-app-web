import "./header.scss"
import firebase from "firebase/compat/app";
import { Link } from "react-router-dom";

export default function Header({auth}) {
  return (
    <>
      <header>
      {auth !== null && <div className="auth">
          <div>
            <small>Accediste como:</small><br />
            <Link to="/admin/my">
              <kbd>
                {auth.displayName || auth.phoneNumber}
              </kbd>
            </Link>
          </div>
          <button onClick={() => firebase.auth().signOut()}>Salir</button>
        </div>}

        <h3>👨🏻‍💻 MI NEGOCIO</h3>
        <ul>
          <li>
            <Link to="/">Web</Link>
          </li>
          {auth === null && <li>
            <Link to="/auth/login">Acceder</Link>
          </li>}
          
          {auth !== null && <li>
            <Link to="/admin">Administración</Link>
          </li>}
        </ul>
      </header>
    </>
  )
}
