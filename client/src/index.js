import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./components";
import { Provider } from "react-redux";
import configureStore from "./lib/state/store";
import FormProvider from "./lib/hooks/useFormValidation";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();
ReactDOMClient.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <FormProvider>
      <App />
    </FormProvider>
  </Provider>
);

reportWebVitals();
