import { createSlice } from "@reduxjs/toolkit/react";

const initialState={
    value:42,

};
const counterSlice=createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        arttir(state: { value: number; }){
            state.value+=1;
        },
        azalt(state: { value: number; }){
            state.value-=1;
        },
    },

});

export const {arttir,azalt}=counterSlice.actions;
export const counterReducer=counterSlice.reducer;

