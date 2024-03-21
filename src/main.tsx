import { LazyMotion, domAnimation } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import router from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LazyMotion features={domAnimation}>
          <RouterProvider router={router} />
        </LazyMotion>
      </PersistGate>
    </Provider>
    <Toaster />
  </React.StrictMode>,
);
