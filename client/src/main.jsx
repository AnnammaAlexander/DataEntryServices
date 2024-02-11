import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import store from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ToastContainer 
      position="top-right"
      hideProgressBar={true}
      pauseOnFocusLoss={false}
      autoClose={2000}
    /> 

    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
