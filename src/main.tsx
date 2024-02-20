import React from "react"
import ReactDOM from "react-dom/client"
import { ProjectStateProvider } from "./context/ContextProvider"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProjectStateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProjectStateProvider>,
)
