import { NavLink } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
    return <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">MERN</NavLink>
                </div>

                <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About us</NavLink></li>
                    <li><NavLink to="/contact">Contact us</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
            </div>
        </header>
    </>
}