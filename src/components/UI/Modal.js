import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css"

const Backdrop = (props) => {
    return <div className={styles.backdrop}></div>
};

const ModalOverlays = (props) => {
    return(
        <div className ={styles.modal}>
            <div className ={styles.content}>{props.children}</div>
        </div>
    )
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop/>, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, document.getElementById("overlays"))}
    </React.Fragment>
  );
};

export default Modal;
