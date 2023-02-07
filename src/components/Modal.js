const Modal=(props)=>{

    const CancelHandler=()=>{
        props.onCancel();
    }

    const ConfirmHandler =()=>{
        props.onConfirm();
    }


return(
<div className="modal">
    <p>Are you sure?</p>
    <button onClick={CancelHandler} className="btn btn--alt " >Cancel</button>
    <button onClick={ConfirmHandler} className="btn">Confirm</button>
</div>
)
}

export default Modal;