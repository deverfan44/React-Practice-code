export default function Animal({name,price,isYear, isAvailable}) {
  return(
    <AnimalAvail animalName={name} animalPrice={price} isYear={isYear} isAvailable={isAvailable}></AnimalAvail>
  )
}


function AnimalAvail({animalName,animalPrice,isYear, isAvailable}) {
  const mBottom = {
    marginBottom:'5px',
  }
  const newStyle = {};
  let text;
  if(isAvailable===true) {
    newStyle.backgroundColor = 'tomato';
    newStyle.color = 'white';
    text = 'Yes';
  }
  else{
    newStyle.backgroundColor = 'skyblue';
    newStyle.color = 'black';
    text = 'NO';
  }
  return (
    <div style={{...newStyle, padding: '15px 20px', borderRadius: '6px', color: 'white', width: '30%'}}>
        <h2 style={mBottom}>Animal name: {animalName}</h2>
        <p style={mBottom}>Animal price: {animalPrice}</p>
        <p style={mBottom}>Is 2year+: {isYear.toString()}</p>
        <p style={mBottom}>Is Availale+: {text}</p>
        <div className='buttonAnimal'>
          <button>Details</button>
          <button>Buy</button>
        </div>
      </div>
  ) 
}



// export default function Animal(props) {
//   const mBottom = {
//     marginBottom:'5px',
//   }
//   props.name = 'erfan'; // it's not possible to change the value of props because it's read-only
//   return(
//     <div style={{backgroundColor: 'tomato', padding: '15px 20px', borderRadius: '6px', color: 'white', width: '30%'}}>
//       <h2 style={mBottom}>Animal name: {props.name.toUpperCase()}</h2>
//       <p style={mBottom}>Animal price: {props.price}</p>
//       <div className='buttonAnimal'>
//         <button>Details</button>
//         <button>Buy</button>
//       </div>
//     </div>
//   )
// }