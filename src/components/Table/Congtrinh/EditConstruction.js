import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "~/components/Button/Button";
import { contructionActions, isClickActions, tableActions } from "~/store";
import styles from "./EditConstruction.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function EditConstruction({ data }) {
    const dispatch = useDispatch();
    const enteredConstruction = useSelector((state) => state.construction);

    const isEditData = useSelector((state) => state.click.handleGetId);

    const handleAddFormChange = (event) => {
        // event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...data };
        newFormData[fieldName] = fieldValue;

        dispatch(
            contructionActions.handleEnteredInput({
                newFormData: newFormData,
                currenData: data,
            })
        );
    };

    const handleUpdateData = (e) => {
        const input = document.getElementsByTagName("input");
        console.log(enteredConstruction);
        dispatch(
            contructionActions.handleUpdateContsructionData({
                data: enteredConstruction,
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
                        name="tencongtrinh"
                        placeholder="Enter a name..."
                        defaultValue={data.tencongtrinh}
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
                <td></td>

                <td>
                    <Button
                        outLine
                        smallest
                        onClick={() => {
                            dispatch(
                                contructionActions.handleGetId({ id: "cancel" })
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
                                contructionActions.handleGetId({ id: "cancel" })
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
export default EditConstruction;
