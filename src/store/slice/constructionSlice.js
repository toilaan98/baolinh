import { createSlice } from "@reduxjs/toolkit";
const inicontruction = {
    getUpdateId: "",
    handleDeleteId: "",
    tencongtrinh: "",
    thoigian: "",
    date: "2023",
    getId: "",
};

export const contructionSlice = createSlice({
    name: "contruction",
    initialState: inicontruction,
    reducers: {
        handleEnteredInput(state, action) {
            if (action.payload.newFormData.tencongtrinh) {
                state.tencongtrinh = action.payload.newFormData.tencongtrinh;
            }
            if (action.payload.newFormData.thoigian) {
                state.thoigian = action.payload.newFormData.thoigian;
            }
        },
        handleAddConstructionData(state, action) {
            console.log(action.payload.tencongtrinh);
            const postData = async () => {
                try {
                    fetch(
                        "http://localhost:8080/construction/postConstruction",
                        {
                            method: "POST",
                            body: JSON.stringify({
                                tencongtrinh:
                                    action.payload.contructionEntered
                                        .tencongtrinh,
                                thoigian:
                                    action.payload.contructionEntered.thoigian,

                                idCustomer: action.payload.idCustomer,
                            }),
                            headers: { "Content-Type": "application/json" },
                        }
                    );
                } catch {}
            };
            postData();

            state.tencongtrinh = "";
            state.thoigian = "";
        },
        handleGetId(state, action) {
            console.log(action.payload);
            if (action.payload.getId) {
                state.getId = action.payload.getId;
            }
            if (action.payload.id) {
                state.getUpdateId = action.payload.id;
            }
            if (action.payload.idDelete) {
                state.handleDeleteId = action.payload.idDelete;
            }

            if (action.payload.id === "cancel") {
                state.getUpdateId = "";
            }
            if (action.payload.idDelete === "cancel") {
                state.handleDeleteId = "";
            }
        },
        handleDeleteContsructionData(state, action) {
            console.log(action.payload);
            if (action.payload.constructionId) {
                fetch(
                    `http://localhost:8080/construction/postConstruction/${action.payload.constructionId}`,
                    {
                        method: "DELETE",
                        body: JSON.stringify({
                            id: action.payload.constructionId,
                        }),
                        headers: { "Content-Type": "application/json" },
                    }
                );
            }
        },
        handleEditFormChange(state, action) {
            state.tencongtrinh = action.payload.tencongtrinh;
            state.tongtien = action.payload.tongtien;
            state.tongno = action.payload.tongno;
            state.thoigian = action.payload.thoigian;
        },
        handleUpdateContsructionData(state, action) {
            console.log(action.payload.tencongtrinh);

            const RequestUpdateData = () => {
                try {
                    fetch(
                        `http://localhost:8080/construction/update-customer/${action.payload.id}`,
                        {
                            method: "PUT",
                            body: JSON.stringify({
                                tencongtrinh: action.payload.data.tencongtrinh,
                                thoigian: action.payload.data.thoigian,
                            }),
                            headers: { "Content-Type": "application/json" },
                        }
                    );
                } catch {}
            };
            RequestUpdateData();
        },
        handleGetDate(state, action) {
            state.date = action.payload;
        },
    },
});
