import styles from "./ReadOnlyCustomer.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DecimalFormat, { RoundingMode } from "decimal-format";
import Button from "~/components/Button/Button";
import { customerActions, isClickActions, tableActions } from "~/store";
import { NavLink, parsePath, useLocation, useParams } from "react-router-dom";
const cx = classNames.bind(styles);
const df = new DecimalFormat("#,##0");
df.setRoundingMode(RoundingMode.UP);

function ReadOnlyCustomer({ data, index }) {
    const location = useLocation();
    const dispatch = useDispatch();
    const isId = useSelector((state) => state.customer.getId);
    console.log(isId);

    const handleEditFormChange = (event) => {
        console.log(data);
        dispatch(customerActions.handleGetId({ id: data._id }));
        dispatch(customerActions.handleEditFormChange(data));
        dispatch(isClickActions.toggleHandle());
    };
    // const createdAt = data.createdAt.split("T").reverse();

    // let total =
    //     (contact.blmk +
    //         contact.xamk +
    //         contact.cocday +
    //         contact.daydiennoiduoi +
    //         contact.det +
    //         contact.ve +
    //         contact.chupcot +
    //         contact.daydetnoiduoi +
    //         contact.trutram) *
    //     contact.dongia *
    //     contact.soluong;

    return (
        <tr className={cx("column")}>
            <td style={{ width: "40px" }} className={cx("stt")}>
                {" "}
                {index + 1}
            </td>
            <td className={cx("tenkhachhang")}>{data.tenkhachhang}</td>
            <td className={cx("tongtien")}>
                <NavLink
                    className="text-orange-700 underline mr-5"
                    to={`/construction/${isId}`}
                >
                    Các Công Trình
                </NavLink>
                <Button
                    outLine
                    smallest
                    onClick={() => {
                        dispatch(
                            customerActions.handleGetId({ getId: data._id })
                        );
                    }}
                >
                    get
                </Button>
            </td>

            <td className={cx("tongtien")}>{data.tongtien}</td>

            <td className={cx("soluong")}>{data.tongno}</td>

            <td className={cx("blmk")}>
                {data.createdAt.split("T").reverse()[1]}
            </td>

            {/* <td>{createdAt[1]}</td> */}
            <td style={{ width: "80px" }}>
                <Button
                    outLine
                    smallest
                    onClick={() => {
                        handleEditFormChange();
                    }}
                >
                    Edit
                </Button>
                <Button
                    onClick={() => {
                        dispatch(isClickActions.handleModalDone());

                        dispatch(
                            customerActions.handleGetId({ idDelete: data._id })
                        );
                        dispatch(isClickActions.toggleHandle());
                    }}
                    dele
                    smallest
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
}
export default ReadOnlyCustomer;
