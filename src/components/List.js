import { useState } from "react";

function List({ lists, setterListt }) {
    console.log(lists)

    // const [task, setTask] = useState("")

    // function taskSetter(item) {
    //     setTask(item)
    // }
    // clickHandle()
    return (
        <>

            {
                lists.map(list => {
                    // taskSetter(list.task)
                    return (
                        <>
                            <div value={list.task}>{list.task}</div>
                            {/* <button onClick={clickHandle}>Done</button> */}
                            <button >Delete</button>
                            <button>edit</button>
                        </>

                    )
                })
            }
        </>
    );
}

export default List;