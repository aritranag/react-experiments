function Modal(props) {
  function confirmHandler() {
    console.log("Confirm button clicked");
    props.onConfirm();
  }

  function cancelHandler() {
    console.log("Cancel button clicked");
    props.onCancel();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
