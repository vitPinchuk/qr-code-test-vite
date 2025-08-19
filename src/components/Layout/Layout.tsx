import { Routes, Route } from "react-router-dom";

import { Navigation } from "../Navigation";
import { QrCodeGenerator } from "../QrCodeGenerator";
import { QrCodeScanner } from "../QrCodeScanner";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scanner" element={<QrCodeScanner />} />
      </Routes>
    </>
  );
};
