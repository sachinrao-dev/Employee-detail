/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};
const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    employeeDetail: (state, action) => {
      state.item = action.payload;
    },
  },
});
export const { employeeDetail } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
