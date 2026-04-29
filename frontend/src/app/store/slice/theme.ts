import { createSlice } from "@reduxjs/toolkit";

interface IThemeControl {
    theme: string;
    toggle: boolean
}

const initialState: IThemeControl = {
    theme: import.meta.env.VITE_MAP_URI as string,
    toggle: false,
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        darkTheme: (state) => {
            const dark = import.meta.env.VITE_MAP_DARK_URI;
            if (!dark) {
                throw new Error("VITE_MAP_DARK_URI is not set");
            }
            state.theme = dark;
        },
        grayTheme: (state) => {
            const gray = import.meta.env.VITE_MAP_GRAY_URI;  
            if (!gray) {
                throw new Error("VITE_MAP_GRAY_URI is not set");
            }
            state.theme = gray;
        },
        normalTheme: (state) => {
            const normal = import.meta.env.VITE_MAP_URI;
            if (!normal) {
                throw new Error("VITE_MAP_URI is not set");
            }
            state.theme = normal;
        },
        toggleOption: (state) => {
            state.toggle = !state.toggle;
        }
    }
})

export const { darkTheme, grayTheme, normalTheme, toggleOption } = themeSlice.actions;
export default themeSlice.reducer;