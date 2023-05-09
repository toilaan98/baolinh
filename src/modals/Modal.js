import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Modal() {
    function Backdrop() {
        return <div className={cx("modal")}></div>;
    }
    function Overlay() {
        return <div className={cx("overlay")}></div>;
    }
    return (
        <div>
            {ReactDOM.createPortal(
                <Overlay />,
                document.getElementById("overlay-root")
            )}
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById("backdrop-root")
            )}
        </div>
    );
}
export default Modal;
