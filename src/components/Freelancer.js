import { useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { FiClock, FiHeart } from 'react-icons/fi';
import DefaultImage from '../assets/default.webp';

const Freelancer = (props) => {
  const [imgSrc, setImgSrc] = useState(props.imges);
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating] = useState(props.rating || Math.random() * 2 + 3); // Random rating between 3-5 if not provided

  const handleImageError = () => {
    if (!error) {
      setImgSrc(DefaultImage);
      setError(true);
    }
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const formatPrice = (price) => {
    // Handle undefined/null/empty cases
    if (!price && price !== 0) return 'N/A';
    
    // Convert to number if it's a string
    const numericPrice = typeof price === 'string' 
      ? parseFloat(price.replace(/[^0-9.-]+/g, ''))
      : Number(price);
    
    // Check if conversion was successful
    if (isNaN(numericPrice)) return 'N/A';
    
    // Format as currency
    return numericPrice.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };
  const displayPrice = formatPrice(props.price);
  return (
    <div 
      className="gig-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div 
        className={`gig-card ${isHovered ? 'gig-card-hover' : ''}`}
        onClick={props.handleNavigate}
      >
        {/* Image Container */}
        <div className="gig-image-container">
          <img 
            className="gig-image" 
            onError={handleImageError} 
            src={imgSrc} 
            alt={props.heading}
          />
          
          {/* Favorite Button */}
          <button 
            className="favorite-button"
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? (
              <FaHeart className="text-danger" />
            ) : (
              <FiHeart className="text-white" />
            )}
          </button>

          {/* Overlay on hover */}
          {isHovered && (
            <div className="gig-image-overlay">
              <div className="overlay-content">
                <span className="quick-view-text">Quick View</span>
              </div>
            </div>
          )}

          {/* Price Badge */}
         {displayPrice !== 'N/A' && (
        <div className="price-badge">
          <span>Starting at </span>
          <strong>{displayPrice}</strong>
        </div>
      )}
        </div>

        {/* Card Body */}
        <div className="gig-card-body">
          {/* Seller Info */}
          <div className="seller-info">
            <img 
              src={props.sellerAvatar || DefaultImage} 
              alt="Seller" 
              className="seller-avatar"
            />
            <div>
              <span className="seller-name">{props.sellerName || 'Top Rated Seller'}</span>
              {props.isPro && <span className="pro-badge">Pro</span>}
            </div>
          </div>

          {/* Gig Title */}
          <h3 className="gig-title" title={props.heading}>
            {props.heading}
          </h3>
          
          {/* Rating */}
          <div className="gig-rating">
            <FaStar className="text-warning" />
            <span className="rating-value">{rating.toFixed(1)}</span>
            <span className="rating-count">({Math.floor(Math.random() * 1000)})</span>
          </div>

          {/* Gig Meta */}
          <div className="gig-meta">
            <div className="delivery-time">
              <FiClock size={14} />
              <span>{Math.floor(Math.random() * 5) + 1} Day Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .gig-card-container {
          position: relative;
          margin-bottom: 1.5rem;
        }
        
        .gig-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 0.14px 2.29266px rgba(0,0,0,0.032),
                      0 0.37px 4.42626px rgba(0,0,0,0.048),
                      0 3px 7px rgba(0,0,0,0.09);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .gig-card-hover {
          transform: translateY(-5px);
          box-shadow: 0 0.14px 2.29266px rgba(0,0,0,0.06),
                      0 0.37px 4.42626px rgba(0,0,0,0.08),
                      0 3px 12px rgba(0,0,0,0.15);
        }
        
        .gig-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .gig-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .gig-card:hover .gig-image {
          transform: scale(1.05);
        }
        
        .favorite-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0,0,0,0.3);
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 2;
        }
        
        .favorite-button:hover {
          background: rgba(0,0,0,0.5);
          transform: scale(1.1);
        }
        
        .gig-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        
        .overlay-content {
          color: white;
          text-align: center;
        }
        
        .quick-view-text {
          font-weight: 600;
          font-size: 1rem;
        }
        
        .price-badge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 500;
          color: #404145;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .price-badge strong {
          color: #1dbf73;
        }
        
        .gig-card-body {
          padding: 16px;
        }
        
        .seller-info {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .seller-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          margin-right: 8px;
          object-fit: cover;
        }
        
        .seller-name {
          font-size: 0.8rem;
          color: #62646a;
          margin-right: 6px;
        }
        
        .pro-badge {
          background: #1dbf73;
          color: white;
          font-size: 0.7rem;
          padding: 1px 4px;
          border-radius: 3px;
          font-weight: bold;
        }
        
        .gig-title {
          font-size: 1rem;
          font-weight: 500;
          color: #222325;
          margin: 0 0 8px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.4;
          height: 2.8em;
        }
        
        .gig-rating {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .rating-value {
          font-weight: 700;
          color: #ffb33e;
          margin: 0 4px 0 4px;
          font-size: 0.9rem;
        }
        
        .rating-count {
          color: #b5b6ba;
          font-size: 0.8rem;
        }
        
        .gig-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #62646a;
        }
        
        .delivery-time {
          display: flex;
          align-items: center;
        }
        
        .delivery-time svg {
          margin-right: 4px;
        }
        
        @media (max-width: 768px) {
          .gig-image-container {
            height: 180px;
          }
        }
        
        @media (max-width: 576px) {
          .gig-image-container {
            height: 160px;
          }
          
          .gig-card-body {
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Freelancer;
