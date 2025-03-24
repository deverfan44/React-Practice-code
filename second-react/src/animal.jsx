export default function Animal({name,price,isYear, isAvailable}) {
  return(
    <AnimalAvail animalName={name} animalPrice={price} isYear={isYear} isAvailable={isAvailable}></AnimalAvail>
  )
}


function AnimalAvail({animalName,animalPrice,isYear, isAvailable}) {
  const baseStyle = {
    padding: '15px 20px', 
    borderRadius: '6px', 
    color: 'white', 
    width: '30%',
    
  }
  const availabilityStyle  = {
    backgroundColor: isAvailable ?  'tomato' : 'skyblue',
    color: isAvailable ? 'white' : 'black'
  };
  const mBottom = {marginBottom:'5px'};
  
  return (
    <div style={{...availabilityStyle, ...baseStyle}}>
        <h2 style={mBottom}>Animal name: {animalName}</h2>
        <p style={mBottom}>Animal price: {animalPrice}</p>
        <p style={mBottom}>Is 2year+: {isYear.toString()}</p>
        <p style={mBottom}>Is Availale+: {isAvailable ? 'Yes' : 'NO'}</p>
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