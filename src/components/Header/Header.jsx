import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <NavLink to='/'><img src="/logo_JT.png" alt="Logo Jenny Taranto" /></NavLink>
                <div>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "active" : ""}>A propos</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header