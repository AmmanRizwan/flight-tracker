import { createSlice } from "@reduxjs/toolkit";
import type { LatLngExpression } from "leaflet";

interface ICurrentPosition {
    position: LatLngExpression;
}

const initialState: ICurrentPosition = {
    position: [20.5930, 78.9629]
};

export const currentPositionSlice = createSlice({
    name: "current_position",
    initialState,
    reducers: {
        setPosition: (state, action) => {
            state.position = action.payload;
        }
    }
})

export const { setPosition } = currentPositionSlice.actions;
export default currentPositionSlice.reducer;