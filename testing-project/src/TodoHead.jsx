function TodoHead(){
  return(
    <div className="grid grid-cols-3 gap-x-2">
      <div>
        <input type="text" name="TodoName" id="todoName" className="py-2 px-3 text-xl max-w-full border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter todo here..."/>
      </div>
      <div>
        <input type="date" name="TodoDate" className="py-2 px-3 text-xl max-w-full border border-gray-300 rounded-lg" id="todoData" />
      </div>
      <div className="text-right">
        <button type="button" className="py-2 px-3 text-xl w-[70%] bg-green-600 rounded-lg text-white">Add</button>
      </div>
    </div>
  )
}

export default TodoHead;