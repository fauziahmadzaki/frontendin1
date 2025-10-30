import { createBrowserRouter } from "react-router-dom";
import App from "./pages/Home";
import ErrorPage from "./pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);
