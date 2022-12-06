/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/button-has-type */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getDataFromApi from "./constant/EmployeeData";
import { employeeDetail } from "./store/EmployeeSlice";

function EmployeeFetchData() {
  const disPatch = useDispatch();
  useEffect(() => {
    getDataFromApi().then((employeeData) => {
      disPatch(employeeDetail(employeeData));
    });
  }, []);
}

export default EmployeeFetchData;
