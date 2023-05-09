import styles from "./ReadOnlyRow.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DecimalFormat, { RoundingMode } from "decimal-format";
import Button from "~/components/Button/Button";
import { isClickActions, tableActions } from "~/store";
import { parsePath } from "react-router-dom";
const cx = classNames.bind(styles);
const df = new DecimalFormat("#,##0");
df.setRoundingMode(RoundingMode.UP);

function ReadOnlyRow({ contact, index }) {
    const isClick = useSelector((state) => state.click.isDelete);
    const isId = useSelector((state) => state.click.handleGetId);

    const dispatch = useDispatch();

    const handleEditFormChange = (event) => {
        dispatch(isClickActions.handleGetId(contact._id));
        dispatch(tableActions.handleEditFormChange(contact));
        dispatch(isClickActions.toggleHandle());
    };
    const createdAt = contact.createdAt.split("T").reverse();

    let total =
        (contact.blmk +
            contact.xamk +
            contact.cocday +
            contact.daydiennoiduoi +
            contact.det +
            contact.ve +
            contact.chupcot +
            contact.daydetnoiduoi +
            contact.trutram) *
        contact.dongia *
        contact.soluong;

    return (
        <tr className={cx("column")}>
            <td className={cx("stt")}>{index + 1}</td>
            <td className={cx("tenhanghoa")} style={{ width: "260px" }}>
                {contact.tenhanghoa}
            </td>
            <td className={cx("dvt")} style={{ width: "20px" }}>
                {contact.dvt}
            </td>

            <td className={cx("soluong")} style={{ width: "20px" }}>
                {contact.soluong}
            </td>

            <td className={cx("blmk")} style={{ width: "10px" }}>
                {`${contact.blmk} * ${contact.blmkDg}`}
            </td>
            <td className={cx("xamk")} style={{ width: "10px" }}>
                {`${contact.xamk} * ${contact.xamkDg}`}
            </td>
            <td className={cx("cocday")} style={{ width: "40px" }}>
                {`${contact.cocday} * ${contact.cocdayDg}`}
            </td>
            <td className={cx("daydiennoiduoi")} style={{ width: "40px" }}>
                {`${contact.daydiennoiduoi} * ${contact.daydiennoiduoiDg}`}
            </td>
            <td className={cx("det")} style={{ width: "40px" }}>
                {`${contact.det} * ${contact.detDg}`}
            </td>
            <td className={cx("ve")} style={{ width: "40px" }}>
                {`${contact.ve} * ${contact.veDg}`}
            </td>
            <td className={cx("chupcot")} style={{ width: "40px" }}>
                {`${contact.chupcot} * ${contact.chupcotDg}`}
            </td>
            <td className={cx("daydetnoiduoi")} style={{ width: "40px" }}>
                {`${contact.daydetnoiduoi} * ${contact.daydetnoiduoiDg}`}
            </td>
            <td className={cx("trutram")} style={{ width: "40px" }}>
                {`${contact.trutram} * ${contact.trutramDg}`}
            </td>
            {/* <td className={cx("dongia")} style={{ width: "40px" }}>
                {contact.dongia}
            </td> */}
            <td className={cx("thanhtien")} style={{ width: "40px" }}>
                {" "}
                {df.format(contact.thanhtien)}
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
                        dispatch(isClickActions.toggleHandle());
                        dispatch(isClickActions.handleGetId(contact._id));
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
export default ReadOnlyRow;
