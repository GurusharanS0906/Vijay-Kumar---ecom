import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useStore, formatPrice } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  // ─── HERO CAROUSEL ───
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  const timerRef = useRef(null);

  const goToSlide = useCallback((idx) => {
    setCurrentSlide((idx + totalSlides) % totalSlides);
  }, [totalSlides]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 6000);
  }, [totalSlides]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const moveSlide = (dir) => {
    goToSlide(currentSlide + dir);
    resetTimer();
  };

  // Featured / bestseller products
  const featured = products.filter(p => p.badge === 'Bestseller' || p.badge === 'Popular').slice(0, 8);

  // Slider scroll
  const scrollSlider = (containerId, direction) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const firstChild = container.querySelector('.featured-product-wrapper');
    const scrollAmount = firstChild ? firstChild.offsetWidth + 20 : container.offsetWidth * 0.75;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };

  return (
    <>
      {/* ═══ HERO SECTION (CAROUSEL) ═══ */}
      <section className="hero-section hero-home-section" style={{ padding: 0, borderBottom: 'none' }}>
        <div className="hero-bg hero-home-bg" style={{ backgroundImage: "url('/images/nine_gemstones_banner.png')" }}></div>
        <div className="hero-overlay-bottom-blend"></div>

        <div className="hero-slider-wrapper">
          <div className="hero-glass-card">
            <div className="hero-slider-container" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
              {/* Slide 1 */}
              <div className="hero-slide">
                <div className="hero-slide-text">
                  <span className="hero-tagline">The New Standard</span>
                  <h2 className="hero-title">Real Gems. <em>Real Value.</em></h2>
                  <p className="hero-subtitle">Discover GIA, GRS &amp; IGI certified natural diamonds and precious gemstones — handpicked for brilliance, delivered with trust.</p>
                </div>
                <Link to="/shop" className="btn btn-gold btn-sm" style={{ flexShrink: 0 }}>Explore Collection <i className="fas fa-arrow-right" style={{ marginLeft: 8 }}></i></Link>
              </div>
              {/* Slide 2 */}
              <div className="hero-slide">
                <div className="hero-slide-text">
                  <span className="hero-tagline">Exclusive Concierge</span>
                  <h2 className="hero-title">Free Astrological <em>Consultation</em></h2>
                  <p className="hero-subtitle">Struggling to find the perfect stone? Let our certified gemologists and Vedic astrologers guide you based on your birth charts.</p>
                </div>
                <Link to="/contact?subject=Astrological Consultation" className="btn btn-gold btn-sm" style={{ flexShrink: 0 }}>Book Free Consult <i className="fas fa-chevron-right" style={{ marginLeft: 8 }}></i></Link>
              </div>
              {/* Slide 3 */}
              <div className="hero-slide">
                <div className="hero-slide-text">
                  <span className="hero-tagline">Handcrafted Gold</span>
                  <h2 className="hero-title">Bespoke Ring <em>Customization</em></h2>
                  <p className="hero-subtitle">Mount your selected natural gemstone in 18K/22K hallmarked gold rings. Crafted to absolute perfection.</p>
                </div>
                <Link to="/contact?subject=Bespoke Customization" className="btn btn-gold btn-sm" style={{ flexShrink: 0 }}>Start Designing <i className="fas fa-chevron-right" style={{ marginLeft: 8 }}></i></Link>
              </div>
              {/* Slide 4 */}
              <div className="hero-slide">
                <div className="hero-slide-text">
                  <span className="hero-tagline">Natural Splendor</span>
                  <h2 className="hero-title">20% Grand Launch <em>Special Offer</em></h2>
                  <p className="hero-subtitle">Celebrate the opening of our flagship online store with an instant 20% discount on loose gemstones and rings. Code: <strong>VK20</strong></p>
                </div>
                <Link to="/shop" className="btn btn-gold btn-sm" style={{ flexShrink: 0 }}>Shop Collection <i className="fas fa-arrow-right" style={{ marginLeft: 8 }}></i></Link>
              </div>
            </div>

            <button className="hero-arrow prev" onClick={() => moveSlide(-1)} aria-label="Previous slide"><i className="fas fa-chevron-left"></i></button>
            <button className="hero-arrow next" onClick={() => moveSlide(1)} aria-label="Next slide"><i className="fas fa-chevron-right"></i></button>

            <div className="hero-dots-container">
              {[0, 1, 2, 3].map(i => (
                <span key={i} onClick={() => { goToSlide(i); resetTimer(); }} className={`hero-dot ${currentSlide === i ? 'active' : ''}`}></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GEM CIRCLES — SHOP BY GEMSTONE ═══ */}
      <section className="section reveal" id="gem-circles-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Collection</span>
            <h2 className="section-title">Shop by Gemstone</h2>
            <p className="section-subtitle">Nine sacred gems — each chosen for its purity, provenance, and planetary power.</p>
            <div className="gold-line"></div>
          </div>
          <div className="gem-circles hide-scrollbar" id="gem-circles">
            {[
              { name: 'Yellow Sapphire', img: '/images/yellow_sapphire.png' },
              { name: 'Blue Sapphire', img: '/images/blue_sapphire.png' },
              { name: 'Emerald', img: '/images/emerald.png' },
              { name: 'Ruby', img: '/images/ruby.png' },
              { name: 'Opal', img: '/images/opal.png' },
              { name: 'Pearl', img: '/images/pearl.png' },
              { name: 'Red Coral', img: '/images/coral.png' },
              { name: 'Hessonite', img: '/images/hessonite.png' },
            ].map(gem => (
              <Link key={gem.name} to={`/shop?cat=${encodeURIComponent(gem.name)}`} className="gem-circle">
                <div className="gem-circle-img"><img src={gem.img} alt={gem.name} /></div>
                <span className="gem-circle-label">{gem.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CATEGORY CARDS ═══ */}
      <section className="section bg-ivory reveal" id="category-cards-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Curated For You</span>
            <h2 className="section-title">Explore Categories</h2>
            <p className="section-subtitle">From loose certified gemstones to timeless fine jewelry — find exactly what you're looking for.</p>
            <div className="gold-line"></div>
          </div>
          <div className="category-scroll hide-scrollbar">
            <Link to="/shop?type=gems" className="category-card">
              <img src="/images/ruby.png" alt="Loose Gemstones" loading="lazy" />
              <div className="category-card-overlay"></div>
              <div className="category-card-content"><h3>Loose Gemstones</h3><p>Certified natural gems for astrology &amp; collection</p></div>
            </Link>
            <Link to="/shop?type=jewelry" className="category-card">
              <img src="/images/ring.png" alt="Fine Jewelry" loading="lazy" />
              <div className="category-card-overlay"></div>
              <div className="category-card-content"><h3>Fine Jewelry</h3><p>Handcrafted rings, pendants &amp; necklaces in hallmarked gold</p></div>
            </Link>
            <Link to="/shop?cat=Pearl" className="category-card">
              <img src="/images/pearl.png" alt="Precious Pearls" loading="lazy" />
              <div className="category-card-overlay"></div>
              <div className="category-card-content"><h3>Precious Pearls</h3><p>South Sea, Basra &amp; freshwater pearls of exceptional luster</p></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PRODUCTS — BESTSELLERS ═══ */}
      <section className="section reveal" id="bestsellers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Most Loved</span>
            <h2 className="section-title">Bestsellers</h2>
            <p className="section-subtitle">Our customers' favourites — certified, stunning, and ready to ship.</p>
            <div className="gold-line"></div>
          </div>
          <div className="slider-wrapper">
            <div className="product-grid hide-scrollbar featured-scroll" id="featured-products">
              {featured.map(p => (
                <div key={p.id} className="featured-product-wrapper">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
            <button className="slider-nav-btn prev-btn" onClick={() => scrollSlider('featured-products', -1)} aria-label="Previous"><i className="fas fa-chevron-left"></i></button>
            <button className="slider-nav-btn next-btn" onClick={() => scrollSlider('featured-products', 1)} aria-label="Next"><i className="fas fa-chevron-right"></i></button>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/shop" className="btn btn-outline-gold btn-lg">View All Products <i className="fas fa-arrow-right" style={{ marginLeft: 8 }}></i></Link>
          </div>
        </div>
      </section>

      {/* ═══ THE VK PROMISE ═══ */}
      <section className="section bg-ivory reveal" id="trust-section" style={{ borderTop: '1px solid var(--color-gray-100)', borderBottom: '1px solid var(--color-gray-100)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>The VK Promise</span>
            <h2 className="section-title" style={{ color: 'var(--color-dark)' }}>Our Trust Guarantee</h2>
            <p className="section-subtitle" style={{ color: 'var(--color-gray-600)' }}>Providing complete authenticity and purity assurances, inspired by the standards of India's leading luxury jewellers.</p>
            <div className="gold-line"></div>
          </div>
          <div className="trust-grid stagger-children">
            {[
              { icon: 'fas fa-certificate', title: '100% Certified Gems', desc: 'Every stone is individually tested and certified by top international labs like GIA, GRS, or IGI.' },
              { icon: 'fas fa-gem', title: 'BIS Hallmarked Gold', desc: 'Every customized ring, pendant, or earring mounting features certified BIS hallmarking for purity.' },
              { icon: 'fas fa-shield-halved', title: 'Transit Insured Delivery', desc: 'Fully insured door-to-door delivery. Every package is completely covered until it reaches you.' },
              { icon: 'fas fa-rotate', title: 'Lifetime Exchange', desc: 'Transparent lifetime exchange and buyback options on all our fine jewelry gold mountings.' },
            ].map((card, i) => (
              <div className="trust-card" key={i}>
                <div className="trust-card-icon"><i className={card.icon}></i></div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="cert-logos-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2.5rem', marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px dashed var(--color-gray-200)' }}>
            {['GIA', 'GRS', 'IGI'].map(lab => (
              <div key={lab} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-gray-400)', letterSpacing: '0.15em' }}>{lab}</div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-gray-400)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <i className="fas fa-gem" style={{ color: 'var(--color-gold)', fontSize: '0.95rem' }}></i> BIS HALLMARKED
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section reveal" id="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Happy Customers</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Trusted by thousands across India for quality, authenticity, and value.</p>
            <div className="gold-line"></div>
          </div>
          <div className="testimonial-scroll hide-scrollbar">
            {[
              { name: 'Priya Sharma', loc: 'Mumbai', initial: 'P', text: '"I purchased a Ceylon Blue Sapphire for my engagement ring and the quality exceeded all expectations. The GRS certificate gave me complete confidence. VijayKumar\'s team even helped me choose the perfect carat weight for my budget."' },
              { name: 'Rajesh Iyer', loc: 'Chennai', initial: 'R', text: '"Bought a Yellow Sapphire for astrological purposes. The gemologist spent 30 minutes explaining the differences between heated and unheated stones. Received a beautiful unheated Pukhraj with GIA certification. Truly professional service."' },
              { name: 'Anita Gupta', loc: 'Delhi', initial: 'A', text: '"I ordered a Bespoke Diamond Gold Ring as an anniversary gift. The packaging was luxurious, the diamonds sparkled beautifully, and it arrived two days early! My wife was absolutely thrilled. Will definitely shop again for our next celebration."' },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => <i key={j} className="fas fa-star"></i>)}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-white)', fontWeight: 600, fontFamily: 'var(--font-serif)', fontSize: '0.8rem' }}>{t.initial}</div>
                  <div>
                    <strong className="testimonial-author" style={{ display: 'block' }}>{t.name}</strong>
                    <span className="testimonial-location">{t.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
