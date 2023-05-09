import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./Table.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import { counterActions, isClickActions, tableActions } from "~/store";
import { useDispatch, useSelector } from "react-redux";
import DecimalFormat, { RoundingMode } from "decimal-format";
import ReadOnlyRow from "./ReadOnlyRow";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Modal from "~/modals/Modal";
import Done from "~/modals/components/done";
import EditableRow from "./EditableRow";
import { useLocation } from "react-router-dom";
import { DownloadTableExcel } from "react-export-table-to-excel";
const cx = classNames.bind(styles);

//format
const df = new DecimalFormat("#,##0");
df.setRoundingMode(RoundingMode.UP);
function Table() {
    // redux
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.table);
    const isClicked = useSelector((state) => state.click.mounted);
    const isDoneModal = useSelector((state) => state.click.isDone);
    const isEditData = useSelector((state) => state.click.handleGetId);
    const location = useLocation();
    const tableRef = useRef(null);
    // hooks
    // const [contacts, setContacts] = useState();
    const contacts = useSelector((state) => state.counter.quantity);
    // console.log(contactsData);
    const [totalAmount, setTotalAmount] = useState(0);
    const idDebtParam = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchDataCongno = async () => {
            try {
                const res = await fetch(
                    "http://localhost:8080/congno/postdatas"
                );
                const resData = await res.json();

                // tính tổng

                const dataFilterDate = resData.congno.filter((data) => {
                    const createdAtData = data.createdAt.split("-")[0];
                    return tableData.date === createdAtData;
                });
                const fillterCustomer = dataFilterDate.filter((data) => {
                    return idDebtParam === data.idConstruction;
                });

                dispatch(counterActions.incrementHandle(fillterCustomer));
                const tinhtong = fillterCustomer.reduce(
                    (currentNumber, item) => {
                        let total = currentNumber + item.thanhtien;
                        return total;
                        // setTotalAmount(total);
                    },
                    0
                );
                setTotalAmount(tinhtong);
            } catch {}
        };
        fetchDataCongno();
    }, [isClicked, isDoneModal, tableData]);

    const isContacs = !!contacts;

    // action

    //tính tổng

    // if (contacts.congno.length > 0) {

    // setTotalAmount(tinhtong);
    // }

    //thêm sản phẩm vào
    const handleAddData = (e) => {
        const input = document.getElementsByTagName("input");
        console.log(tableData);
        dispatch(
            tableActions.handleAddData({
                idConstruction: idDebtParam,
                enteredData: tableData,
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

        const newFormData = { ...tableData };
        newFormData[fieldName] = fieldValue;
        dispatch(tableActions.handleEnteredData({ newFormData: newFormData }));
    };
    console.log(isEditData);
    return (
        <Fragment>
            <div className={cx("custom-select")}>
                <select
                    onChange={(e) => {
                        dispatch(tableActions.handleGetDate(e.target.value));
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
                {isContacs &&
                    contacts.length > 0 &&
                    contacts[0].createdAt.split("T").reverse()[1]}
            </h1>
            {isDoneModal && <Done />}
            <div className={cx("wrapper")}>
                <table ref={tableRef} className={cx("table")}>
                    <thead>
                        <tr className={cx("table-header")}>
                            <th>STT</th>
                            <th>Tên Hàng Hóa</th>
                            <th>DVT </th>
                            <th>số lượng</th>
                            <th>BL MK</th>
                            <th>Xà Mạ Kẽm</th>
                            <th colSpan="2">Xà Đen</th>
                            <th colSpan="2">Cổ Dề</th>
                            <th>Chụp Cột</th>
                            <th>Dây Dẹt Nối Dưới</th>
                            <th>Trụ Trạm</th>
                            {/* <th>Đơn Giá</th> */}
                            <th>Thành Tiền </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={cx("together")}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{ backgroundColor: "#b8b5c5" }}>
                                Cọc + Dây
                            </td>
                            <td style={{ backgroundColor: "#b8b5c5" }}>
                                dây điện nối dưới đen
                            </td>
                            <td style={{ backgroundColor: "#b8b5c5" }}>Dẹt</td>
                            <td style={{ backgroundColor: "#b8b5c5" }}>Vê</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <td></td> */}
                            <td></td>
                        </tr>
                        {isContacs &&
                            contacts.map((contact, index) => {
                                return (
                                    <Fragment key={contact._id}>
                                        {" "}
                                        {isEditData === contact._id ? (
                                            <EditableRow data={contact} />
                                        ) : (
                                            <ReadOnlyRow
                                                totalAmount={totalAmount}
                                                contact={contact}
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <td></td> */}
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
            <div className="flex justify-center mt-4">
                <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >
                    <Button outLine> Xuất File </Button>
                </DownloadTableExcel>
            </div>

            <table style={{ marginTop: "100px" }} className={cx("table")}>
                <thead>
                    <tr className={cx("table-header")}>
                        <th>Tên Hàng Hóa</th>
                        <th>đơn vị tính </th>
                        <th>số lượng</th>
                        <th>BL MK</th>
                        <th>Xà Mạ Kẽm</th>
                        <th colSpan="2">Xà Đen</th>
                        <th colSpan="2">Cổ Dề</th>
                        <th>Chụp Cột</th>
                        <th>Dây Dẹt Nối Dưới</th>
                        <th>Trụ Trạm</th>

                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={cx("together")}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{ backgroundColor: "#b8b5c5" }}>
                            Cọc + Dây
                        </td>
                        <td style={{ backgroundColor: "#b8b5c5" }}>
                            dây điện nối dưới đen
                        </td>
                        <td style={{ backgroundColor: "#b8b5c5" }}>Dẹt</td>
                        <td style={{ backgroundColor: "#b8b5c5" }}>Vê</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="tenhanghoa"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="dvt"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>

                        <td>
                            <input
                                type="number"
                                name="soluong"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="blmk"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="xamk"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="cocday"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="daydiennoiduoi"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="det"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="ve"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="chupcot"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />{" "}
                        </td>
                        <td>
                            <input
                                type="number"
                                name="daydetnoiduoi"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="trutram"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />{" "}
                        </td>
                        {/* <td>
                            {" "}
                            <input
                                type="number"
                                name="dongia"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />{" "}
                        </td> */}
                        {/* <td>
                            {" "}
                            <input
                                type="text"
                                name="thanhtien"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />{" "}
                        </td> */}
                        <td>
                            <Button onClick={handleAddData}>Thêm</Button>{" "}
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>

                        <td>Đơn Giá</td>
                        <td>
                            <input
                                type="number"
                                name="blmkDg"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="xamkDg"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="cocdayDg"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="daydiennoiduoiDg"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="detDg"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="veDg"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="chupcotDg"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />{" "}
                        </td>
                        <td>
                            <input
                                type="number"
                                name="daydetnoiduoiDg"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            {" "}
                            <input
                                type="number"
                                name="trutramDg"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />{" "}
                        </td>
                        <td></td>
                        {/* <td>
                            {" "}
                            <input
                                type="text"
                                name="thanhtien"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />{" "}
                        </td> */}
                        {/* <td>
                            <Button onClick={handleAddData}>Thêm</Button>{" "}
                        </td> */}
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}
export default Table;
