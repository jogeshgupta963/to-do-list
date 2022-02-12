import { useState } from 'react';

function Input({ setterListt }) {

    const [input, setInput] = useState("")

    function changeHandle(e) {
        setInput(e.target.value);
    }
    function clickHandle(e) {
        e.preventDefault();
        setterListt(input)
    }


    return (
        <>
            <form >
                <h1>Your Today's Work</h1>
                <input type="text" value={input} placeholder="toDo" onChange={changeHandle} />
                <button onClick={clickHandle}>Add</button>
            </form>
        </>
    );
}

export default Input;