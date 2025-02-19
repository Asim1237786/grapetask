import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <AppRoutes />
    </HelmetProvider>
  );
}
export default App;
