import '../styles/App.css'
import Header from './header';
import CardContainer from './cardContainer';
import { Suspense } from 'react';

const fetchComment = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  return res.json();
}

function App() {
  const fetchComments = fetchComment();
  return (
    <>
      <Header></Header>
      <main>
        <div>
          <Suspense fallback={`Data is loading.....`}>
            <CardContainer comments={fetchComments}></CardContainer>
          </Suspense>
        </div>
      </main>
    </>
  )
}

export default App;
