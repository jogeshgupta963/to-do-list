import List from "./components/List"
import Input from "./components/Input"
import { useState } from "react";
import './App.css'
function App() {


  const [lists, setLists] = useState([])

  function setterListt(task) {
    let obj = { task: task, id: lists.length }
    setLists([...lists, obj])
  }
  function deleteListItem(id) {

    let newList = lists.filter(item => item.id != id)
    setLists(newList)
  }


  return (
    <div className="container">
      <Input setterListt={setterListt} />
      <List lists={lists} deleteListItem={deleteListItem} />
    </div>
  );
}

export default App;
