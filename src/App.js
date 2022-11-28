import React from "react";
import Header from "./component/Header";
import AllUsersDetails from "./component/AllUsersDetail";
import EmployeeDetail from "./component/Context";
import { employee } from "./component/Object";
import "./App.css";

function App() {
  return (
    <div className="App">
      <EmployeeDetail.Provider value={employee}>
        <Header />
        <AllUsersDetails />
      </EmployeeDetail.Provider>
    </div>
  );
}

export default App;
