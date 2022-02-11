import List from "./components/List"
import Input from "./components/Input"
import { useState } from "react";
function App() {


  const [lists, setLists] = useState([])

  function setterListt(task) {
    console.log("task is" + task)
    let obj = { task: task, id: lists.length }
    setLists([...lists, obj])
  }
  console.log(lists)

  return (
    <>
      <Input setterListt={setterListt} />
      <List lists={lists} setterListt={setterListt} />
    </>
  );
}

export default App;
