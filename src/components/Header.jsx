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

        <h5>👨🏻‍💻 MI NEGOCIO</h5>
        <ul>
          <li>
            <Link to="/">Sitio web</Link>
          </li>
          {auth === null && <li>
            <Link to="/login">Acceder</Link>
          </li>}
          
          {auth !== null && <li>
            <Link to="/admin">Administración</Link>
          </li>}
        </ul>
      </header>
    </>
  )
}
