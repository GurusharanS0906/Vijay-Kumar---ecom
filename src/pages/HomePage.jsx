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
      {/* ═══ SILK HERO SECTION ═══ */}
      <section className="silk-hero-section">
        <div className="container silk-hero-container">
          
          {/* Left: Typography & Search Form */}
          <div className="silk-hero-left">
            <span className="silk-hero-subtitle">Timeless Beauty, Uniquely Yours</span>
            <h1 className="silk-hero-title">
              Find Your Right<br/>
              <span className="gold-text">Gemstone</span>
            </h1>

            <div className="silk-hero-form">
              <div className="silk-radio-group">
                <label className="silk-radio-label">
                  <input type="radio" name="finder_type" defaultChecked />
                  <span>By Gemstone</span>
                </label>
                <label className="silk-radio-label">
                  <input type="radio" name="finder_type" />
                  <span>By Purpose</span>
                </label>
              </div>

              <div className="silk-select-group">
                <div className="silk-select-wrapper">
                  <svg className="silk-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3h12l4 6-10 13L2 9z"/></svg>
                  <select className="silk-select">
                    <option value="">Select Gemstone</option>
                    <option>Yellow Sapphire</option>
                    <option>Blue Sapphire</option>
                    <option>Emerald</option>
                    <option>Ruby</option>
                    <option>Pearl</option>
                    <option>Red Coral</option>
                    <option>Hessonite</option>
                    <option>Opal</option>
                  </select>
                </div>
                <div className="silk-select-wrapper">
                  <svg className="silk-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  <select className="silk-select">
                    <option value="">Select Carat Weight</option>
                    <option>1 – 2 Carats</option>
                    <option>2 – 4 Carats</option>
                    <option>4 – 6 Carats</option>
                    <option>6 – 10 Carats</option>
                    <option>10+ Carats</option>
                  </select>
                </div>
                <div className="silk-select-wrapper">
                  <svg className="silk-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  <select className="silk-select">
                    <option value="">Select Budget</option>
                    <option>Under ₹10,000</option>
                    <option>₹10,000 – ₹50,000</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>
                </div>
              </div>

              <button className="silk-search-btn" onClick={() => window.location.href='/shop'}>
                Find My Gemstone &rarr;
              </button>

              <div className="silk-advanced-search">
                <Link to="/shop">Browse Full Collection &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Right: Gemstones & Rings */}
          <div className="silk-hero-right">
            <div className="silk-rings-display">
              {/* Gemstones - desktop only, positioned above */}
              <div className="silk-gemstones-wrapper">
                <picture>
                  <source media="(max-width: 992px)" srcSet="/images/tworingmobile_cropped.png" />
                  <img src="/images/gemstones.png" alt="Precious Gemstones Collection" />
                </picture>
              </div>
              {/* Two Rings - desktop shows full, mobile shows cropped */}
              <div className="silk-two-rings-wrapper">
                <picture>
                  <source media="(max-width: 992px)" srcSet="/images/tworingmobile.png" />
                  <img src="/images/two ring.png" alt="Gemstone Rings" />
                </picture>
              </div>
            </div>
          </div>

        </div>

        {/* Trust Badges Bar */}
        <div className="hero-trust-bar">
          <div className="container trust-bar-container">
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3h12l4 6-10 13L2 9z"/></svg>
              <div className="trust-text">
                <strong>Certified Gemstones</strong>
                <span>Authentic & Lab Tested</span>
              </div>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <div className="trust-text">
                <strong>Secure Shopping</strong>
                <span>Your data is protected</span>
              </div>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <div className="trust-text">
                <strong>Free Insured Shipping</strong>
                <span>On all orders</span>
              </div>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              <div className="trust-text">
                <strong>30 Day Returns</strong>
                <span>Hassle free returns</span>
              </div>
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
