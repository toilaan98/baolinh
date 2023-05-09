import { useDispatch, useSelector } from "react-redux";
import { isClickActions } from "~/store";
import { Fragment, useState } from "react";
import Button from "~/components/Button/Button";
import styles from "./Bulong.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const TotalBl = () => {
    const dispatch = useDispatch();
    const bulongImportDB = useSelector((state) => state.counter.bulongImport);

    const m104 = bulongImportDB.reduce((total, value) => {
        return total + value.m104;
    }, 0);
    const m106 = bulongImportDB.reduce((total, value) => {
        return total + value.m106;
    }, 0);
    const m144 = bulongImportDB.reduce((total, value) => {
        return total + value.m144;
    }, 0);
    const m14100 = bulongImportDB.reduce((total, value) => {
        return total + value.m14100;
    }, 0);
    const m164 = bulongImportDB.reduce((total, value) => {
        return total + value.m164;
    }, 0);
    const m167 = bulongImportDB.reduce((total, value) => {
        return total + value.m167;
    }, 0);
    const m16100 = bulongImportDB.reduce((total, value) => {
        return total + value.m16100;
    }, 0);
    const m16130 = bulongImportDB.reduce((total, value) => {
        return total + value.m16130;
    }, 0);
    const m16200 = bulongImportDB.reduce((total, value) => {
        return total + value.m16200;
    }, 0);
    const m16250 = bulongImportDB.reduce((total, value) => {
        return total + value.m16250;
    }, 0);
    const m16280 = bulongImportDB.reduce((total, value) => {
        return total + value.m16280;
    }, 0);
    const m16300 = bulongImportDB.reduce((total, value) => {
        return total + value.m16300;
    }, 0);
    const m16350 = bulongImportDB.reduce((total, value) => {
        return total + value.m16350;
    }, 0);
    const m18230 = bulongImportDB.reduce((total, value) => {
        return total + value.m18230;
    }, 0);
    const m18260 = bulongImportDB.reduce((total, value) => {
        return total + value.m18260;
    }, 0);
    const m18280 = bulongImportDB.reduce((total, value) => {
        return total + value.m18280;
    }, 0);
    const m18300 = bulongImportDB.reduce((total, value) => {
        return total + value.m18300;
    }, 0);
    const m18320 = bulongImportDB.reduce((total, value) => {
        return total + value.m18320;
    }, 0);
    const m18350 = bulongImportDB.reduce((total, value) => {
        return total + value.m18350;
    }, 0);
    const m18380 = bulongImportDB.reduce((total, value) => {
        return total + value.m18380;
    }, 0);
    const m18400 = bulongImportDB.reduce((total, value) => {
        return total + value.m18400;
    }, 0);
    const m18450 = bulongImportDB.reduce((total, value) => {
        return total + value.m18450;
    }, 0);
    const m18500 = bulongImportDB.reduce((total, value) => {
        return total + value.m18500;
    }, 0);
    const m18550 = bulongImportDB.reduce((total, value) => {
        return total + value.m18550;
    }, 0);
    const m18600 = bulongImportDB.reduce((total, value) => {
        return total + value.m18600;
    }, 0);
    const m18650 = bulongImportDB.reduce((total, value) => {
        return total + value.m18650;
    }, 0);
    const m18700 = bulongImportDB.reduce((total, value) => {
        return total + value.m18700;
    }, 0);
    const u16 = bulongImportDB.reduce((total, value) => {
        return total + value.u16;
    }, 0);
    const udat = bulongImportDB.reduce((total, value) => {
        return total + value.udat;
    }, 0);
    const tangdo = bulongImportDB.reduce((total, value) => {
        return total + value.tangdo;
    }, 0);
    const ty16 = bulongImportDB.reduce((total, value) => {
        return total + value.u16;
    }, 0);
    const ty18 = bulongImportDB.reduce((total, value) => {
        return total + value.ty18;
    }, 0);

    return (
        <tr className={cx("total-amount")}>
            <td></td>
            <td>Tính Tổng</td>
            <td>{m104}</td>
            <td>{m106}</td>
            <td>{m144}</td>
            <td>{m14100}</td>
            <td>{m164}</td>
            <td>{m167}</td>
            <td>{m16100}</td>
            <td>{m16130}</td>
            <td>{m16200}</td>
            <td>{m16250}</td>
            <td>{m16280}</td>
            <td>{m16300}</td>
            <td>{m16350}</td>
            <td>{m18230}</td>
            <td>{m18260}</td>
            <td>{m18280}</td>
            <td>{m18300}</td>
            <td>{m18320}</td>
            <td>{m18350}</td>
            <td>{m18380}</td>
            <td>{m18400}</td>
            <td>{m18450}</td>
            <td>{m18500}</td>
            <td>{m18550}</td>
            <td>{m18600}</td>
            <td>{m18650}</td>
            <td>{m18700}</td>
            <td>{u16}</td>
            <td>{udat}</td>
            <td>{tangdo}</td>
            <td>{ty16}</td>
            <td>{ty18}</td>

            <td>
                <Button
                    onClick={() => {
                        dispatch(isClickActions.toggleHandle());
                    }}
                >
                    Refresh
                </Button>
            </td>
        </tr>
    );
};
export default TotalBl;
