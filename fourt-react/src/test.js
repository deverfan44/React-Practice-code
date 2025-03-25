// function getSomething(num1, num2) {
//   const sum = num1+num2;
//   const multi = num1*num2;
//   let sub = (num1>num2)? num1-num2: num2-num1;

//   return [sum,sub,multi];
// }

// const [sum, sub, mul] = getSomething(5,6);
// console.log(sum);
// console.log(sub);
// console.log(mul);



// let state;
// function useState(initailValue) {
//   state = initailValue;
//   function setStates(newValue) {
//     state = newValue;
//   }
//   return [state, setStates];
// }

// const [count, setStates] = useState(10);
// console.log(count);
// setStates(count+5);
// console.log(state);
// setStates(state+5);
// console.log(state);
// setStates(state+5);
// console.log(state);


let users = ['erfan','kairm','rahim','salam'];

function userData() {
  return new Promise((resolve, reject)=> {
    const isError = false;
    if(!isError) {
      resolve(JSON.stringify(users))
    }
    else{
      console.error('Have a error');
    }
  })
}

userData().then(res => {
  const data = JSON.parse(res);
  console.log(data);
});
userData().then(res => res.json()).then(data => console.log(data));