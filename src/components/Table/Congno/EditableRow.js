import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "~/components/Button/Button";
import { isClickActions, tableActions } from "~/store";
import styles from "./EditableRow.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function EditableRow({ data }) {
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.table);

    const isEditData = useSelector((state) => state.click.handleGetId);

    const handleAddFormChange = (event) => {
        // event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...data };

        newFormData[fieldName] = fieldValue;

        dispatch(
            tableActions.handleEnteredData({
                newFormData: newFormData,
                currenData: data,
            })
        );
    };

    const handleUpdateData = (e) => {
        const input = document.getElementsByTagName("input");

        dispatch(
            tableActions.handleUpdateData({
                data: tableData,
                id: data._id,
            })
        );

        // dispatch(tableActions.handleAddData(tableData));

        dispatch(isClickActions.toggleHandle());

        if (input.length > 0) {
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        }
    };

    return (
        <Fragment>
            <tr>
                <td></td>
                <td>
                    <input
                        type="text"
                        name="tenhanghoa"
                        placeholder="Enter a name..."
                        defaultValue={data.tenhanghoa}
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="dvt"
                        defaultValue={data.dvt}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>

                <td>
                    <input
                        type="number"
                        name="soluong"
                        defaultValue={data.soluong}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="blmk"
                        defaultValue={data.blmk}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    {" "}
                    <input
                        type="number"
                        name="xamk"
                        defaultValue={data.xamk}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    {" "}
                    <input
                        type="number"
                        name="cocday"
                        defaultValue={data.cocday}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    {" "}
                    <input
                        type="number"
                        name="daydiennoiduoi"
                        defaultValue={data.daydiennoiduoi}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="det"
                        defaultValue={data.det}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    {" "}
                    <input
                        type="number"
                        name="ve"
                        defaultValue={data.ve}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    {" "}
                    <input
                        type="number"
                        name="chupcot"
                        defaultValue={data.chupcot}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />{" "}
                </td>
                <td>
                    <input
                        type="number"
                        name="daydetnoiduoi"
                        defaultValue={data.daydetnoiduoi}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    {" "}
                    <input
                        type="number"
                        name="trutram"
                        defaultValue={data.trutram}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />{" "}
                </td>
                <td>
                    {" "}
                    <input
                        type="number"
                        name="dongia"
                        defaultValue={data.dongia}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />{" "}
                </td>
                <td>
                    {/* {" "}
                    <input
                        type="text"
                        name="thanhtien"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        value={data.tenhanghoa}
                    />{" "} */}
                </td>

                <td>
                    <Button
                        outLine
                        smallest
                        onClick={() => {
                            dispatch(isClickActions.HandleEdit("cancel"));
                        }}
                    >
                        Cancel
                    </Button>{" "}
                    <Button
                        smallest
                        onClick={() => {
                            handleUpdateData();
                            dispatch(isClickActions.HandleEdit("cancel"));
                        }}
                    >
                        Update
                    </Button>{" "}
                </td>
            </tr>
        </Fragment>
    );
}
export default EditableRow;
