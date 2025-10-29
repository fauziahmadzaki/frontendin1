import { createBrowserRouter } from "react-router-dom";
import App from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);
