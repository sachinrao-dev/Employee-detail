import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import EmployeeFetchData from "./component/constant/EmployeeFetchData";
import store from "./redux/store/store";
import Dashboard from "./component/UserInfo/Dashboard";
import PersonalInfo from "./component/UserInfo/PersonalInfo";
import ProfessionalInfo from "./component/UserInfo/ProfessionalInfo";
import AcademicInfo from "./component/UserInfo/AcademicInfo";
import EmploymentInfo from "./component/UserInfo/EmploymentInfo";
import AllEmployeeInCompanyInfo from "./component/UserInfo/AllEmployeeInCompanyInfo";

function App() {
  return (
    <div>
      <Provider store={store}>
        <EmployeeFetchData />
        <Router>
          <Routes>
            <Route path="/*" element={<Dashboard />} />
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
