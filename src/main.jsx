//Called OUR App component.Use react dom to intereract with react app.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// Create a root for the React application and render it
// The StrictMode wrapper helps with identifying potential problems in the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
