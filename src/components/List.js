import { useState, useRef } from "react";

function List({ lists, setterListt }) {
    console.log(lists)
    const div = useRef(null)
    function clickHandleDone(e) {
        e.preventDefault();
        console.log(div.current);
        div.current.style.textDecoration = "line-through";
    }
    return (
        <>

            {
                lists.map(list => {

                    return (
                        <>
                            <div ref={div}>{list.task}</div>
                            <button onClick={clickHandleDone}>Done</button>
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