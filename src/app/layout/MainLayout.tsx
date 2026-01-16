import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function MainLayout() {
    return (
        <div className="min-h-screen bg-neutral-100 p-10">
            {/* Navbar */}
            <Navbar />
            {/* Page content */}
            <main className="max-w-7xl mx-auto py-10 px-6">
                <Outlet />
            </main>
        </div>
    )
}
