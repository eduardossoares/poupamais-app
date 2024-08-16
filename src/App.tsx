import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home";
import { Accounts } from "./pages/accounts";
import { Support } from "./pages/support";
import { Activities } from "./pages/activities";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contas",
        element: <Accounts />
      },
      {
        path: "/suporte",
        element: <Support />
      },
      {
        path: "/atividades",
        element: <Activities />
      },
    ]
  }
]);