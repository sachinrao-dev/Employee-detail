import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./component/Header";
// import Dashboard from "./component/Dashboard";
// import EmployeeDetail from "./component/Context";
// import { employee } from "./component/constant/EmployeeInfo";
// import Personal from "./component/userInfo/Personal";
// import Professional from "./component/userInfo/Professional";
// import Academic from "./component/userInfo/Academic";
// import Employment from "./component/userInfo/Employment";
// import AllEmployeeInCompany from "./component/userInfo/AllEmployeeInCompany";
import { Provider } from "react-redux";
import EmployeeFetchData from "./redux/EmployeeFetchData";
import store from "./redux/store/store";
import Dashboard from "./redux/UserInfo/Dashboard";
import PersonalInfo from "./redux/UserInfo/PersonalInfo";

function App() {
  // console.log(employee, "ssss");
  return (
    // <div className="App">
    //   <EmployeeDetail.Provider value={employee}>
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Dashboard />} />
    //       <Route path="users/:userId">
    //         <Route path="personal" element={<Personal />} />
    //         <Route path="professional" element={<Professional />} />
    //         <Route path="academic" element={<Academic />} />
    //         <Route path="employment" element={<Employment />} />
    //         <Route path="employment/alluserscompanies" element={<AllEmployeeInCompany />} />
    //       </Route>
    //     </Routes>
    //   </EmployeeDetail.Provider>
    // </div>
    <div>
      <Provider store={store}>
        <EmployeeFetchData />
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="users/:userId">
              <Route path="personal" element={<PersonalInfo />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
