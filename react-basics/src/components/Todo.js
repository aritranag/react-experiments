import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    console.log(`Clicked delete on ${props.text}`);
    setModalOpen(true);
  }

  function closeModalHandler() {
    console.log("Closing modal");
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text || "Action"}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {isModalOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
