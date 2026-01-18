import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Vendas from "./pages/vendas/Vendas.tsx";
import Inventario from "./pages/inventario/Inventario.tsx";
import Relatorios from "./pages/relatorios/Relatorios.tsx";
import Configuracoes from "./pages/configuracoes/Configuracoes.tsx";
import Login from "./pages/configuracoes/Login.tsx";
import Recuperar from "./pages/configuracoes/Recuperar.tsx";
import NotFound from "./pages/configuracoes/NotFound.tsx";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    path: "/auth/",
    children: [
      { path: "login", element: <Login /> },
      { path: "recuperar-senha", element: <Recuperar /> },
    ],
  },
  {
    path: "/app/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "vendas", element: <Vendas /> },
      { path: "inventario", element: <Inventario /> },
      { path: "relatorios", element: <Relatorios /> },
      { path: "configuracoes", element: <Configuracoes /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
