import { useState } from "react";

let batsmanName = ['Tamin','Musfiq','Mehedi']

export const BatsmanContainer = () => {
  return(
    <div className="flex justify-between items-center" style={{padding: '20px 0px'}}>
      {batsmanName.map(batsman => {
        return <Batsman name={batsman}></Batsman>;
      })}
    </div>  
  )
}

export const Batsman = ({name}) => {
  const [runs, setRuns] = useState(0);
  return(
    <div className="card">
      <h3><small>Name: </small>{name.toUpperCase()}</h3>
      <p>Runs: {runs}</p>
      <div className="flex justify-between" style={{flexWrap:'wrap', padding: '10px 0px', gap:'10px'}}>
        <button onClick={()=> setRuns(runs+1)}>Score 1</button>
        <button onClick={()=> setRuns(runs+2)}>Score 2</button>
        <button onClick={()=> setRuns(runs+4)}>Score 4</button>
        <button onClick={()=> setRuns(runs+5)}>Score 6</button>
      </div>
    </div>
  )
}