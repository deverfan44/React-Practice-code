import './App.css'
import reactLogo from "./assets/reacticon.png"

export const HeaderLogo = () => {
  return(
    <div className="flex items-center" style={{gap:'10px'}}>
      <img className="logoStyle" src={reactLogo} alt="react logo"></img>
      <p style={{fontSize:'24px'}}>React</p>
    </div>
  )
}

export const NavBar = () => {
  const liStyle ={
    border:'1px solid white',
    padding:'5px 14px',
    borderRadius:'5px',
    cursor:'pointer'
  }
  return(
    <nav>
      <ul className='list-none flex' style={{gap:'20px'}}>
        <li style={liStyle}>Home</li>
        <li style={liStyle}>About</li>
        <li style={liStyle}>Contact</li>
      </ul>
    </nav>
  )
}

export const HeaderBtn = () => {
  return(
    <div>
      <button className="btnStyle" style={{backgroundColor: '#60DAF9', color:'black'}}>Sign In</button>
    </div>
  )
}