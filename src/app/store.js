import { configureStore } from "@reduxjs/toolkit";

// Import the counter reducer from the counter slice
import counterReducer from "./features/counter/counterSlice"

// Create the Redux store
export const store = configureStore({
    reducer: {
        counter: counterReducer, // Register the counter reducer under the 'counter' key
    },
});
