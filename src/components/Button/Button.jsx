import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const Button = ({
    to,
    displayCenter = false,
    href,
    className,
    primary = false,
    smaller = false,
    smallest = false,
    large = false,
    outLine = false,
    dele = false,
    children,
    leftIcon = false,
    rightIcon = false,
    onClick,
    disabled = false,

    ...passProps
}) => {
    let Component = "button";

    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = "a";
    }

    const classes = cx("wrapper", {
        primary,
        [className]: className,
        outLine,
        dele,
        displayCenter,
        smaller,
        large,
        disabled,
        rightIcon,
        leftIcon,
        smallest,
    });
    if (disabled) {
        console.log(Object.keys(props));
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on")) {
                delete props[key];
                console.log(key.startsWith("on"));
            }
        });
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {leftIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Component>
    );
};
export default Button;
