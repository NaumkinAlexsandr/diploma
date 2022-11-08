import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import AppsPage from "./pages/appsPage"
import Tasks from './pages/tasks';
import LeadTable from './pages/leadTable';
import Discovery from './pages/discovery';
import Analizer from './pages/analizer';
import NofoundPage from "./pages/nofoundPage";
class App extends React.Component {
  render() {
    return (
      <Routes>
          <Route path="/graduate_work_js" element={<LoginPage />} />
          <Route path="/graduate_work_js/appsPage" element={<AppsPage />} />
          <Route path="/graduate_work_js/tasks" element={<Tasks />} />
          <Route path="/graduate_work_js/leadTable" element={<LeadTable />} />
          <Route path="/graduate_work_js/discovery" element={<Discovery />} />
          <Route path="/graduate_work_js/analizer" element={<Analizer />} />
          <Route path="*" element={<NofoundPage />} />
      </Routes>
    );
  }
}
export default App;
