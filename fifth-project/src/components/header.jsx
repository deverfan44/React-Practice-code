import NavBar from "./nav";

function Header() {
  return(
    <header className="flex justify-between" style={{padding: '15px 0px'}}>
      {/* brand logo  */}
      <div>
        <p style={{fontWeight:'600', fontSize:'25px'}}>Erfaans</p>
      </div>
      {/* navbar  */}
      <NavBar></NavBar>
    </header>
  )
}

export default Header;