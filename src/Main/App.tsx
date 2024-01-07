import { FC } from "react";

import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App: FC = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
};

export default App;
