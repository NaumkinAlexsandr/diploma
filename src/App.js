import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Apps } from "./pages/Apps";
import { Tasks } from "./pages/Tasks";
import { LeadTable } from "./pages/Leadtable";
import { CreateLead } from "./pages/Createlead";
import { ChangeTasks } from "./pages/Changetasks";
import { Discovery } from "./pages/Discovery";
import { CreateScript } from "./pages/Createscript";
import { Analizer } from "./pages/Analizer";
import { NofoundPage } from "./pages/Nofoundpage";
import { AuthProvider } from "./hooks/AuthProvider";
import { AuthPrivate } from "./hooks/AuthPrivate";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/diploma" element={<Login />}></Route>
        <Route path="/diploma/apps" element={<Apps />} />
        <Route path="/diploma/tasks" element={<Tasks />} />
        <Route path="/diploma/leadTable" element={<LeadTable />} />
        <Route path="/diploma/createlead" element={<CreateLead />} />
        <Route path="/diploma/changetasks" element={<ChangeTasks />} />
        <Route path="/diploma/discovery" element={<Discovery />} />
        <Route path="/diploma/createscript" element={<CreateScript />} />
        <Route path="/diploma/analizer" element={<Analizer />} />
        <Route path="*" element={<NofoundPage />} />
      </Routes>
    </AuthProvider>
  );
}
export { App };
