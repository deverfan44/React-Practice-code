import './App.css'
import {HeaderLogo, NavBar, HeaderBtn} from './header'
import {CardContaier} from './card'
import { Counter } from './counter'
import {BatsmanContainer, Batsman} from './batsman'
import { Users } from './users'
import { Suspense } from 'react'
import Friends from './friends'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
//or 
const fetchUsers = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const headerStyle = {
    backgroundColor:'#282c34',
    padding:'15px 40px',
  }
  const  fetchFriends = fetchUsers();
  
  return (
    <>
      <header className='flex items-center justify-between' style={headerStyle}>
        <HeaderLogo></HeaderLogo>
        <NavBar></NavBar>
        <HeaderBtn></HeaderBtn>
      </header>
      <main className='fixed-container'>
        <CardContaier></CardContaier>
        <Counter></Counter>
        <BatsmanContainer></BatsmanContainer>

        <div>
          <Suspense fallback={<p>Data is loading.....</p>}>
            <Users fetchUsers = {fetchFriends}></Users>
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<p>User is loading.....</p>}>
            <Friends fetchUsers={fetchFriends}></Friends>
          </Suspense>
        </div>
      </main>
    </>
  )
}

export default App
