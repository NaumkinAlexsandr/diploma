import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Apps } from "./pages/apps";
import { Tasks } from "./pages/tasks";
import { LeadTable } from "./pages/leadtable";
import { CreateLead } from "./pages/createlead";
import { ChangeTasks } from "./pages/changetasks";
import { Discovery } from "./pages/discovery";
import { CreateScript } from "./pages/createscript";
import { Analizer } from "./pages/analizer";
import { NofoundPage } from "./pages/nofoundpage";
import { AuthProvider } from "./hooks/authProvider";
import { AuthPrivate } from "./hooks/authPrivate";

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
