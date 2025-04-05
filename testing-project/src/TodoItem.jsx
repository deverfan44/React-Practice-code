function TodoItem({todoname,tododate}){
  return(
    <div className="grid grid-cols-3 gap-x-2 text-white">
      <div>
        <p className="text-xl text-left">{todoname}</p>
      </div>
      <div>
        <p className="text-xl text-left">{tododate}</p>
      </div>
      <div className="text-right">
        <button type="button" className="py-2 px-3 text-xl w-[70%] bg-red-600 rounded-lg text-white">Delete</button>
      </div>
    </div>
  )
}


export default TodoItem;