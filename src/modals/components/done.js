import { Fragment } from "react";
import Modal from "../Modal";
import styles from "./done.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
    bulongExportActions,
    bulongImportActions,
    bulongNeedActions,
    contructionActions,
    customerActions,
    isClickActions,
    tableActions,
} from "~/store";
import { useDispatch, useSelector } from "react-redux";
import { bulongImportSlice } from "~/store/slice/bulongImportSlice";
const cx = classNames.bind(styles);
const Done = () => {
    const dispatch = useDispatch();
    // getId
    const getId = useSelector((state) => state.click.handleGetId);
    const customerId = useSelector((state) => state.customer.handleDeleteId);
    const constructionId = useSelector(
        (state) => state.construction.handleDeleteId
    );
    const bulongImportId = useSelector(
        (state) => state.bulongImport.getDeleteId
    );
    const bulongExportId = useSelector(
        (state) => state.bulongExport.getDeleteId
    );
    const bulongNeedId = useSelector((state) => state.bulongNeed.getDeleteId);

    const handleCancel = () => {
        dispatch(isClickActions.handleModalDoneCancel());
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("done")}>
                <div id="myModal" className={cx("modal fade")}>
                    <div className={cx("modal-dialog", "modal-confirm")}>
                        <div className={cx("modal-content")}>
                            <div className={cx("modal-header", "flex-column")}>
                                <div className={cx("icon-box")}>
                                    <FontAwesomeIcon
                                        className={cx("material-icons")}
                                        icon={faXmark}
                                    />
                                </div>
                                <h4 className={cx("modal-title w-100")}>
                                    Bán Có Chắc Chắn không !!!
                                </h4>
                                <button
                                    onClick={handleCancel}
                                    className={cx("close")}
                                >
                                    <FontAwesomeIcon
                                        className={cx("material-icons")}
                                        icon={faXmark}
                                    />
                                </button>
                            </div>
                            <div className={cx("modal-body")}></div>
                            <div
                                className={cx(
                                    "modal-footer",
                                    "justify-content-center"
                                )}
                            >
                                <Button onClick={handleCancel} outLine>
                                    Cancel
                                </Button>
                                <Button
                                    dele
                                    onClick={() => {
                                        dispatch(isClickActions.toggleHandle());
                                        dispatch(
                                            tableActions.handleDeleteData({
                                                idDebt: getId,
                                            })
                                        );

                                        if (customerId) {
                                            dispatch(
                                                customerActions.handleDeleteCustomerData(
                                                    {
                                                        customerId: customerId,
                                                    }
                                                )
                                            );
                                        }

                                        if (constructionId) {
                                            console.log(constructionId);
                                            dispatch(
                                                contructionActions.handleDeleteContsructionData(
                                                    {
                                                        constructionId:
                                                            constructionId,
                                                    }
                                                )
                                            );
                                        }
                                        if (bulongImportId) {
                                            dispatch(
                                                bulongImportActions.handleDeleteData(
                                                    {
                                                        bulongImportId:
                                                            bulongImportId,
                                                    }
                                                )
                                            );
                                        }
                                        if (bulongExportId) {
                                            dispatch(
                                                bulongExportActions.handleDeleteData(
                                                    {
                                                        bulongExportId:
                                                            bulongExportId,
                                                    }
                                                )
                                            );
                                        }
                                        if (bulongNeedId) {
                                            dispatch(
                                                bulongNeedActions.handleDeleteData(
                                                    {
                                                        bulongNeedId:
                                                            bulongNeedId,
                                                    }
                                                )
                                            );
                                        }
                                        dispatch(
                                            isClickActions.handleModalDoneCancel()
                                        );
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal />
        </div>
    );
};
export default Done;
