import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <ul>
                <li><Link to="/">Acasa</Link></li>
                <li><Link to="/favorite">Favorite</Link></li>
                <li><Link to="/adauga">Adauga reteta</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;

