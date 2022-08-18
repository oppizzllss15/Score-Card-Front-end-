import React from "react";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/SignUp/Signup";
import { Nav } from "./components/Nav";
import { Index } from "./layout/Index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
