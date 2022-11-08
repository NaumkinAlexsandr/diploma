import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import AppsPage from "./pages/apps";
import Tasks from "./pages/tasks";
import LeadTable from "./pages/leadtable";
import Discovery from "./pages/discovery";
import Analizer from "./pages/analizer";
import NofoundPage from "./pages/nofoundpage";
class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/diploma/" element={<LoginPage />} />
        <Route path="/diploma/apps" element={<AppsPage />} />
        <Route path="/diploma/tasks" element={<Tasks />} />
        <Route path="/diploma/leadTable" element={<LeadTable />} />
        <Route path="/diploma/discovery" element={<Discovery />} />
        <Route path="/diploma/analizer" element={<Analizer />} />
        <Route path="*" element={<NofoundPage />} />
      </Routes>
    );
  }
}
export default App;
