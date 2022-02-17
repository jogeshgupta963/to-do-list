import { useState, useRef, useEffect } from "react";
import React from 'react';


function List({ lists, deleteListItem }) {


    const div = useRef(new Array())
    function clickHandleDelete(id) {
        deleteListItem(id)
    }
    function clickHandleDone(id) {
        div.current[id].style.textDecoration = "line-through"
    }



    return (
        <>
            <h1 class="toDo">Your Today's Work</h1>
            {
                lists.map(list => {

                    return (
                        <>
                            <div className="list-preview" key={list.id}>
                                <div ref={(element) => div.current[list.id] = element}>{list.task}</div>
                                <button onClick={() => clickHandleDone(list.id)}> <span className="done">✔️</span> </button>
                                <button onClick={() => clickHandleDelete(list.id)} ><span className="del">🗑</span></button>
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