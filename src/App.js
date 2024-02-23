import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ResumeViewer from "./views/ResumeViewer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumeViewer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
