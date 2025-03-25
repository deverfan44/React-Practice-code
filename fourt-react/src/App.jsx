import './App.css'
import {HeaderLogo, NavBar, HeaderBtn} from './header'
import {CardContaier} from './card'


function App() {
  const headerStyle = {
    backgroundColor:'#282c34',
    padding:'15px 40px',
  }
  
  return (
    <>
      <header className='flex items-center justify-between' style={headerStyle}>
        <HeaderLogo></HeaderLogo>
        <NavBar></NavBar>
        <HeaderBtn></HeaderBtn>
      </header>
      <main className='fixed-container'>
        <CardContaier></CardContaier>
      </main>
    </>
  )
}

export default App
