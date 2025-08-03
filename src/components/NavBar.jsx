import '../css/NavBar.css'
import logo from '../images/logo.png'
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  const handleLogoClick = () => {
    // Nếu đang ở trang home, scroll lên đầu
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Nếu ở trang khác (/menu, /about...), Link sẽ tự động navigate về home
  };

  return (
    <div className="navbar-container">
      <div className="main-navbar">
        <Link to="/" className="logo-navbar" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-ctrl">
          <Link to="/menu" className="nav-item">Thực đơn</Link>
          <Link to="/about" className="nav-item">Giới thiệu</Link>
          <Link to="/services" className="nav-item">Dịch vụ</Link>
          <Link to="/contact" className="nav-item">Liên hệ</Link>
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