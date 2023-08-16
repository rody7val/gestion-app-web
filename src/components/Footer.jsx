function Footer(props) {
  return (
    <>
      <footer>
        <small>{props.data.location}</small> <br />
        <small>{props.data.tel}</small> <br />
        <small>{props.data.dir}</small> <br />
        <small>{props.data.title}</small> <br />
      </footer>
    </>
  )
}

export default Footer;