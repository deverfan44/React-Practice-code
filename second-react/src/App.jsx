import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Animal from './animal'

function App() {
  const styleApp = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  const mBottom = {
    marginBottom: '30px',
  }
  const test = 'tanim';
  return (
    <div style={{border: '5px solid red', padding: '20px',borderRadius: '10px'}}>
      <h1 style={mBottom}>React core concept</h1>
      <div style={styleApp}>
      <Student name='Erfan' depart='CSE'></Student>
      <Student name={`This is ${test}`} depart='EEE'></Student>
      <Student name='Karim' depart='CSE'></Student>
      </div>

      {/* Device component use  */}
      <div style={{...styleApp, marginTop: '30px', marginBottom: '30px'}}>
        <Device></Device>
      </div>

      {/* Animal Component use  */}
      <div>
        <div>
          <h2 style={{marginBottom:'20px', fontSize: '40px'}}>Animals</h2>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px'}}>
          <Animal name='Dog' price='10000' isYear={true} isAvailable={true}></Animal>
          <Animal name='Cat' price='1200' isYear={false} isAvailable={false}></Animal>
          <Animal name='Horse' isYear={true} isAvailable={true}></Animal>
          <Animal name='Tiger' price='155000' isYear={false} isAvailable={false}></Animal>
          <Animal name='Dog' isYear={true} isAvailable={true}></Animal>
          <Animal name='Cat' price='1200' isYear={true} isAvailable={true}></Animal>
          <Animal name='Horse' price='120000' isYear={true} isAvailable={false}></Animal>
          <Animal name='Tiger' price='155000' isYear={false} isAvailable={true}></Animal>
          <Animal name='Dog' price='10000' isYear={true} isAvailable={true}></Animal>
          <Animal name='Cat' price='1200' isYear={true} isAvailable={true}></Animal>
          <Animal name='Horse' price='120000' isYear={true} isAvailable={false}></Animal>
          <Animal name='Tiger' price='155000' isYear={false} isAvailable={true}></Animal>
        </div>
      </div>
    </div>
  )
}

function Student({name,depart}) {
  const stdStyle = {
    marginBottom: '10px',
    fontSize: '20px',
  }
  return (
    <div className='student' style={stdStyle}>
      <p>Name: {name}</p>
      <p>department: {depart}</p>
    </div>
  )
}

function Device() {
  return(
    <div>
      <h2 style={{marginBottom:'10px'}}>Our Device</h2>
      <Mobile name='Samsung' model='A50'></Mobile>
      <Mobile name='Nokia' model='3310'></Mobile>
      <Mobile name='Apple' model='iPhone 12'></Mobile>
    </div>
  )
}

function Mobile({name,model}) {
  return(
    <div style={{border: '2px solid selenium', padding: '15px', borderRadius: '10px', marginBottom: '10px', backgroundColor: 'lightgray',color: 'black'}}>
      <h3>Mobile name: {name}</h3>
      <p>Model: {model}</p>
    </div>
  )

}



export default App
