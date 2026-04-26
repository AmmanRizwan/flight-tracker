import { configureStore } from "@reduxjs/toolkit";
import currentPositionReducer from "./slice/location";

export const store = configureStore({
    reducer: {
        currentPosition: currentPositionReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;