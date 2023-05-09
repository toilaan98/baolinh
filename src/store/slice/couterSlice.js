import { createSlice } from "@reduxjs/toolkit";
const iniCounter = {
    quantity: null,
    customer: null,
    construction: null,
    bulongImport: null,
    bulongExport: null,
    bulongNeed: null,
    bulongXNT: null,
};

export const counterSlice = createSlice({
    name: "data",
    initialState: iniCounter,
    reducers: {
        incrementHandle(state, action) {
            state.quantity = action.payload;
        },
        dataCusomer(state, action) {
            state.customer = action.payload;
        },
        dataConstruction(state, action) {
            state.construction = action.payload;
        },
        dataBulongImport(state, action) {
            state.bulongImport = action.payload;
        },
        dataBulongExport(state, action) {
            state.bulongExport = action.payload;
        },
        dataBulongNeed(state, action) {
            state.bulongNeed = action.payload;
        },
        dataBulongXNT(state, action) {
            state.bulongXNT = action.payload;
        },
    },
});
