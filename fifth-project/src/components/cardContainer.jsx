import { use } from "react";
import Card from "./card";

function CardContainer({comments}) {
  const postComments = use(comments);
  return(
    <div className="flex justify-between flex-wrap" style={{gap:'20px'}}>
      {
        postComments.map(comment => {
          return <Card comment={comment}></Card>
        })
      }
    </div>
  )
}

export default CardContainer;