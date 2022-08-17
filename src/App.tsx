import { Routes, Route } from "react-router-dom";
import { Change } from "./pages/Change_password/Change";
import { Forget } from "./pages/Forget/Forget";
import { Reset } from "./pages/Reset_password/Reset";

function App() {
  return (
    <Routes>
      <Route path="/change-password" element={<Change />} />
      <Route path="/" element={<Forget />} />
      <Route path="/reset-password" element={<Reset />} />
    </Routes>
  );
}

export default App;
