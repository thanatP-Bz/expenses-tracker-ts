import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "../expenses/expensesSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
