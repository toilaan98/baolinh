import { createSlice } from "@reduxjs/toolkit";

let iniEntered = {
    tencongty: "",
    m104: 0,
    m106: 0,
    m144: 0,
    m14100: 0,
    m164: 0,
    m167: 0,
    m16100: 0,
    m16130: 0,
    m16200: 0,
    m16250: 0,
    m16280: 0,
    m16300: 0,
    m16350: 0,
    m18230: 0,
    m18260: 0,
    m18280: 0,
    m18300: 0,
    m18320: 0,
    m18350: 0,
    m18380: 0,
    m18400: 0,
    m18450: 0,
    m18500: 0,
    m18550: 0,
    m18600: 0,
    m18650: 0,
    m18700: 0,
    u16: 0,
    udat: 0,
    tangdo: 0,
    ty16: 0,
    ty18: 0,
    getUpdateId: "",
    getDeleteId: "",
    date: "2023",
};

export const bulongImportSlice = createSlice({
    name: "bulongImport",
    initialState: iniEntered,

    reducers: {
        handleEditFormChange(state, action) {
            state.tencongty = action.payload.tencongty;
            state.m104 = action.payload.m104;
            state.m106 = action.payload.m106;
            state.m144 = action.payload.m124;
            state.m14100 = action.payload.m14100;
            state.m164 = action.payload.m164;
            state.m167 = action.payload.m167;
            state.m16100 = action.payload.m16100;
            state.m16130 = action.payload.m16130;
            state.m16200 = action.payload.m16200;
            state.m16250 = action.payload.m16250;
            state.m16280 = action.payload.m16280;
            state.m16300 = action.payload.m16300;
            state.m16350 = action.payload.m16350;
            state.m18230 = action.payload.m18230;
            state.m18260 = action.payload.m18260;
            state.m18280 = action.payload.m18280;
            state.m18300 = action.payload.m18300;
            state.m18320 = action.payload.m18320;
            state.m18350 = action.payload.m18350;
            state.m18380 = action.payload.m18380;
            state.m18400 = action.payload.m18400;
            state.m18450 = action.payload.m18450;
            state.m18500 = action.payload.m18500;
            state.m18550 = action.payload.m18550;
            state.m18600 = action.payload.m18600;
            state.m18650 = action.payload.m18650;
            state.m18700 = action.payload.m18700;
            state.u16 = action.payload.u16;
            state.udat = action.payload.udat;
            state.tangdo = action.payload.tangdo;
            state.ty16 = action.payload.ty16;
            state.ty18 = action.payload.ty18;
        },
        handleAddData(state, action) {
            const postData = async () => {
                try {
                    fetch("http://localhost:8080/bulongimport/postBlImport", {
                        method: "POST",
                        body: JSON.stringify({
                            tencongty: action.payload.tencongty,
                            m104: action.payload.m104,
                            m106: action.payload.m106,
                            m144: action.payload.m144,
                            m14100: action.payload.m14100,
                            m164: action.payload.m164,
                            m167: action.payload.m167,
                            m16100: action.payload.m16100,
                            m16130: action.payload.m16130,
                            m16200: action.payload.m16200,
                            m16250: action.payload.m16250,
                            m16280: action.payload.m16280,
                            m16300: action.payload.m16300,
                            m16350: action.payload.m16350,
                            m18230: action.payload.m18230,
                            m18260: action.payload.m18260,
                            m18280: action.payload.m18280,
                            m18300: action.payload.m18300,
                            m18320: action.payload.m18320,
                            m18350: action.payload.m18350,
                            m18380: action.payload.m18380,
                            m18400: action.payload.m18400,
                            m18450: action.payload.m18450,
                            m18500: action.payload.m18500,
                            m18550: action.payload.m18550,
                            m18600: action.payload.m18600,
                            m18650: action.payload.m18650,
                            m18700: action.payload.m18700,
                            u16: action.payload.u16,
                            udat: action.payload.udat,
                            tangdo: action.payload.tangdo,
                            ty16: action.payload.ty16,
                            ty18: action.payload.ty18,
                            // thanhtien: total * 1000,
                        }),
                        headers: { "Content-Type": "application/json" },
                    });
                } catch {}
            };
            postData();

            state.tencongty = "";
            state.m104 = 0;
            state.m106 = 0;
            state.m144 = 0;
            state.m14100 = 0;
            state.m164 = 0;
            state.m167 = 0;
            state.m16100 = 0;
            state.m16130 = 0;
            state.m16200 = 0;
            state.m16250 = 0;
            state.m16280 = 0;
            state.m16300 = 0;
            state.m16350 = 0;
            state.m18230 = 0;
            state.m18260 = 0;
            state.m18280 = 0;
            state.m18300 = 0;
            state.m18320 = 0;
            state.m18350 = 0;
            state.m18380 = 0;
            state.m18400 = 0;
            state.m18450 = 0;
            state.m18500 = 0;
            state.m18550 = 0;
            state.m18600 = 0;
            state.m18650 = 0;
            state.m18700 = 0;
            state.u16 = 0;
            state.udat = 0;
            state.tangdo = 0;
            state.ty16 = 0;
            state.ty18 = 0;
        },

        // getUpdateId: "",
        // getDeleteId: "",
        // date: "2023",
        handleEnteredData(state, action) {
            if (action.payload.newFormData.tencongty) {
                state.tencongty = action.payload.newFormData.tencongty;
            }
            if (action.payload.newFormData.m104) {
                state.m104 = action.payload.newFormData.m104;
            }
            if (action.payload.newFormData.m106) {
                state.m106 = action.payload.newFormData.m106;
            }
            if (action.payload.newFormData.m144) {
                state.m144 = action.payload.newFormData.m144;
            }
            if (action.payload.newFormData.m14100) {
                state.m14100 = action.payload.newFormData.m14100;
            }
            if (action.payload.newFormData.m164) {
                state.m164 = action.payload.newFormData.m164;
            }
            if (action.payload.newFormData.m167) {
                state.m167 = action.payload.newFormData.m167;
            }
            if (action.payload.newFormData.m16100) {
                state.m16100 = action.payload.newFormData.m16100;
            }
            if (action.payload.newFormData.m16130) {
                state.m16130 = action.payload.newFormData.m16130;
            }
            if (action.payload.newFormData.m16200) {
                state.m16200 = action.payload.newFormData.m16200;
            }
            if (action.payload.newFormData.m16250) {
                state.m16250 = action.payload.newFormData.m16250;
            }
            if (action.payload.newFormData.m16280) {
                state.m16280 = action.payload.newFormData.m16280;
            }
            if (action.payload.newFormData.m16300) {
                state.m16300 = action.payload.newFormData.m16300;
            }
            if (action.payload.newFormData.m16350) {
                state.m16350 = action.payload.newFormData.m16350;
            }
            if (action.payload.newFormData.m16280) {
                state.m18230 = action.payload.newFormData.m18230;
            }
            if (action.payload.newFormData.m16280) {
                state.m18260 = action.payload.newFormData.m18260;
            }
            if (action.payload.newFormData.m16280) {
                state.m18280 = action.payload.newFormData.m18280;
            }
            if (action.payload.newFormData.m18300) {
                state.m18300 = action.payload.newFormData.m18300;
            }
            if (action.payload.newFormData.m18320) {
                state.m18320 = action.payload.newFormData.m18320;
            }
            if (action.payload.newFormData.m18350) {
                state.m18350 = action.payload.newFormData.m18350;
            }
            if (action.payload.newFormData.m18380) {
                state.m18380 = action.payload.newFormData.m18380;
            }
            if (action.payload.newFormData.m18400) {
                state.m18400 = action.payload.newFormData.m18400;
            }
            if (action.payload.newFormData.m18450) {
                state.m18450 = action.payload.newFormData.m18450;
            }
            if (action.payload.newFormData.m18500) {
                state.m18500 = action.payload.newFormData.m18500;
            }
            if (action.payload.newFormData.m18550) {
                state.m18550 = action.payload.newFormData.m18550;
            }
            if (action.payload.newFormData.m18600) {
                state.m18600 = action.payload.newFormData.m18600;
            }
            if (action.payload.newFormData.m18650) {
                state.m18650 = action.payload.newFormData.m18650;
            }
            if (action.payload.newFormData.m18700) {
                state.m18700 = action.payload.newFormData.m18700;
            }
            // ----------------------------
            if (action.payload.newFormData.u16) {
                state.u16 = action.payload.newFormData.u16;
            }
            if (action.payload.newFormData.udat) {
                state.udat = action.payload.newFormData.udat;
            }
            if (action.payload.newFormData.tangdo) {
                state.tangdo = action.payload.newFormData.tangdo;
            }
            if (action.payload.newFormData.ty16) {
                state.ty16 = action.payload.newFormData.ty16;
            }
            if (action.payload.newFormData.ty18) {
                state.ty18 = action.payload.newFormData.ty18;
            }
        },

        //deleteData
        handleDeleteData(state, action) {
            console.log(action.payload.bulongImportId);
            if (action.payload.bulongImportId) {
                fetch(
                    `http://localhost:8080/bulongimport/postBlImport/${action.payload.bulongImportId}`,
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

            const RequestUpdateData = () => {
                try {
                    fetch(
                        `http://localhost:8080/bulongimport/update-blimport/${action.payload.id}`,
                        {
                            method: "PUT",
                            body: JSON.stringify({
                                tencongty: action.payload.data.tencongty,
                                m104: action.payload.data.m104,
                                m106: action.payload.data.m106,
                                m144: action.payload.data.m144,
                                m14100: action.payload.data.m14100,
                                m164: action.payload.data.m164,
                                m167: action.payload.data.m167,
                                m16100: action.payload.data.m16100,
                                m16130: action.payload.data.m16130,
                                m16200: action.payload.data.m16200,
                                m16250: action.payload.data.m16250,
                                m16280: action.payload.data.m16280,
                                m16300: action.payload.data.m16300,
                                m16350: action.payload.data.m16350,
                                m18230: action.payload.data.m18230,
                                m18260: action.payload.data.m18260,
                                m18280: action.payload.data.m18280,
                                m18300: action.payload.data.m18300,
                                m18320: action.payload.data.m18320,
                                m18350: action.payload.data.m18350,
                                m18380: action.payload.data.m18380,
                                m18400: action.payload.data.m18400,
                                m18450: action.payload.data.m18450,
                                m18500: action.payload.data.m18500,
                                m18550: action.payload.data.m18550,
                                m18600: action.payload.data.m18600,
                                m18650: action.payload.data.m18650,
                                m18700: action.payload.data.m18700,
                                u16: action.payload.data.u16,
                                udat: action.payload.data.udat,
                                tangdo: action.payload.data.tangdo,
                                ty16: action.payload.data.ty16,
                                ty18: action.payload.data.ty18,
                            }),
                            headers: { "Content-Type": "application/json" },
                        }
                    );
                } catch {}
            };
            RequestUpdateData();
        },
        handleGetId(state, action) {
            console.log(action.payload);
            if (action.payload.id) {
                state.getUpdateId = action.payload.id;
            }
            if (action.payload.idDelete) {
                state.getDeleteId = action.payload.idDelete;
            }

            if (action.payload.id === "cancel") {
                state.getUpdateId = "";
            }
            if (action.payload.idDelete === "cancel") {
                state.getDeleteId = "";
            }
        },
        handleGetDate(state, action) {
            state.date = action.payload;
        },
    },
});
