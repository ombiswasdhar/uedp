import React from 'react';
import { Nav } from '../Nav/Nav';
import { Marquee } from '../Marquee/Marquee';
import { Buttons } from '../Buttons/Buttons';
import './ProductDetails.css';

export const ProductDetails: React.FC = () => {
  return (
    <div className="product-details-page">
      <Marquee />
      <Nav />
      
      <main className="product-main-container">
        {/* Section Header */}
        <header className="product-section-header">
          <div className="header-left">
            <span className="category-text">Sedan's & Hatchbacks</span>
            <h1 className="title-text">Kaali-Peeli // Bombay Taxi</h1>
          </div>
          <div className="header-right">
            <span className="price-text">RS. 1590</span>
          </div>
        </header>

        {/* Product Section */}
        <section className="product-section">
          {/* Left Column - Images */}
          <div className="product-left-column">
            <div className="main-image-container">
              {/* Main Product Image Placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="Kaali-Peeli Bombay Taxi Toy Car" 
                className="main-image"
              />
            </div>
            <div className="thumbnail-carousel">
              <button className="carousel-nav-btn" aria-label="Previous image">&lt;</button>
              <div className="thumbnails-container">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`thumbnail-square ${i === 1 ? 'active' : ''}`}>
                    <img 
                      src={`https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=200&h=200&sig=${i}`} 
                      alt={`Thumbnail ${i}`} 
                    />
                  </div>
                ))}
              </div>
              <button className="carousel-nav-btn" aria-label="Next image">&gt;</button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="product-right-column">
            {/* Title Block */}
            <div className="product-title-block">
              <h2 className="product-main-title">
                <span className="title-black">KAALI - </span>
                <span className="title-yellow">PEELI</span>
              </h2>
              <p className="product-subtitle">The soul of Bombay, in your hands.</p>
            </div>

            {/* CTA Button */}
            <button className="add-to-cart-btn">
              <span className="btn-text">Add To Cart</span>
              <div className="btn-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            {/* Specifications List */}
            <div className="specs-list">
              {/* Description */}
              <div className="spec-item">
                <h3 className="spec-title">Description:</h3>
                <p className="spec-text">
                  From the crackle of the meter to the rattle of the door, the Kaali Peeli is more than a taxi - it's a time machine. It holds the hum of everyday Bombay: school runs and skyline sunsets, monsoon splashes on Marine Drive, the glow of city lights in rain-specked windows. Painted in black and yellow, this isn't just a toy - it's a pocket-sized memory. A slice of the city that knew your silence after a long day. That held your midnight rides through empty streets. And kept moving, just like you. Because some vehicles don't just carry passengers. They carry dreams.
                </p>
                <div className="spec-divider" />
              </div>

              {/* Materials */}
              <div className="spec-item">
                <h3 className="spec-title">Materials:</h3>
                <p className="spec-text">
                  Made from solid steam beech wood, neodymium magnets, painted with food-grade colors, sturdy metal alloy base plate, wheel hubs & axles and soft, non-toxic silicone grips that keep the ride smooth and safe.
                  <br/><br/>
                  *Children under 3 years of age should be supervised at play.
                </p>
                <div className="spec-divider" />
              </div>

              {/* Dimensions */}
              <div className="spec-item">
                <h3 className="spec-title">Dimensions & Weight:</h3>
                <p className="spec-text">
                  L 4.5" x W 1.8" x H 1.7" (L 115mm x W 45mm x H 40mm) ≈ 140 gms
                </p>
                <div className="spec-divider" />
              </div>

              {/* Origin */}
              <div className="spec-item">
                <h3 className="spec-title">Origin:</h3>
                <p className="spec-text">
                  Designed and Handcrafted in India
                </p>
                <div className="spec-divider" />
              </div>

              {/* Delivery */}
              <div className="spec-item delivery-item">
                <div className="delivery-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <span className="delivery-text">Delivery T&C</span>
                <div className="spec-divider" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
