import { createSlice } from "@reduxjs/toolkit";
import type { LatLngBoundsExpression } from "leaflet";

interface IBoxLocation {
    bound: LatLngBoundsExpression | null;
}

const initialState: IBoxLocation = {
    bound: null,
}

const boxLocation = createSlice({
    name: "box",
    initialState,
    reducers: {
        addBoundery: (state, action) => {
            state.bound = action.payload;
        }
    }
})

export const { addBoundery } = boxLocation.actions;
export default boxLocation.reducer;