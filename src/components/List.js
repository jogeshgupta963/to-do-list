import { useState, useRef } from "react";

function List({ lists, deleteListItem }) {


    function clickHandleDelete(id) {
        deleteListItem(id)
    }
    return (
        <>

            {
                lists.map(list => {

                    return (
                        <>
                            <div className="list-preview" key={list.id}>
                                <div >{list.task}</div>
                                <button>Done</button>
                                <button onClick={() => clickHandleDelete(list.id)} >Delete</button>
                                <button>edit</button>
                            </div>
                        </>

                    )
                })
            }
        </>
    );
}

export default List;