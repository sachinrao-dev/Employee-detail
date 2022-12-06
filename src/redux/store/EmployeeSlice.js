/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from "@reduxjs/toolkit";
// import { employee } from "../constant/EmployeeData";

const initialState = {
  item: [],
};
const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    employeeDetail: (state, action) => {
      console.log(action.payload, "actionPayload");
      state.item = action.payload;
      // state.item.push(action.payload);
      //   state.item ;
    },
  },
});
export const { employeeDetail } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
