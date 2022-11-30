import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Dashboard from "./component/Dashboard";
import EmployeeDetail from "./component/Context";
import { employee } from "./component/EmployeeInfo";
import Personal from "./component/Personal";
import Professional from "./component/Professional";
import Academic from "./component/Academic";
import Employment from "./component/Employment";
import "./App.css";

function App() {
  return (
    <div className="App">
      <EmployeeDetail.Provider value={employee}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="users/1/personal" element={<Personal />} />
          <Route path="users/1/professional" element={<Professional />} />
          <Route path="users/1/academic" element={<Academic />} />
          <Route path="users/1/employment" element={<Employment />} />
        </Routes>
      </EmployeeDetail.Provider>
    </div>
  );
}

export default App;
