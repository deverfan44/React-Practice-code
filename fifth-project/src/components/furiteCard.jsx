import style from '../styles/furiteCard.module.css'

function FuriteCard({furiteItem}) {
  return(
    <div className = {style['card']}>
      <h3 className={style['card-heading']}>{furiteItem.name}</h3>
      <p>{furiteItem.price}</p>
    </div>
  )
}

export default FuriteCard;