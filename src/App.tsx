import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import OrganizationPicker from "./pages/OrganizationPicker/OrganizationPicker";
import TestReportList from "./pages/TestReportList/TestReportList";
import TestReportDetails from "./pages/TestReportDetails/TestReportDetails";
import { Route, Routes } from "react-router-dom";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler";

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <div className="page-cnt">
        <Routes>
          <Route path="/" element={<OrganizationPicker />} />
          <Route
            path="/:orgId/reports"
            element={
              <>
                {" "}
                <Sidebar />
                <TestReportList />
              </>
            }
          />
          <Route
            path="/:orgId/reports/:reportId"
            element={
              <>
                {" "}
                <Sidebar />
                <TestReportDetails />
              </>
            }
          />
          <Route
            path="/error-fetching"
            element={
              <>
                {" "}
                <Sidebar />
                <ErrorHandler />
              </>
            }
          />
           <Route
            path="*"
            element={
              <>
                {" "}
                <Sidebar />
                <ErrorHandler />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
