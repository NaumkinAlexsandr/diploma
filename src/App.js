import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Apps from "./pages/apps";
import LeadTable from "./pages/leadtable";
import Tasks from "./pages/tasks";
import Discovery from "./pages/discovery";
import Analizer from "./pages/analizer";
import Notfoundpage from "./pages/notfoundpage";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/diploma/" element={<Login />} />
        <Route path="/diploma/apps" element={<Apps />} />
        <Route path="/diploma/leadtable" element={<LeadTable />} />
        <Route path="/diploma/tasks" element={<Tasks />} />
        <Route path="/diploma/discovery" element={<Discovery />} />
        <Route path="/diploma/analizer" element={<Analizer />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    );
  }
}
export default App;
