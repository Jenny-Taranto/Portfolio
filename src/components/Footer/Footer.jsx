import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <nav>
                <NavLink to='/about'>A propos</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
            <div>
                <a href="https://github.com/Jenny-Taranto" target="_blank"><img src="/github_reversed.png" alt="Logo Github"/></a>
                <a href="https://linkedin.com/in/jenny-taranto-a81631327" target="_blank"><img src="/linkedin.png" alt="Logo LinkedIn"/></a>
            </div>
            <p>© 2025 Jenny Taranto - Tous droits réservés.</p>
        </footer>
    )
}

export default Footer