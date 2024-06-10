import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Table from "./components/Table";
import Billing from "./components/Billing";
import RTL from "./components/RTL";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { DarkModeProvider } from "./components/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<Table />} />
          <Route path="/bill" element={<Billing />} />
          <Route path="/rtl" element={<RTL />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
