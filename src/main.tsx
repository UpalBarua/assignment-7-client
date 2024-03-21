import { LazyMotion, domAnimation } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./app.tsx";
import "./index.css";
import { persistor, store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LazyMotion features={domAnimation}>
          <App />
        </LazyMotion>
      </PersistGate>
    </Provider>
    <Toaster />
  </React.StrictMode>,
);
