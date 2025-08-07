import '../css/NavBar.css'
import logo from '../images/logo.png'
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-container">
      <div className="main-navbar">
        <Link to="/" className="logo-navbar" onClick={() => handleNavClick('/')}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-ctrl">
          <Link to="/menu" className="nav-item" onClick={() => handleNavClick('/menu')}>Thực đơn</Link>
          <Link to="/about" className="nav-item" onClick={() => handleNavClick('/about')}>Giới thiệu</Link>
          <Link to="/services" className="nav-item" onClick={() => handleNavClick('/services')}>Dịch vụ</Link>
          <Link to="/contact" className="nav-item" onClick={() => handleNavClick('/contact')}>Liên hệ</Link>
        </div>
      </div>
      <div className="sub-navbar">
        <div className="order-nav">
          <span className="material-symbols-outlined type-icon">
            home_storage
          </span>
          <span className="order-text">
            Order now
          </span>
        </div>
        <div className="material-symbols-outlined">
          location_on
        </div>
      </div>
    </div>
  )
}

export default NavBar