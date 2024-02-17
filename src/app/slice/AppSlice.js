import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bills: [
    { name: "Electricity", amount: 50.0, dueDate: "2024-03-01" },
    { name: "Water", amount: 25.0, dueDate: "2024-03-15" },
    { name: "Internet", amount: 75.0, dueDate: "2024-03-30" },
  ],
  accounts: [
    { type: "Checking", balance: 1000.0 },
    { type: "Savings", balance: 5000.0 },
    { type: "Investment", balance: 20000.0 },
  ],
  totalBills: 0,
  sideNavState: false,
};

const AppSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.accounts = action.payload;
    },
    setBills: (state, action) => {
      state.bills = action.payload;
    },
    setTotalBill: (state, action) => {
      state.totalBills = action.payload;
    },
    setSideNavState: (state, action) => {
      state.sideNavState = action.payload;
    },
  },
});

export const { setAccount, setBills, setTotalBill, setSideNavState } =
  AppSlice.actions;

export default AppSlice.reducer;
