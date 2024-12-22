import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-3 px-20 bg-red-700 text-white">
            <h1 className="font-Inter font-semibold text-4xl uppercase tracking-wide">Setsu</h1>
            <ul className="flex list-none">
                <li className="mr-6 text-lg font-medium">
                    <Link to="/">Home</Link>
                </li>
                <li className="mr-6 text-lg font-medium">
                    <Link to="/about">About</Link>
                </li>
                <li className="mr-6 text-lg font-medium">
                    <Link to="/seiyuu">Seiyuu</Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar;