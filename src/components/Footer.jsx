import '../css/Footer.css';
import logo from '../images/logo.png'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-main">
                <div className="footer-contact">
                    <p>Address: 123 Apple St, Fruitland</p>
                    <p>Email: contact@banhtao.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-info">
                    <img src={logo} alt="Bánh Táo Ngộ Nghĩnh" className="footer-logo" />
                    <div className="footer-social">
                        <button className="instagram-btn">
                            <a href="https://www.instagram.com/ducrichard_/" target="_blank">
                                <img src="./instagram.png" alt="Instagram Icon" className="instagram-icon" />
                            </a>
                        </button>
                        <button className="facebook-btn">
                            <a href="https://www.facebook.com/duwcsthinhj#/" target="_blank">
                                <img src="./facebook.png" alt="Facebook Icon" className="facebook-icon" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer-rights">
                <p>&copy; 2025 Bánh Táo Ngộ Nghĩnh. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
