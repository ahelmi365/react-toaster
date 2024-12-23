// css
import "bootstrap/dist/css/bootstrap.min.css";
// axios
import "./services/axios-global.js";
import "@styles/global.css";

import { PersistGate } from "redux-persist/integration/react";
// redux store
import { store, presistor } from "@store/store";
import { createRoot } from "react-dom/client";
// ruotes
import AppRouter from "@routes/AppRouter";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={presistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
