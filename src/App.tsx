import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import OrganizationPicker from './pages/OrganizationPicker/OrganizationPicker';
import TestReportList from './pages/TestReportList/TestReportList';

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header/>
      <div className="page-cnt">
        <Sidebar/>
        {/* <OrganizationPicker/> */}
        {/* <TestReportList/> */}
      </div>
     
    </div>
  );
}

export default App;
