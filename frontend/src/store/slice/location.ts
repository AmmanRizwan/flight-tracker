import { createSlice } from "@reduxjs/toolkit";

interface ICurrentPosition {
    position: null | [];
}

const initialState: ICurrentPosition = {
    position: null
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