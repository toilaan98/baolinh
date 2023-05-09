import { createSlice } from "@reduxjs/toolkit";
const iniCounter = {
    mounted: 0,
    isDone: false,
    isDelete: false,
    isEdit: "",
    handleGetId: "",
};

export const isClickSlice = createSlice({
    name: "increment",
    initialState: iniCounter,
    reducers: {
        // data
        toggleHandle(state, action) {
            state.mounted++;
        },
        HandleEdit(state, action) {
            state.mounted = !state.mounted;
            if (action.payload) {
                console.log(action.payload);
                state.handleGetId = false;
                return;
            }
            state.isEdit = action.payload;
            const input = document.getElementsByTagName("input");

            if (input.length > 0) {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = "";
                }
            }
        },
        HandleCancel(state, action) {
            state.mounted = !state.mounted;
            state.isEdit = false;
        },

        handleGetId(state, action) {
            state.handleGetId = action.payload;
        },
        // ---------
        // modal
        handleModalDone(state, action) {
            console.log(action.payload);
            state.isDone = true;
        },
        handleModalDoneCancel(state, action) {
            state.isDone = false;
            state.handleGetId = "";
        },
        handleModalDoneDelete(state, action) {
            state.isDelete = true;
            state.handleGetId = "";
        },
        // =============

        // decrementHanlde(state, action) {
        //     console.log(action);
        //     if (state.quantity >= 1) {
        //         state.quantity = state.quantity - 1;
        //     }
        // },
    },
});
