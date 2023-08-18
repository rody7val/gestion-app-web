function My({user}) {

  return (
    <>
      <main>
        <h4>Mi sesión</h4>
        <br />

        <label>Acceso</label>
        {user.providerData.map((item, key) => <p key={key}>
          {(() => {
                switch(item.providerId) {
                  case "phone":
                    return <code>📱 Teléfono</code> ;
                  case "password":
                    return "📧🔑 Correo y contraseña"
                  case "google.com":
                    return "🇬 Google"
                }
            })()}
        </p>)}

        <label>Correo verificado?</label>
        <p>
        {user.emailVerified && <code>✅ si</code>}
        {!user.emailVerified && <code>❌ no</code>}
        </p>

        <label>Contacto</label>
        <p>
          {user.displayName && <><code>{user.displayName}</code><br /></>}
          {user.email && <><code>{user.email}</code><br /></>}
          {user.phoneNumber && <><code>{user.phoneNumber}</code><br /></>}
        </p>
        
        {user.photoURL && <img src={user.photoURL} alt={user.email} />}

      </main>
    </>
  )
}

export default My;