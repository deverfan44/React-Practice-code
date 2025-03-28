function Card({comment}) {
  const cardStyle = {
    padding: '15px',
    textAlign: 'center',
    borderRadius: '10px',
    backgroundColor: 'teal',
    color: 'white'
  }
  return(
    <div className="w-30" style={cardStyle}>
      <h4>{comment.name}</h4>
      <p style={{margin: '10px 0px'}}>{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  )
}

export default Card