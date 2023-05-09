import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/couterSlice";
import { tableSlice } from "./slice/tableSlice";
import { isClickSlice } from "./slice/isClick";
import { customerSlice } from "./slice/customerSlice";
import { contructionSlice } from "./slice/constructionSlice";
import { bulongImportSlice } from "./slice/bulongImportSlice";
import { bulongExportSlice } from "./slice/bulongexportSlice";
import { bulongNeedSlice } from "./slice/bulongNeedSlice";
import { bulongXntSlice } from "./slice/bulongXntSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        table: tableSlice.reducer,
        click: isClickSlice.reducer,
        customer: customerSlice.reducer,
        construction: contructionSlice.reducer,
        bulongImport: bulongImportSlice.reducer,
        bulongExport: bulongExportSlice.reducer,
        bulongNeed: bulongNeedSlice.reducer,
        bulongXNT: bulongXntSlice.reducer,
    },
});
export const isClickActions = isClickSlice.actions;
export const customerActions = customerSlice.actions;
export const counterActions = counterSlice.actions;
export const contructionActions = contructionSlice.actions;
export const tableActions = tableSlice.actions;
export const bulongExportActions = bulongExportSlice.actions;
export const bulongImportActions = bulongImportSlice.actions;
export const bulongNeedActions = bulongNeedSlice.actions;
export const bulongXntActions = bulongXntSlice.actions;

export default store;
