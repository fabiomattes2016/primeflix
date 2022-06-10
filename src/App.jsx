import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./routes";

function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3000} />
      <Router />
    </div>
  );
}

export default App;
