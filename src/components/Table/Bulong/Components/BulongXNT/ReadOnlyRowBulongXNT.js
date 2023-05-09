import styles from "./ReadOnlyRowBulongXNT.module.scss";
import classNames from "classnames/bind";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DecimalFormat, { RoundingMode } from "decimal-format";
import Button from "~/components/Button/Button";
import { bulongExportActions, bulongXntActions, isClickActions } from "~/store";
import { parsePath } from "react-router-dom";
import TotalBl from "./TotalBl";
import { bulongXntSlice } from "~/store/slice/bulongXntSlice";
const cx = classNames.bind(styles);
const df = new DecimalFormat("#,##0");
df.setRoundingMode(RoundingMode.UP);

function ReadOnlyRowBulongExport({ contact, index }) {
    const dispatch = useDispatch();

    const handleEditFormChange = (event) => {
        dispatch(bulongXntActions.handleGetId({ id: contact._id }));
        dispatch(bulongXntActions.handleEditFormChange(contact));
        dispatch(isClickActions.toggleHandle());
    };

    return (
        <>
            <tr className={cx("column")}>
                {/* <td>{index + 1}</td> */}
                <td className="font-bold w-48 bg-orange-300">
                    {contact.tencongty}
                </td>
                <td>{contact.m104}</td>
                <td>{contact.m106}</td>
                <td>{contact.m144}</td>
                <td>{contact.m14100}</td>
                <td>{contact.m164}</td>
                <td>{contact.m167}</td>
                <td>{contact.m16100}</td>
                <td>{contact.m16130}</td>
                <td>{contact.m16200}</td>
                <td>{contact.m16250}</td>
                <td>{contact.m16280}</td>
                <td>{contact.m16300}</td>
                <td>{contact.m16350}</td>
                <td>{contact.m18230}</td>
                <td>{contact.m18260}</td>
                <td>{contact.m18280}</td>
                <td>{contact.m18300}</td>
                <td>{contact.m18320}</td>
                <td>{contact.m18350}</td>

                <td>{contact.m18380}</td>
                <td>{contact.m18400}</td>
                <td>{contact.m18450}</td>
                <td>{contact.m18500}</td>
                <td>{contact.m18550}</td>
                <td>{contact.m18600}</td>
                <td>{contact.m18650}</td>
                <td>{contact.m18700}</td>
                <td>{contact.u16}</td>
                <td>{contact.udat}</td>
                <td>{contact.tangdo}</td>
                <td>{contact.ty16}</td>
                <td>{contact.ty18}</td>

                {/* <td>{createdAt[1]}</td> */}
                <td style={{ width: "120px" }}>
                    <Button outLine smaller onClick={handleEditFormChange}>
                        Edit
                    </Button>
                </td>
            </tr>
        </>
    );
}
export default ReadOnlyRowBulongExport;
