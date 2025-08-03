import '../css/Home.css';
import quote from '../images/quote.jpg';
import banner from '../images/banner.jpg';
import SlideMenu from '../components/SlideMenu.jsx';

function Home() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="banner-image-container">
          <img src={banner} alt="sample" className="banner-image" />
        </div>
        <div className='home-menu'>
          <SlideMenu />
        </div>
      </div>
      <div className="home-content">
        <div className="home-slogan">
          <img src={quote} alt="quote" className="quote-image" />
          <p className="slogan">Bánh táo ngon – Nụ cười giòn!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
