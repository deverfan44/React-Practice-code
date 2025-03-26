import { useState } from "react";

let batsmanName = ['Tamin','Musfiq','Mehedi']

export const BatsmanContainer = () => {
  return(
    <div className="flex justify-between items-center" style={{padding: '20px 0px'}}>
      {batsmanName.map((batsman,idx) => {
        return <Batsman key={idx} name={batsman}></Batsman>;
      })}
    </div>  
  )
}

export const Batsman = ({name}) => {
  const [runs, setRuns] = useState(0);
  const [fours, setFours] = useState(0);
  const [sixs, setSixs] = useState(0);
  function handleFour() {
    setFours(fours+1);
    setRuns(runs+4);
  }
  function handleSix() {
    setSixs(sixs+1);
    setRuns(runs+6);

  }
  return(
    <div className="card">
      <h3><small>Name: </small>{name.toUpperCase()}</h3>
      <p>Runs: {runs}</p>
      <p>Fours: {fours}</p>
      <p>Sixs: {sixs}</p>
      <div className="flex justify-between" style={{flexWrap:'wrap', padding: '10px 0px', gap:'10px'}}>
        <button onClick={()=> setRuns(runs+1)}>Score 1</button>
        <button onClick={()=> setRuns(runs+2)}>Score 2</button>
        <button onClick={handleFour}>Score 4</button>
        <button onClick={handleSix}>Score 6</button>
      </div>
    </div>
  )
}



