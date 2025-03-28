function NavBar() {
  const liStyle = {
    fontSize: '20px',
    fontWeight: '600',
  }
  return(
    <nav>
        <ul className="flex items-center" style={liStyle}>
          <li style={{marginLeft:'30px'}}><a href="#">Home</a></li>
          <li style={{marginLeft:'30px'}}><a href="#">About</a></li>
          <li style={{marginLeft:'30px'}}><a href="#">Courses</a></li>
          <li style={{marginLeft:'30px'}}><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default NavBar;