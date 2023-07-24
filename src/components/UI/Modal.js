import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
    
};

const Modaloverlays = (props) => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    );
};

const portalSpace = document.getElementById('overlays');

const Modal = (props) => {
    return <Fragment>
              {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalSpace)}
              {ReactDOM.createPortal(<Modaloverlays>{props.children}</Modaloverlays>, portalSpace)}
           </Fragment>
    
    
};

export default Modal;