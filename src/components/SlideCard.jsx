import '../css/SlideCard.css';

function SlideCard({ name, price, image }) {
    return (
        <div className="slide-card">
            <p className='name-tag'>{name}</p>
            <p className='price-tag'>{price}</p>
            <div className="card-image">
                <img src={image} className="cake-image" alt={name} />
            </div>
        </div>
    );
}

export default SlideCard;
