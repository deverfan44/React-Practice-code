import { useState } from 'react'
import './App.css'
import CardContainer from './CardContainer'
import TodoHead from './TodoHead'
import TodoItem from './TodoItem'
// import TestFragment from './fragment'

function App() {
  const addTodo = () => {
    console.log(document.getElementById('todoName').value);
  }
  return(
    <div>
      <section>
      <CardContainer></CardContainer>
      </section>
      {/* // Todo App Project  */}
      <section className='my-12'>
        <div className='w-6/12 mx-auto bg-gray-400 border-2 border-red-600 p-5 space-y-3'>
          <div><h1 className='text-2xl font-semibold'>Todo App</h1></div>
          <TodoHead onClick={addTodo}></TodoHead>
          <TodoItem todoname="Buy Milk" tododate="04/05/2004"></TodoItem>
          <TodoItem todoname="Dairy Milk" tododate="09/04/2004"></TodoItem>
        </div>
      </section>
      {/* <TestFragment></TestFragment> */}
    </div>
  )
}
export default App
