import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./BulongExport.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import { bulongExportActions, counterActions, isClickActions } from "~/store";
import { useDispatch, useSelector } from "react-redux";
import DecimalFormat, { RoundingMode } from "decimal-format";

import Done from "~/modals/components/done";
import EditableRowBulongExport from "./EditableRowBulongExport";
import ReadOnlyRowBulongExport from "./ReadOnlyRowBulongExport";
import TotalBl from "./TotalBl";
import NavbarBL from "../NavbarBulong/NavbarBulong";
import { DownloadTableExcel } from "react-export-table-to-excel";

const cx = classNames.bind(styles);
const df = new DecimalFormat("#,##0");
df.setRoundingMode(RoundingMode.UP);

function Bulong() {
    // redux
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.bulongExport);

    const isClicked = useSelector((state) => state.click.mounted);
    const isDoneModal = useSelector((state) => state.click.isDone);
    const isEditData = useSelector((state) => state.bulongExport.getUpdateId);
    const tableRef = useRef(null);
    // hooks

    const bulongExportDB = useSelector((state) => state.counter.bulongExport);

    useEffect(() => {
        const fetchDataCongno = async () => {
            try {
                const res = await fetch(
                    "http://localhost:8080/bulongexport/blexport-datas"
                );
                const resData = await res.json();

                const dataFilterDate = resData.BulongExport.filter((data) => {
                    const createdAtData = data.createdAt.split("-")[0];
                    return tableData.date === createdAtData;
                });

                dispatch(counterActions.dataBulongExport(dataFilterDate));
            } catch {}
        };
        fetchDataCongno();
    }, [isClicked, tableData, isDoneModal]);

    const isBulongExportDB = !!bulongExportDB;

    //thêm sản phẩm vào

    const handleAddData = (e) => {
        console.log(tableData);
        const input = document.getElementsByTagName("input");
        dispatch(bulongExportActions.handleAddData(tableData));
        dispatch(isClickActions.toggleHandle());
        if (input.length > 0) {
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        }
    };

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...tableData };
        newFormData[fieldName] = fieldValue;
        dispatch(
            bulongExportActions.handleEnteredData({ newFormData: newFormData })
        );
    };

    return (
        <Fragment>
            <div className="flex justify-between items-center">
                <NavbarBL />
                <div className={cx("custom-select")}>
                    <select
                        onChange={(e) => {
                            dispatch(
                                bulongExportActions.handleGetDate(
                                    e.target.value
                                )
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
            </div>

            <h1 className="text-5xl text-center pt-10 py-10">
                Ngày Tạo{" "}
                {isBulongExportDB &&
                    bulongExportDB.length > 0 &&
                    bulongExportDB[0].createdAt.split("T").reverse()[1]}
            </h1>
            {isDoneModal && <Done />}
            <div className={cx("wrapper")}>
                <table className={cx("table")}>
                    <thead>
                        <tr className={cx("table-header")}>
                            <th>STT</th>
                            <th>Tên Công Ty</th>
                            <th colSpan="2">M10</th>
                            <th colSpan="2">M14</th>
                            <th colSpan="9">M16</th>
                            <th colSpan="14">M18-19</th>
                            <th>U16</th>
                            <th>U Đất</th>
                            <th>Tăng Đơ</th>
                            <th colSpan="2">Ty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={cx("together")}>
                            <td></td>
                            <td></td>
                            <td className="bg-gray-400">4</td>
                            <td className="bg-gray-400">6</td>
                            <td className="bg-gray-400">4</td>
                            <td className="bg-gray-400">100</td>
                            <td className="bg-gray-400">4</td>
                            <td className="bg-gray-400">7</td>
                            <td className="bg-gray-400">100</td>
                            <td className="bg-gray-400">130</td>
                            <td className="bg-gray-400">200</td>
                            <td className="bg-gray-400">250</td>
                            <td className="bg-gray-400">280</td>
                            <td className="bg-gray-400">300</td>
                            <td className="bg-gray-400">350</td>
                            <td className="bg-gray-400">230</td>
                            <td className="bg-gray-400">260</td>
                            <td className="bg-gray-400">280</td>
                            <td className="bg-gray-400">300</td>
                            <td className="bg-gray-400">320</td>
                            <td className="bg-gray-400">350</td>
                            <td className="bg-gray-400">380</td>
                            <td className="bg-gray-400">400</td>
                            <td className="bg-gray-400">450</td>
                            <td className="bg-gray-400">500</td>
                            <td className="bg-gray-400">550</td>
                            <td className="bg-gray-400">600</td>
                            <td className="bg-gray-400">650</td>
                            <td className="bg-gray-400">700</td>
                            <td className="bg-gray-400"></td>
                            <td className="bg-gray-400"></td>
                            <td className="bg-gray-400"></td>
                            <td className="bg-gray-400">16</td>
                            <td className="bg-gray-400">18</td>
                            <td></td>
                        </tr>
                        {isBulongExportDB &&
                            bulongExportDB.map((contact, index) => {
                                return (
                                    <Fragment key={contact._id}>
                                        {" "}
                                        {isEditData === contact._id ? (
                                            <EditableRowBulongExport
                                                data={contact}
                                            />
                                        ) : (
                                            <ReadOnlyRowBulongExport
                                                contact={contact}
                                                index={index}
                                            />
                                        )}
                                    </Fragment>
                                );
                            })}
                        {isBulongExportDB && <TotalBl />}
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
                        <th>Tên Công Ty</th>
                        <th colSpan="2">M10</th>
                        <th colSpan="2">M14</th>
                        <th colSpan="9">M16</th>
                        <th colSpan="14">M18-19</th>
                        <th>U16</th>
                        <th>U Đất</th>
                        <th>Tăng Đơ</th>
                        <th colSpan="2">Ty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={cx("together")}>
                        <td></td>
                        <td className="bg-gray-400">4</td>
                        <td className="bg-gray-400">6</td>
                        <td className="bg-gray-400">4</td>
                        <td className="bg-gray-400">100</td>
                        <td className="bg-gray-400">4</td>
                        <td className="bg-gray-400">7</td>
                        <td className="bg-gray-400">100</td>
                        <td className="bg-gray-400">130</td>
                        <td className="bg-gray-400">200</td>
                        <td className="bg-gray-400">250</td>
                        <td className="bg-gray-400">280</td>
                        <td className="bg-gray-400">300</td>
                        <td className="bg-gray-400">350</td>
                        <td className="bg-gray-400">230</td>
                        <td className="bg-gray-400">260</td>
                        <td className="bg-gray-400">280</td>
                        <td className="bg-gray-400">300</td>
                        <td className="bg-gray-400">320</td>
                        <td className="bg-gray-400">350</td>
                        <td className="bg-gray-400">380</td>
                        <td className="bg-gray-400">400</td>
                        <td className="bg-gray-400">450</td>
                        <td className="bg-gray-400">500</td>
                        <td className="bg-gray-400">550</td>
                        <td className="bg-gray-400">600</td>
                        <td className="bg-gray-400">650</td>
                        <td className="bg-gray-400">700</td>
                        <td className="bg-gray-400"></td>
                        <td className="bg-gray-400"></td>
                        <td className="bg-gray-400"></td>
                        <td className="bg-gray-400">16</td>
                        <td className="bg-gray-400">18</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="w-80">
                            <input
                                type="text"
                                name="tencongty"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m104"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m106"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m144"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m14100"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m164"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m167"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m16100"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m16130"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m16200"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m16250"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m16280"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m16300"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m16350"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18230"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18260"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18280"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>

                        <td>
                            <input
                                type="number"
                                name="m18300"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18320"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18350"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18380"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18400"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18450"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18500"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18550"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18600"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18650"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="m18700"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="u16"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="udat"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="tangdo"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="ty16"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="ty18"
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
export default Bulong;
