import { createSlice } from "@reduxjs/toolkit";
const iniCustomer = {
    handleGetUpdateId: "",
    handleDeleteId: "",
    getId: "",
    tenkhachhang: "",
    thoigian: "",
    date: "2023",
};

export const customerSlice = createSlice({
    name: "customer",
    initialState: iniCustomer,
    reducers: {
        handleEnteredInput(state, action) {
            if (action.payload.newFormData.tenkhachhang) {
                state.tenkhachhang = action.payload.newFormData.tenkhachhang;
            }
            if (action.payload.newFormData.thoigian) {
                state.thoigian = action.payload.newFormData.thoigian;
            }
        },
        handleAddCustomerData(state, action) {
            const postData = async () => {
                try {
                    fetch("http://localhost:8080/customer/postCustomer", {
                        method: "POST",
                        body: JSON.stringify({
                            tenkhachhang: action.payload.tenkhachhang,
                            thoigian: action.payload.thoigian,
                        }),
                        headers: { "Content-Type": "application/json" },
                    });
                } catch {}
            };
            postData();
            state.tenkhachhang = "";
            state.thoigian = "";
        },
        handleGetId(state, action) {
            if (action.payload.getId) {
                state.getId = action.payload.getId;
            }
            if (action.payload.id) {
                state.handleGetUpdateId = action.payload.id;
            }
            if (action.payload.idDelete) {
                state.handleDeleteId = action.payload.idDelete;
            }

            if (action.payload.id === "cancel") {
                state.handleGetUpdateId = "";
            }
            if (action.payload.idDelete === "cancel") {
                state.handleDeleteId = "";
            }
        },
        handleDeleteCustomerData(state, action) {
            if (action.payload.customerId) {
                fetch(
                    `http://localhost:8080/customer/postCustomer/${action.payload.customerId}`,
                    {
                        method: "DELETE",
                        body: JSON.stringify({
                            id: action.payload.customerId,
                        }),
                        headers: { "Content-Type": "application/json" },
                    }
                );
            }
        },
        handleEditFormChange(state, action) {
            console.log(action.payload);
            state.tenkhachhang = action.payload.tenkhachhang;
            state.tongtien = action.payload.tongtien;
            state.tongno = action.payload.tongno;
            state.thoigian = action.payload.thoigian;
        },
        handleUpdateData(state, action) {
            console.log(action.payload);
            // let total =
            //     (parseFloat(action.payload.data.blmk) +
            //         parseFloat(action.payload.data.xamk) +
            //         parseFloat(action.payload.data.cocday) +
            //         parseFloat(action.payload.data.daydiennoiduoi) +
            //         parseFloat(action.payload.data.det) +
            //         parseFloat(action.payload.data.ve) +
            //         parseFloat(action.payload.data.chupcot) +
            //         parseFloat(action.payload.data.daydetnoiduoi) +
            //         parseFloat(action.payload.data.trutram)) *
            //     action.payload.data.dongia;
            // console.log(action.payload.data);
            const RequestUpdateData = () => {
                try {
                    fetch(
                        `http://localhost:8080/customer/update-customer/${action.payload.id}`,
                        {
                            method: "PUT",
                            body: JSON.stringify({
                                tenkhachhang: action.payload.data.tenkhachhang,
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
