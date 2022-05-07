import Navbar from "./Navbar";
import {Outlet } from 'react-router-dom';
export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Outlet />
            </div>
        </>
    )
}