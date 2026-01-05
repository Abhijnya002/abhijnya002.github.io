import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";

const Root = () => {
  const [isBatterySavingOn, setIsBatterySavingOn] = useState(false); // Start with animations enabled

  // Skip loading screen for frontend-only app
  return (
    <App
      isBatterySavingOn={isBatterySavingOn}
      setIsBatterySavingOn={setIsBatterySavingOn}
    />
  );
};

// Strict Mode for testing purposes during development
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
