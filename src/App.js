import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Apps } from "./pages/apps";
import { Tasks } from "./pages/tasks";
import { LeadTable } from "./pages/leadtable";
import { Discovery } from "./pages/discovery";
import { Analizer } from "./pages/analizer";
import { NofoundPage } from "./pages/nofoundpage";
function App() {
  return (
    <Routes>
      <Route path="/diploma/" element={<Login />} />
      <Route path="/diploma/apps" element={<Apps />} />
      <Route path="/diploma/tasks" element={<Tasks />} />
      <Route path="/diploma/leadTable" element={<LeadTable />} />
      <Route path="/diploma/discovery" element={<Discovery />} />
      <Route path="/diploma/analizer" element={<Analizer />} />
      <Route path="*" element={<NofoundPage />} />
    </Routes>
  );
}
export { App };
