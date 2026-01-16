import { NavLink } from "react-router-dom";

const navLinkClass = (base = "") => ({ isActive }: { isActive: boolean }) =>
    `${base} ${
        isActive
            ? "text-amber-600 hover:text-amber-700"
            : "hover:text-neutral-900 text-neutral-500"
    }`;

export function Navbar() {
    return (
        <header>
            <div className="flex justify-between items-center max-w-7xl h-10 mx-auto px-4 rounded-lg border-2 border-gray-300 bg-neutral-50">
                <div className="w-full">
                    <span >Mercatto</span>
                </div>
                <nav className="flex gap-4 w-fit">
                    <NavLink to="/" className={navLinkClass()}>Início</NavLink>
                    <NavLink to="/vendas" className={navLinkClass()}>Vendas</NavLink>
                    <NavLink to="/relatorios" className={navLinkClass()}>Relatórios</NavLink>
                    <NavLink to="/inventario" className={navLinkClass()}>Inventário</NavLink>
                </nav>
                <div className="w-full text-right">
                    <NavLink to="/configuracoes" className={navLinkClass()}>MaCherie</NavLink>
                </div>
            </div>
        </header>
    );
}
