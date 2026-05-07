import { configureStore } from "@reduxjs/toolkit";
import currentPositionReducer from "./slice/location";
import themeReducer from "./slice/theme";
import boxLocationReducer from "./slice/boxlocation";
import toggleMapReducer from "./slice/togglemap";

export const store = configureStore({
    reducer: {
        currentPosition: currentPositionReducer,
        theme: themeReducer,
        boxing: boxLocationReducer,
        mapToggle: toggleMapReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;