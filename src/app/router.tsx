import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Vendas } from "../pages/vendas/vendas";
import { Inventario } from "../pages/inventario/inventario";
import { Relatorios } from "../pages/relatorios/relatorios";
import { Configuracoes } from "../pages/configuracoes/configuracoes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "vendas", element: <Vendas /> },
            { path: "inventario", element: <Inventario /> },
            { path: "relatorios", element: <Relatorios /> },
            { path: "configuracoes", element: <Configuracoes /> }
        ]
    }
]);
