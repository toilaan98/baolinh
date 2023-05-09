import { Fragment, useCallback, useEffect, useState } from "react";

import styles from "./CongTrinh.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import {
    contructionActions,
    counterActions,
    customerActions,
    isClickActions,
} from "~/store";
import { useDispatch, useSelector } from "react-redux";
import DecimalFormat, { RoundingMode } from "decimal-format";
import EditConstruction from "./EditConstruction";
import ReadOnlyConstruction from "./ReadOnlyConstruction";
import Modal from "~/modals/Modal";
import Done from "~/modals/components/done";
import { useLocation, useParams } from "react-router-dom";

const cx = classNames.bind(styles);
//format
const df = new DecimalFormat("#,##0");
df.setRoundingMode(RoundingMode.UP);
function Contstruction() {
    // redux

    const location = useLocation();

    const dispatch = useDispatch();
    const contructionEntered = useSelector((state) => state.construction);
    const isClicked = useSelector((state) => state.click.mounted);
    const isDoneModal = useSelector((state) => state.click.isDone);
    const isEditContructionData = useSelector(
        (state) => state.construction.getUpdateId
    );
    const idCustomer = location.pathname.split("/")[2];

    // hooks
    // const [contacts, setContacts] = useState();

    const constructionDB = useSelector((state) => state.counter.construction);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchDataCongno = async () => {
            try {
                const res = await fetch(
                    "http://localhost:8080/construction/construction-datas"
                );
                const resData = await res.json();

                console.log(idCustomer);

                const dataFilterDate = resData.construction.filter((data) => {
                    const createdAtData = data.createdAt.split("-")[0];
                    return contructionEntered.date === createdAtData;
                });
                const fillterCustomer = dataFilterDate.filter((data) => {
                    return idCustomer === data.idCustomer;
                });

                dispatch(counterActions.dataConstruction(fillterCustomer));
            } catch {}
        };
        fetchDataCongno();
    }, [isClicked, isDoneModal, contructionEntered]);

    const isConstructionDB = !!constructionDB;

    const handleAddData = (e) => {
        const input = document.getElementsByTagName("input");
        dispatch(
            contructionActions.handleAddConstructionData({
                contructionEntered: contructionEntered,
                idCustomer: idCustomer,
            })
        );
        dispatch(isClickActions.toggleHandle());
        if (input.length > 0) {
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        }
    };

    const handleAddFormChange = (event) => {
        // event.preventDefault();
        const fieldName = event.target.getAttribute("name");

        const fieldValue = event.target.value;

        const newFormData = { ...contructionEntered };
        newFormData[fieldName] = fieldValue;
        console.log(newFormData);
        dispatch(
            contructionActions.handleEnteredInput({ newFormData: newFormData })
        );
    };

    return (
        <Fragment>
            <h1>{}</h1>
            <div className={cx("custom-select")}>
                <select
                    onChange={(e) => {
                        dispatch(
                            contructionActions.handleGetDate(e.target.value)
                        );
                    }}
                >
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </div>
            <h1 className="text-5xl text-center pt-10 py-10">
                Ngày Tạo{" "}
                {isConstructionDB &&
                    constructionDB.length > 0 &&
                    constructionDB[0].createdAt.split("T").reverse()[1]}
            </h1>

            {isDoneModal && <Done />}
            <div className={cx("wrapper")}>
                <table className={cx("table")}>
                    <thead>
                        <tr className={cx("table-header")}>
                            <th>STT</th>
                            <th rowSpan="3">Các Công Trình</th>
                            <th>Chi Tiết</th>
                            <th>Tổng Tiền </th>
                            <th>Tổng Nợ</th>
                            <th>Ngày Tạo</th>
                            <th>Ngày Sửa Cuối</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isConstructionDB &&
                            constructionDB.map((data, index) => {
                                return (
                                    <Fragment key={data._id}>
                                        {" "}
                                        {isEditContructionData === data._id ? (
                                            <EditConstruction data={data} />
                                        ) : (
                                            <ReadOnlyConstruction
                                                totalAmount={totalAmount}
                                                data={data}
                                                index={index}
                                            />
                                        )}
                                    </Fragment>
                                );
                            })}

                        <tr className={cx("total-amount")}>
                            <td></td>
                            <td>Tính Tổng</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td>{df.format(totalAmount)}</td>
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
                    </tbody>
                </table>
            </div>

            <table style={{ marginTop: "100px" }} className={cx("table")}>
                <thead>
                    <tr className={cx("table-header")}>
                        <th rowSpan="3">Công Trình</th>
                        <th></th>

                        <th>Thời Gian</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="tencongtrinh"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td> </td>

                        <td>
                            {" "}
                            <input
                                type="text"
                                name="thoigian"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>

                        <td>
                            <Button onClick={handleAddData}>Thêm</Button>{" "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}
export default Contstruction;
