import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
const Todo = (props) => {
    const [OpenModal, setOpenModal] = useState(false);
    const DeleteHandler = () => {
        console.log("clicked btn");
        setOpenModal(true);
    }

    return (
        //this is not HTML ,this is JSX
        //with className we assig CSS to that element
        // I use modern javascript
        <div>
            <h1>My todos</h1>
            <div className="card">
                <h2>{props.text} </h2>
                <div className="actions" >
                    <button className="btn" onClick={() => DeleteHandler()} >Delete</button>
                </div>
            </div>
            {OpenModal ?
                <Modal onCancel={()=> setOpenModal(false)} onConfirm={()=> setOpenModal(false)} />
                :
                null}
            {OpenModal ?
                <Backdrop onClick={()=> setOpenModal(false)} />
                :
                null}
        </div>
    )
}

export default Todo;