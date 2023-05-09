import styles from "./ReadOnlyConstruction.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DecimalFormat, { RoundingMode } from "decimal-format";
import Button from "~/components/Button/Button";
import { customerActions, isClickActions, tableActions } from "~/store";
import { NavLink, parsePath } from "react-router-dom";
import { contructionActions } from "~/store";
const cx = classNames.bind(styles);
const df = new DecimalFormat("#,##0");
df.setRoundingMode(RoundingMode.UP);

function ReadOnlyConstruction({ data, index }) {
    const isClick = useSelector((state) => state.click.isDelete);
    const isId = useSelector((state) => state.construction.getId);
    console.log(isId);
    const dispatch = useDispatch();
    const handleEditFormChange = (event) => {
        console.log(data);
        dispatch(contructionActions.handleGetId({ id: data._id }));
        dispatch(contructionActions.handleEditFormChange(data));
        dispatch(isClickActions.toggleHandle());
    };

    return (
        <tr className={cx("column")}>
            <td style={{ width: "40px" }} className={cx("stt")}>
                {" "}
                {index + 1}
            </td>
            <td className={cx("tencongtrinh")}>{data.tencongtrinh}</td>
            <td className={cx("tongtien")}>
                <NavLink
                    className="text-orange-700 pr-5 underline"
                    to={`/debt/${isId}`}
                >
                    Khối Lượng
                </NavLink>
                <Button
                    outLine
                    smallest
                    onClick={() => {
                        dispatch(
                            contructionActions.handleGetId({ getId: data._id })
                        );
                    }}
                >
                    get
                </Button>
            </td>
            <td className={cx("tongtien")}>{data.tongtien}</td>

            <td className={cx("soluong")}>{data.tongno}</td>

            <td className={cx("")}>{data.createdAt.split("T").reverse()[1]}</td>
            <td className={cx("")}>{data.updatedAt.split("T").reverse()[1]}</td>

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
                            contructionActions.handleGetId({
                                idDelete: data._id,
                            })
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
export default ReadOnlyConstruction;
