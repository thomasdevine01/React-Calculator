import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='container'>

            <div className='nav-elements'>
                <ul>
                    <li>
                        <NavLink to='/src/components/home/Home.js' className = 'a'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/src/Calc.js' className = 'a'>Calc</NavLink>
                    </li>
                    <li>
                        <NavLink to='https://github.com/thomasdevine01/react-calculator' aria-current="page" className = 'a'>Github</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar
