import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "~/components/Button/Button";
import { customerActions, isClickActions, tableActions } from "~/store";
import styles from "./EditCustomer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function EditCustomer({ data }) {
    const dispatch = useDispatch();
    const enteredCustomer = useSelector((state) => state.customer);

    const isEditData = useSelector((state) => state.click.handleGetId);

    const handleAddFormChange = (event) => {
        // event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...data };
        newFormData[fieldName] = fieldValue;

        dispatch(
            customerActions.handleEnteredInput({
                newFormData: newFormData,
                currenData: data,
            })
        );
    };

    const handleUpdateData = (e) => {
        const input = document.getElementsByTagName("input");
        console.log(enteredCustomer);
        dispatch(
            customerActions.handleUpdateData({
                data: enteredCustomer,
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
    console.log(data.tenhanghoa);
    return (
        <Fragment>
            <tr>
                <td></td>
                <td>
                    <input
                        type="text"
                        name="tenkhachhang"
                        placeholder="Enter a name..."
                        defaultValue={data.tenkhachhang}
                        onChange={handleAddFormChange}
                    />
                </td>
                <td></td>

                <td></td>
                <td></td>
                <td>
                    {" "}
                    <input
                        type="text"
                        name="thoigian"
                        defaultValue={data.thoigian}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>

                <td>
                    <Button
                        outLine
                        smallest
                        onClick={() => {
                            dispatch(
                                customerActions.handleGetId({ id: "cancel" })
                            );
                        }}
                    >
                        Cancel
                    </Button>{" "}
                    <Button
                        smallest
                        onClick={() => {
                            handleUpdateData();
                            dispatch(
                                customerActions.handleGetId({ id: "cancel" })
                            );
                        }}
                    >
                        Update
                    </Button>{" "}
                </td>
            </tr>
        </Fragment>
    );
}
export default EditCustomer;
