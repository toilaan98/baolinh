import { Fragment, useCallback, useEffect, useState } from "react";

import styles from "./KhachHang.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import {
    counterActions,
    customerActions,
    isClickActions,
    tableActions,
} from "~/store";
import { useDispatch, useSelector } from "react-redux";
import DecimalFormat, { RoundingMode } from "decimal-format";

import Modal from "~/modals/Modal";
import Done from "~/modals/components/done";

import EditCustomer from "./EditCustomer";
import ReadOnlyCustomer from "./ReadOnlyCustomer";
import { useActionData, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);
//format
const df = new DecimalFormat("#,##0");
df.setRoundingMode(RoundingMode.UP);
function KhachHang() {
    // redux
    const dispatch = useDispatch();

    const tableData = useSelector((state) => state.customer);

    const isClicked = useSelector((state) => state.click.mounted);
    const isDoneModal = useSelector((state) => state.click.isDone);
    const isEditCustomerData = useSelector(
        (state) => state.customer.handleGetUpdateId
    );

    // hooks
    // const [contacts, setContacts] = useState();

    const customerData = useSelector((state) => state.counter.customer);
    const [totalAmount, setTotalAmount] = useState(0);
    // counteActionsr
    // dataCOngno
    // const

    useEffect(() => {
        const fetchDataCongno = async () => {
            try {
                const res = await fetch(
                    "http://localhost:8080/customer/customer-datas"
                );
                const resData = await res.json();
                const dataFilterDate = resData.customer.filter((data) => {
                    const createdAtData = data.createdAt.split("-")[0];
                    return tableData.date === createdAtData;
                });
                dispatch(counterActions.dataCusomer(dataFilterDate));
            } catch {}
        };
        fetchDataCongno();
    }, [isClicked, isDoneModal, tableData]);

    const isCustomerData = !!customerData;

    const handleAddData = (e) => {
        const input = document.getElementsByTagName("input");
        dispatch(customerActions.handleAddCustomerData(tableData));
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

        const newFormData = { ...tableData };
        newFormData[fieldName] = fieldValue;
        console.log(newFormData);
        dispatch(
            customerActions.handleEnteredInput({ newFormData: newFormData })
        );
    };

    return (
        <Fragment>
            <div className={cx("custom-select")}>
                <select
                    onChange={(e) => {
                        dispatch(customerActions.handleGetDate(e.target.value));
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
                {isCustomerData &&
                    customerData.length > 0 &&
                    customerData[0].createdAt.split("T").reverse()[1]}
            </h1>
            {isDoneModal && <Done />}
            <div className={cx("wrapper")}>
                <table className={cx("table")}>
                    <thead>
                        <tr className={cx("table-header")}>
                            <th>STT</th>
                            <th rowSpan="3">Tên Khách Hàng</th>
                            <th>Các Công Trình</th>
                            <th>Tổng Tiền </th>
                            <th>Tổng Nợ</th>
                            <th>Thời Gian</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isCustomerData &&
                            customerData.map((data, index) => {
                                return (
                                    <Fragment key={data._id}>
                                        {" "}
                                        {isEditCustomerData === data._id ? (
                                            <EditCustomer data={data} />
                                        ) : (
                                            <ReadOnlyCustomer
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
                        <th rowSpan="3">Tên Khách Hàng</th>
                        <th>Các Công Trình</th>

                        <th>Thời Gian</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="tenkhachhang"
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
export default KhachHang;
