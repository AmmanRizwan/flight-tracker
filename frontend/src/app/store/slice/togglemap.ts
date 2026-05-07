import { createSlice } from "@reduxjs/toolkit";

interface IToggleMap {
    toggle: boolean;
}

const initialState: IToggleMap = {
    toggle: false,
}

export const toggleMapSlice = createSlice({
    name: "map_toggle",
    initialState,
    reducers: {
        toggleMap: (state) => {
            state.toggle = !state.toggle;
        }
    }
})

export const { toggleMap } = toggleMapSlice.actions;
export default toggleMapSlice.reducer;