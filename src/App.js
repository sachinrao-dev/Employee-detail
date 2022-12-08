import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import EmployeeFetchData from "./redux/EmployeeFetchData";
import store from "./redux/store/store";
import Dashboard from "./redux/UserInfo/Dashboard";
import PersonalInfo from "./redux/UserInfo/PersonalInfo";
import ProfessionalInfo from "./redux/UserInfo/ProfessionalInfo";
import AcademicInfo from "./redux/UserInfo/AcademicInfo";
import EmploymentInfo from "./redux/UserInfo/EmploymentInfo";
import AllEmployeeInCompanyInfo from "./redux/UserInfo/AllEmployeeInCompanyInfo";

function App() {
  return (
    <div>
      <Provider store={store}>
        <EmployeeFetchData />
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="users/:userId">
              <Route path="personal" element={<PersonalInfo />} />
              <Route path="professional" element={<ProfessionalInfo />} />
              <Route path="academic" element={<AcademicInfo />} />
              <Route path="employment" element={<EmploymentInfo />} />
              <Route
                path="employment/alluserscompanies"
                element={<AllEmployeeInCompanyInfo />}
              />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
