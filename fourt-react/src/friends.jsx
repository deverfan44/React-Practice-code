import { use } from 'react' 

export default function Friends({fetchUsers}) {
  const users = use(fetchUsers);
  return(
    <div className="flex items-center justify-between" style={{flexWrap: 'wrap',rowGap: '15px', margin:'50px 0px'}}>
      {users.map((friend, idx) => {
        return <Friend key={friend.id} friend={friend}></Friend>
      })}
    </div>
  )
}

export function Friend({friend}) {
  const {username, address, email} = friend;
  return(
    <div className="card">
      <h2>Username: {username}</h2>
      <p>Address: {address.city}</p>
      <small>Email: {email}</small>
    </div>
  )
}