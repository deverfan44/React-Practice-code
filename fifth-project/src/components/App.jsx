import '../styles/App.css'
import Header from './header';
import CardContainer from './cardContainer';
import { Suspense } from 'react';
import FuritesContainer from './furitesContainer';

const fetchComment = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  return res.json();
}

let furites = [
  {name: 'Mango',price: '130tk'},
  {name: 'Banana',price: '120tk'},
  {name: 'Watermelon',price: '200tk'},
]
function App() {
  const fetchComments = fetchComment();
  return (
    <>
      <Header></Header>
      <main>
        <div>
          <div>
            <h2 style={{textAlign:'center'}}>Explore Css Modules</h2>
          </div>
          <FuritesContainer furites={furites}></FuritesContainer>
        </div>

        <div>
          <div>
            <h2 style={{textAlign:'center'}}>Explore fetch data</h2>
          </div>
          <Suspense fallback={`Data is loading.....`}>
            <CardContainer comments={fetchComments}></CardContainer>
          </Suspense>
        </div>
      </main>
    </>
  )
}

export default App;
