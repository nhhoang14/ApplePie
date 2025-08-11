import { useRef, useState } from 'react';
import '../css/SlideMenu.css';
import SlideCard from './SlideCard';
import cake1 from '../images/slideAP.png';
import cake2 from '../images/slideAP1.png';
import cake3 from '../images/slideAP2.png';
import cake4 from '../images/slideAP3.png';

function SlideMenu() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cakes = [
    { name: "Bánh Táo Ngộ Nghĩnh", price: "50.000đ", image: cake1 },
    { name: "Bánh Táo Banalate", price: "55.000đ", image: cake2 },
    { name: "Bánh Táo Dâu Bơ", price: "60.000đ", image: cake3 },
    { name: "Bánh Táo Socola", price: "65.000đ", image: cake4 },
    { name: "Bánh Táo ngộ nghĩnh", price: "50.000đ", image: cake1 },
    { name: "Bánh Táo Banalate", price: "55.000đ", image: cake2 },
  ];

  const scroll = (direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right' && currentIndex < cakes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    
    if (scrollRef.current) {
      const cardWidth = 280;
      const newTransform = -currentIndex * cardWidth;
      
      const container = scrollRef.current.querySelector('.slidecard-container');
      if (container) {
        if (direction === 'left' && currentIndex > 0) {
          container.style.transform = `translateX(${-(currentIndex - 1) * cardWidth}px)`;
        } else if (direction === 'right' && currentIndex < cakes.length - 1) {
          container.style.transform = `translateX(${-(currentIndex + 1) * cardWidth}px)`;
        }
      }
    }
  };

  return (
    <div className="slider-wrapper">
      <button 
        className="slider-btn left" 
        onClick={() => scroll('left')}
        disabled={currentIndex === 0}
      >
        ‹
      </button>
      <div className="slide-menu-container" ref={scrollRef}>
        <div 
          className="slidecard-container"
          style={{ transform: `translateX(${-currentIndex * 280}px)` }}
        >
          {cakes.map((cake, index) => (
            <SlideCard key={index} {...cake} />
          ))}
        </div>
      </div>
      <button 
        className="slider-btn right" 
        onClick={() => scroll('right')}
        disabled={currentIndex === cakes.length - 1}
      >
        ›
      </button>
    </div>
  );
}

export default SlideMenu;
