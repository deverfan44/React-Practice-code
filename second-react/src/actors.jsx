const actorInfo = [
  {name: 'Shahrukh Khan', age: 55},
  {name: 'Salman Khan', age: 55},
  {name: 'Aamir Khan', age: 55},
  {name: 'Tom Cruise', age: 59},
  {name: 'Erfaan\'s', age: 24},
  {name: 'Robert Downey Jr.', age: 56},
  {name: 'Tom Hanks', age: 65},
  {name: 'Brad Pitt', age: 57},
  {name: 'Leonardo DiCaprio', age: 46},
]

export const Actors = () => {
  return(
    <div>
      <div>
        <h2 style={{margin:'30px 0px', color:'skyblue'}}>Actors</h2>
      </div>
      <div>
        {
          actorInfo.map(actor =>  {
            return <Actor actorName={actor.name} actorAge={actor.age}></Actor>
          })
        }
      </div>
    </div>
  )
}


export const Actor = ({actorName, actorAge}) => {
  const actorStyle = {
    border: '2px solid lightgray',
    borderRadius: '10px',
    padding: '10px 20px',
    marginBottom: '10px',
    backgroundColor: (actorAge > 55)? 'lightcoral': 'lightgreen',
    color: 'black',
    textAlign: 'left'
  }
  if(actorAge < 40) {
    return null;
  }
  else {
    return(
      <div style={actorStyle}>
        <h3>Name: {actorName}</h3>
        <h3>Age: {actorAge}</h3>
        <div>
          <p>Actor Details</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi a cumque perspiciatis, sint temporibus molestias cum ratione voluptatem quas excepturi.</p>
        </div>
      </div>
    )
  }
}