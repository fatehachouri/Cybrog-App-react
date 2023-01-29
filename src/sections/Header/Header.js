import './Header.css';
import logo from '../../assets/images/logo.png';
import NavItem , {NavItemDropDown } from '../../components/NavItem/NavItem';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="navbar navbar-expand-md  navbar-dark cyborg-navbar ">
        <div className="container">
            <a href="/" className="navbar-brand">
                <img src={logo} alt='logo'/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                        <Link to='/' className="nav-link">Home</Link>
                        </NavItem>
                    <NavItem>
                        <Link to="/browse" className="nav-link">Browse</Link>
                        </NavItem>
                    <NavItemDropDown>
                        <Link to="/details" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/details/fortnite" className="dropdown-item">Fortnite</Link></li>
                            <li><Link to="/details/pubg" className="dropdown-item">Pubg</Link></li>
                        </ul>
                    </NavItemDropDown>
                    <NavItem><Link to="/stream" className="nav-link">Stream</Link></NavItem>
                    <NavItem><Link to="/profile"  className="nav-link">Profile</Link></NavItem>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
