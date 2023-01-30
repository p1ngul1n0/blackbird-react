import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Loading from "./Loading/Loading";
import Results from "./Results/Results";
import "./App.css";
import ReactGA from "react-ga";

function App() {
  const TRACKING_ID = "G-3CJMN759VR";
  ReactGA.initialize(TRACKING_ID);
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
