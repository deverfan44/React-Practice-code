import { use } from "react";
export const Users = ({fetchUsers}) => {
  const userStyle = {
    border: '1px solid red',
    padding: '10px',
  }
  const messageContent = use(fetchUsers);
  return(
    <div style={userStyle}>
      {/* <h3>Users: {messageContent[0].name}</h3> */}
      <h3>Users: {messageContent.length}</h3>
    </div>
  )
}