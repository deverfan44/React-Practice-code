import FuriteCard from "./furiteCard";
import style from '../styles/furiteCard.module.css'

function FuritesContainer({furites}) {
  return(
    <div className={style['card-container']}>
      {furites.map(furite => {
        return <FuriteCard furiteItem={furite}></FuriteCard>
      })}
    </div>
  )
}

export default FuritesContainer;