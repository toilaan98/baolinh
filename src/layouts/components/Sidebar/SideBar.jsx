import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <aside className={cx("container")}>
            <h1>SideBar</h1>
        </aside>
    );
};
export default Sidebar;
