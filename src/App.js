import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Loading from "./Loading/Loading";
import Results from "./Results/Results";
import "./App.css";
import ReportPDF from "./Report/ReportPDF";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
