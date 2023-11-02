import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage, Backe } from "./components/HomePage";
import ColorConverter from "./components/hex2rgb/ColorConverter";
import Steps from "./components/steps/Steps";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/Task1"
          element={
            <>
              <Backe />
              <ColorConverter />
            </>
          }
        />
        <Route
          path="/Task2"
          element={
            <>
              <Backe />
              <Steps />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
