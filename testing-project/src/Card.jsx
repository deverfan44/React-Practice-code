function Card({imgsrc}) {
  const cardStyle = {
    padding: '15px',
    border: '1px solid black',
    borderRadius: '8px',
    // 'border-radius': '15px',
    // width: '30%'
  }
  return(
    <div style={cardStyle} className="bg-orange-500">
      <div>
        <img src={imgsrc} className="width-full" alt="Dog" />
      </div>
      <div>
        <h5 style={{fontSize: '20px', margin:'10px 0px'}}>Dog</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus rerum consequatur saepe quidem id maiores reprehenderit illo quibusdam recusandae quisquam.</p>
      </div>
    </div>
  )
}

export default Card;