// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.log("The error is: ",error))


async function dataFetch(){
  const res =  await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = res.json();
  console.log(data);
}

dataFetch();