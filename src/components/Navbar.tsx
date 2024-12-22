import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    return (
        <nav className="flex justify-between items-center py-3 px-20 bg-red-700 text-slate-200">
            <h1 className="font-Inter font-semibold text-4xl tracking-wide py-1 px-3 rounded-md">
                <Link to="/">Setsu</Link>
            </h1>
            <ul className="flex list-none gap-4">
                <li className={`text-lg font-medium py-1 px-4 rounded-md hover:text-slate-300 ease-in-out duration-300 ${location.pathname === '/' ? 'text-yellow-400' : ''}`}>
                    <Link to="/">Home</Link>
                </li>
                <li className={`text-lg font-medium py-1 px-3 rounded-md hover:text-slate-300 ease-in-out duration-300 ${location.pathname === '/about' ? 'text-yellow-400' : ''}`}>
                    <Link to="/about">About</Link>
                </li>
                <li className={`text-lg font-medium py-1 px-3 rounded-md hover:text-slate-300 ease-in-out duration-300 ${location.pathname === '/seiyuu' ? 'text-yellow-400' : ''}`}>
                    <Link to="/seiyuu">Seiyuu</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;