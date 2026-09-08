import { Routes, Route } from "react-router";

import Home from "./pages/Home";

import HPLaptops from "./pages/HPLaptops";
import DellLaptops from "./pages/DellLaptops";
import LenovoLaptops from "./pages/LenovoLaptops";

import HPPrinters from "./pages/HPPrinters";
import CanonPrinters from "./pages/CanonPrinters";

import CiscoNetworking from "./pages/CiscoNetworking";

import IntelProcessors from "./pages/IntelProcessors";
import AMDProcessors from "./pages/AMDProcessors";
import MicrosoftSolutions from "./pages/MicrosoftSolutions";


function App() {
  return (
    <Routes>

      {/* =========================
          HOME
      ========================= */}
      <Route
        path="/"
        element={<Home />}
      />


      {/* =========================
          BUSINESS LAPTOPS
      ========================= */}

      <Route
        path="/hp-business-laptops"
        element={<HPLaptops />}
      />

      <Route
        path="/dell-business-laptops"
        element={<DellLaptops />}
      />

      <Route
        path="/lenovo-business-laptops"
        element={<LenovoLaptops />}
      />


      {/* =========================
          BUSINESS PRINTERS
      ========================= */}

      <Route
        path="/hp-business-printers"
        element={<HPPrinters />}
      />

      <Route
        path="/canon-business-printers"
        element={<CanonPrinters />}
      />


      {/* =========================
          NETWORKING
      ========================= */}

      <Route
        path="/cisco-networking"
        element={<CiscoNetworking />}
      />


      {/* =========================
          PROCESSORS
      ========================= */}

      <Route
        path="/intel-processors"
        element={<IntelProcessors />}
      />

      <Route
        path="/amd-processors"
        element={<AMDProcessors />}
      />
      <Route
  path="/microsoft-business-solutions"
  element={<MicrosoftSolutions />}
/>
    </Routes>
  );
}


export default App;