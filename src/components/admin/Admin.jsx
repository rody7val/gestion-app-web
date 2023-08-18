import { Link } from "react-router-dom";
function Admin() {
  return (
    <>
      <main>
        <h4>Administración</h4>
        <br />
        <ul>
          <li>
            <Link to="/admin/my">Mi sesión</Link>
          </li>
          <li>
            <Link className='disabled-link'>Sucursales</Link>
          </li>
          <li>
            <Link className='disabled-link'>Productos</Link>
          </li>
        </ul>
      </main>
    </>
  )
}

export default Admin;