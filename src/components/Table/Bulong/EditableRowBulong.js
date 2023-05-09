import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "~/components/Button/Button";
import {
    bulongExportActions,
    bulongImportActions,
    isClickActions,
    tableActions,
} from "~/store";
import styles from "./EditableRowBulong.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function EditableRowBulong({ data }) {
    const dispatch = useDispatch();

    const enteredBLImport = useSelector((state) => state.bulongImport);
    const isEditData = useSelector((state) => state.click.handleGetId);
    console.log(enteredBLImport);
    const handleAddFormChange = (event) => {
        // event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...data };
        newFormData[fieldName] = fieldValue;
        dispatch(
            bulongImportActions.handleEnteredData({
                newFormData: newFormData,
            })
        );
    };

    const handleUpdateData = (e) => {
        const input = document.getElementsByTagName("input");
        console.log(enteredBLImport);
        dispatch(
            bulongImportActions.handleUpdateData({
                data: enteredBLImport,
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
                <td className="w-80">
                    <input
                        type="text"
                        name="tencongty"
                        placeholder="Enter a name..."
                        defaultValue={data.tencongty}
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m104"
                        defaultValue={data.m104}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m106"
                        defaultValue={data.m106}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m144"
                        defaultValue={data.m144}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m14100"
                        defaultValue={data.m14100}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m164"
                        defaultValue={data.m164}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m167"
                        defaultValue={data.m167}
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m16100"
                        defaultValue={data.m16100}
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
                        defaultValue={data.m16130}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m16200"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m16200}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m16250"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m16250}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m16280"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m16280}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m16300"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m16300}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m16350"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m16350}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18230"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18230}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18260"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18260}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18280"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18280}
                    />
                </td>

                <td>
                    <input
                        type="number"
                        name="m18300"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18300}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18320"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18320}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18350"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18350}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18380"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18380}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18400"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18400}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18450"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18450}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18500"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18500}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18550"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18550}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18600"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18600}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18650"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18650}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="m18700"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.m18700}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="u16"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.u16}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="udat"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.udat}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="tangdo"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.tangdo}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="ty16"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.ty16}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="ty18"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                        defaultValue={data.ty18}
                    />
                </td>

                <td>
                    <Button
                        outLine
                        smallest
                        onClick={() => {
                            dispatch(
                                bulongImportActions.handleGetId({
                                    id: "cancel",
                                })
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
                                bulongExportActions.handleGetId({
                                    id: "cancel",
                                })
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
export default EditableRowBulong;
