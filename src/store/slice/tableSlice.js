import { createSlice } from "@reduxjs/toolkit";

let iniEntered = {
    dvt: "Bộ",
    soluong: "",
    tenhanghoa: "",
    isClick: false,
    blmk: 0,
    xamk: 0,
    cocday: 0,
    daydiennoiduoi: 0,
    det: 0,
    ve: 0,
    chupcot: 0,
    daydetnoiduoi: 0,
    trutram: 0,
    dongia: 1,
    thanhtien: 0,
    blmkDg: 0,
    xamkDg: 0,
    cocdayDg: 0,
    daydiennoiduoiDg: 0,
    detDg: 0,
    veDg: 0,
    chupcotDg: 0,
    daydetnoiduoiDg: 0,
    trutramDg: 0,
    date: "2023",
};

export const tableSlice = createSlice({
    name: "table",
    initialState: iniEntered,
    reducers: {
        handleEditFormChange(state, action) {
            state.dvt = action.payload.dvt;
            state.soluong = action.payload.soluong;
            state.tenhanghoa = action.payload.tenhanghoa;
            state.blmk = action.payload.blmk;
            state.xamk = action.payload.xamk;
            state.cocday = action.payload.cocday;
            state.daydiennoiduoi = action.payload.daydiennoiduoi;
            state.det = action.payload.det;
            state.ve = action.payload.ve;
            state.chupcot = action.payload.chupcot;
            state.daydetnoiduoi = action.payload.daydetnoiduoi;
            state.trutram = action.payload.trutram;
            state.dongia = action.payload.dongia;
            state.thanhtien = action.payload.thanhtien;
        },
        handleAddData(state, action) {
            console.log(
                action.payload.enteredData.blmk *
                    action.payload.enteredData.blmkDg
            );
            const postData = async () => {
                let total =
                    (parseFloat(
                        action.payload.enteredData.blmk *
                            action.payload.enteredData.blmkDg
                    ) +
                        parseFloat(
                            action.payload.enteredData.xamk *
                                action.payload.enteredData.xamkDg
                        ) +
                        parseFloat(
                            action.payload.enteredData.cocday *
                                action.payload.enteredData.cocdayDg
                        ) +
                        parseFloat(
                            action.payload.enteredData.daydiennoiduoi *
                                action.payload.enteredData.daydiennoiduoiDg
                        ) +
                        parseFloat(
                            action.payload.enteredData.det *
                                action.payload.enteredData.detDg
                        ) +
                        parseFloat(
                            action.payload.enteredData.ve *
                                action.payload.enteredData.veDg
                        ) +
                        parseFloat(
                            action.payload.enteredData.chupcot *
                                action.payload.enteredData.chupcotDg
                        ) +
                        parseFloat(
                            action.payload.enteredData.daydetnoiduoi *
                                action.payload.enteredData.daydetnoiduoiDg
                        ) +
                        parseFloat(
                            action.payload.enteredData.trutram *
                                action.payload.enteredData.trutramDg
                        )) *
                    action.payload.enteredData.soluong;

                // let total = 122;
                console.log(action.payload.enteredData.detDg);
                try {
                    fetch("http://localhost:8080/congno/postdata", {
                        method: "POST",
                        body: JSON.stringify({
                            dvt: action.payload.enteredData.dvt,
                            soluong: action.payload.enteredData.soluong,
                            tenhanghoa: action.payload.enteredData.tenhanghoa,
                            blmk: action.payload.enteredData.blmk,
                            xamk: action.payload.enteredData.xamk,
                            cocday: action.payload.enteredData.cocday,
                            daydiennoiduoi:
                                action.payload.enteredData.daydiennoiduoi,
                            det: action.payload.enteredData.det,
                            ve: action.payload.enteredData.ve,
                            chupcot: action.payload.enteredData.chupcot,
                            daydetnoiduoi:
                                action.payload.enteredData.daydetnoiduoi,
                            trutram: action.payload.enteredData.trutram,
                            dongia: action.payload.enteredData.dongia,
                            idConstruction: action.payload.idConstruction,
                            blmkDg: action.payload.enteredData.blmkDg,
                            xamkDg: action.payload.enteredData.xamkDg,
                            cocdayDg: action.payload.enteredData.cocdayDg,
                            daydiennoiduoiDg:
                                action.payload.enteredData.daydiennoiduoiDg,
                            detDg: action.payload.enteredData.detDg,
                            veDg: action.payload.enteredData.veDg,
                            chupcotDg: action.payload.enteredData.chupcotDg,
                            daydetnoiduoiDg:
                                action.payload.enteredData.daydetnoiduoiDg,
                            trutramDg: action.payload.enteredData.trutramDg,
                            thanhtien: total * 1000,
                        }),
                        headers: { "Content-Type": "application/json" },
                    });
                } catch {}
            };
            postData();

            state.dvt = "";
            state.soluong = 0;
            state.tenhanghoa = "";
            state.blmk = 0;
            state.xamk = 0;
            state.cocday = 0;
            state.daydiennoiduoi = 0;
            state.det = 0;
            state.ve = 0;
            state.chupcot = 0;
            state.daydetnoiduoi = 0;
            state.trutram = 0;
            state.dongia = 0;
            state.thanhtien = 0;
            state.blmkDg = 0;
            state.xamkDg = 0;
            state.cocdayDg = 0;
            state.daydiennoiduoiDg = 0;
            state.detDg = 0;
            state.veDg = 0;
            state.chupcotDg = 0;
            state.daydetnoiduoiDg = 0;
            state.trutramDg = 0;

            // console.log(;clicked");
        },
        handleEnteredData(state, action) {
            console.log(action.payload.newFormData);
            if (action.payload.newFormData.tenhanghoa) {
                state.tenhanghoa = action.payload.newFormData.tenhanghoa;
            }
            if (action.payload.newFormData.dvt) {
                state.dvt = action.payload.newFormData.dvt;
            }
            if (action.payload.newFormData.soluong) {
                state.soluong = action.payload.newFormData.soluong;
            }
            if (action.payload.newFormData.blmk) {
                state.blmk = action.payload.newFormData.blmk;
            }
            if (action.payload.newFormData.xamk) {
                state.xamk = action.payload.newFormData.xamk;
            }
            if (action.payload.newFormData.cocday) {
                state.cocday = action.payload.newFormData.cocday;
            }

            if (action.payload.newFormData.daydiennoiduoi) {
                state.daydiennoiduoi =
                    action.payload.newFormData.daydiennoiduoi;
            }
            if (action.payload.newFormData.det) {
                state.det = action.payload.newFormData.det;
            }
            if (action.payload.newFormData.ve) {
                state.ve = action.payload.newFormData.ve;
            }
            if (action.payload.newFormData.chupcot) {
                state.chupcot = action.payload.newFormData.chupcot;
            }
            if (action.payload.newFormData.daydetnoiduoi) {
                state.daydetnoiduoi = action.payload.newFormData.daydetnoiduoi;
            }
            if (action.payload.newFormData.trutram) {
                state.trutram = action.payload.newFormData.trutram;
            }
            if (action.payload.newFormData.dongia) {
                state.dongia = action.payload.newFormData.dongia;
            }
            if (action.payload.newFormData.thanhtien) {
                state.thanhtien = action.payload.newFormData.thanhtien;
            }
            if (action.payload.newFormData.blmkDg) {
                state.blmkDg = action.payload.newFormData.blmkDg;
            }
            if (action.payload.newFormData.xamkDg) {
                state.xamkDg = action.payload.newFormData.xamkDg;
            }
            if (action.payload.newFormData.cocdayDg) {
                state.cocdayDg = action.payload.newFormData.cocdayDg;
            }
            if (action.payload.newFormData.daydiennoiduoiDg) {
                state.daydiennoiduoiDg =
                    action.payload.newFormData.daydiennoiduoiDg;
            }
            if (action.payload.newFormData.cocdayDg) {
                state.cocdayDg = action.payload.newFormData.cocdayDg;
            }
            if (action.payload.newFormData.detDg) {
                state.detDg = action.payload.newFormData.detDg;
            }
            if (action.payload.newFormData.veDg) {
                state.veDg = action.payload.newFormData.veDg;
            }
            if (action.payload.newFormData.chupcotDg) {
                state.chupcotDg = action.payload.newFormData.chupcotDg;
            }
            if (action.payload.newFormData.daydetnoiduoiDg) {
                state.daydetnoiduoiDg =
                    action.payload.newFormData.daydetnoiduoiDg;
            }
            if (action.payload.newFormData.trutramDg) {
                state.trutramDg = action.payload.newFormData.trutramDg;
            }
        },

        //deleteData
        handleDeleteData(state, action) {
            if (action.payload.idDebt) {
                fetch(
                    `http://localhost:8080/congno/postdata/${action.payload.idDebt}`,
                    {
                        method: "DELETE",
                        body: JSON.stringify({
                            id: action.payload.idDebt,
                        }),
                        headers: { "Content-Type": "application/json" },
                    }
                );
            }
        },
        // update

        handleUpdateData(state, action) {
            console.log(action.payload);
            let total =
                (parseFloat(action.payload.data.blmk) +
                    parseFloat(action.payload.data.xamk) +
                    parseFloat(action.payload.data.cocday) +
                    parseFloat(action.payload.data.daydiennoiduoi) +
                    parseFloat(action.payload.data.det) +
                    parseFloat(action.payload.data.ve) +
                    parseFloat(action.payload.data.chupcot) +
                    parseFloat(action.payload.data.daydetnoiduoi) +
                    parseFloat(action.payload.data.trutram)) *
                action.payload.data.dongia;

            const RequestUpdateData = () => {
                try {
                    fetch(
                        `http://localhost:8080/congno/updatedata/${action.payload.id}`,
                        {
                            method: "PUT",
                            body: JSON.stringify({
                                dvt: action.payload.data.dvt,
                                soluong: action.payload.data.soluong,
                                tenhanghoa: action.payload.data.tenhanghoa,
                                blmk: action.payload.data.blmk,
                                xamk: action.payload.data.xamk,
                                cocday: action.payload.data.cocday,
                                daydiennoiduoi:
                                    action.payload.data.daydiennoiduoi,
                                det: action.payload.data.det,
                                ve: action.payload.data.ve,
                                chupcot: action.payload.data.chupcot,
                                daydetnoiduoi:
                                    action.payload.data.daydetnoiduoi,
                                trutram: action.payload.data.trutram,
                                dongia: action.payload.data.dongia,
                                thanhtien: total * 1000,
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
