// console.log(typeof NaN);
// console.log(typeof undefined);
// console.log(typeof null);


// console.log(Number('erfan'));
// console.log(0/0);
// console.log(10/0);
// console.log(Math.sqrt(4))
// console.log(Math.sqrt(-4))

// console.log(NaN == NaN);
// console.log(NaN === NaN);

// console.log(NaN !== NaN);

// console.log(NaN < 2);
// console.log(NaN > 2);
// console.log(NaN === 2);



console.log("Start");

setTimeout(() => console.log("Timeout"), 0);
setTimeout(() => console.log("erfan"), 0);

Promise.resolve().then(() => console.log("Promise")).catch((err)=>console.log(err));
Promise.reject().then(() => console.log("Promise")).catch((err)=>console.log(err));

console.log("End");