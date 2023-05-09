import img from "~/assets/images";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSign, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles);
const Header = () => {
    const hanldeActionSignUp = () => {
        console.log("clicked");
    };
    return (
        <header className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("logo-youtube")}>
                    <img src={img.logo.default} alt="" />
                </div>
                <nav className={cx("navbar")}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? cx("outLine") : cx("padding")
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? cx("outLine") : cx("padding")
                        }
                        to="/construction"
                    >
                        Construction
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? cx("outLine") : cx("padding")
                        }
                        to="/Debt"
                    >
                        Debt
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? cx("outLine") : cx("padding")
                        }
                        to="/bulong"
                    >
                        Bulong
                    </NavLink>
                </nav>
                <div className={cx("action")}>
                    <Button outLine>SignUp</Button>
                    <Button>Login</Button>
                </div>
            </div>
        </header>
    );
};
export default Header;
