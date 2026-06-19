import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, gemCategories, metalPrices } from '../data/products';
import { useStore, formatPrice, getDiscount, generateStars, getProduct } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const [searchParams] = useSearchParams();
  const productId = parseInt(searchParams.get('id'));
  const product = getProduct(productId);
  const { addToCart, toggleWishlistItem, isInWishlist, addToRecentlyViewed, recentlyViewed, showToast } = useStore();

  const [activeTab, setActiveTab] = useState('description');
  const [wearType, setWearType] = useState('Loose');
  const [selectedMetal, setSelectedMetal] = useState('');
  const [ringSize, setRingSize] = useState('');
  const [engravingText, setEngravingText] = useState('');

  useEffect(() => {
    if (productId) addToRecentlyViewed(productId);
    window.scrollTo(0, 0);
  }, [productId, addToRecentlyViewed]);

  if (!product) {
    return (
      <main className="container" style={{ paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)', textAlign: 'center' }}>
        <i className="fas fa-exclamation-triangle" style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '1rem' }}></i>
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Product Not Found</h2>
        <p style={{ color: 'var(--color-gray-500)', margin: '1rem 0' }}>The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="btn btn-gold">Browse Collection</Link>
      </main>
    );
  }

  const discount = getDiscount(product);
  const stars = generateStars(product.rating);
  const isGem = gemCategories.includes(product.category);
  const isRing = product.category === 'Rings';
  const inWish = isInWishlist(product.id);

  // Price calculation
  let mountingPrice = 0;
  if (isGem && wearType !== 'Loose' && selectedMetal) {
    mountingPrice = metalPrices[wearType]?.[selectedMetal] || 0;
  }
  const finalPrice = product.price + mountingPrice;

  const handleAddToCart = () => {
    const options = isGem ? {
      wearType,
      metal: wearType !== 'Loose' ? selectedMetal : null,
      size: wearType === 'Ring' ? ringSize : null,
      engraving: engravingText || null,
      price: finalPrice
    } : isRing ? { size: ringSize || null, price: product.price } : null;

    if (isGem && wearType !== 'Loose' && !selectedMetal) {
      showToast('Please select a metal type', 'error');
      return;
    }
    if ((isGem && wearType === 'Ring' || isRing) && !ringSize) {
      showToast('Please select a ring size', 'error');
      return;
    }

    addToCart(product.id, 1, options);
  };

  // Related products
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 6);
  const recentProducts = recentlyViewed.filter(id => id !== product.id).map(getProduct).filter(Boolean).slice(0, 6);

  return (
    <main className="container" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-4xl)' }}>
      <div className="breadcrumbs">
        <Link to="/">Home</Link> <span>/</span>
        <Link to="/shop">Shop</Link> <span>/</span>
        <Link to={`/shop?cat=${encodeURIComponent(product.category)}`}>{product.category}</Link> <span>/</span>
        <span className="current">{product.name}</span>
      </div>

      {/* Product Detail Grid */}
      <div className="product-detail-grid">
        {/* Left: Image Gallery */}
        <div className="product-gallery">
          <div className="product-main-image">
            <img src={product.image} alt={product.name} id="main-product-img" />
            {product.badge && <span className="product-card-badge" style={{ top: '1rem', left: '1rem', fontSize: '0.7rem', padding: '0.25rem 0.75rem' }}>{product.badge}</span>}
            <button className={`product-card-wishlist ${inWish ? 'active' : ''}`} onClick={(e) => toggleWishlistItem(product.id, e)} style={{ position: 'absolute', top: '1rem', right: '1rem', width: 36, height: 36 }}>
              <i className={`${inWish ? 'fas' : 'far'} fa-heart`}></i>
            </button>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="product-info-panel">
          <span style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', marginBottom: '0.3rem', display: 'block' }}>{product.category} · {product.cert}</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-dark)', margin: '0 0 0.5rem 0' }}>{product.name}</h1>

          <div className="product-card-rating" style={{ marginBottom: '0.75rem' }} dangerouslySetInnerHTML={{ __html: stars + `<span style="margin-left:0.5rem;font-weight:600">${product.rating}</span><span style="color:var(--color-gray-400);margin-left:0.25rem">(${product.reviews} reviews)</span>` }}></div>

          <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-600)', marginBottom: 'var(--space-lg)', lineHeight: 1.6 }}>{product.desc}</p>

          {/* Price */}
          <div style={{ marginBottom: 'var(--space-lg)', borderTop: '1px solid var(--color-gray-100)', borderBottom: '1px solid var(--color-gray-100)', padding: 'var(--space-md) 0' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-dark)' }}>{formatPrice(finalPrice)}</span>
              {discount > 0 && (
                <>
                  <span style={{ fontSize: '1rem', color: 'var(--color-gray-400)', textDecoration: 'line-through' }}>{formatPrice(product.mrp + mountingPrice)}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green)', background: 'rgba(34,197,94,0.08)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>{discount}% OFF</span>
                </>
              )}
            </div>
            {mountingPrice > 0 && (
              <p style={{ fontSize: '0.7rem', color: 'var(--color-gray-500)', marginTop: '0.3rem' }}>
                Includes: Gemstone {formatPrice(product.price)} + {wearType} Mounting ({selectedMetal}) {formatPrice(mountingPrice)}
              </p>
            )}
            <p style={{ fontSize: '0.65rem', color: 'var(--color-gray-400)', marginTop: '0.3rem' }}>Prices inclusive of all taxes. Free insured shipping on orders above ₹50,000.</p>
          </div>

          {/* Specs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: 'var(--space-xl)' }}>
            {[
              { label: 'Carat', value: product.carat },
              { label: 'Origin', value: product.origin },
              { label: 'Cut', value: product.cut },
              { label: 'Color', value: product.color },
              { label: 'Clarity', value: product.clarity },
              { label: 'Treatment', value: product.treatment },
            ].map((spec, i) => (
              <div key={i} style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-sm)', padding: '0.6rem 0.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.55rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-500)', marginBottom: '0.15rem' }}>{spec.label}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-dark)' }}>{spec.value}</div>
              </div>
            ))}
          </div>

          {/* Customization - Gemstones */}
          {isGem && (
            <div style={{ marginBottom: 'var(--space-xl)', border: '1.5px solid var(--color-gray-100)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, marginBottom: 'var(--space-md)' }}>Customize Your Stone</h3>
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <label style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-500)', display: 'block', marginBottom: '0.35rem' }}>How would you like it?</label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['Loose', 'Ring', 'Pendant'].map(type => (
                    <button key={type} onClick={() => { setWearType(type); setSelectedMetal(''); setRingSize(''); }}
                      className={`btn btn-sm ${wearType === type ? 'btn-gold' : 'btn-outline'}`}
                      style={{ fontSize: '0.7rem', padding: '0.4rem 1rem' }}>{type === 'Loose' ? 'Loose Gem' : `In ${type}`}</button>
                  ))}
                </div>
              </div>
              {wearType !== 'Loose' && (
                <>
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <label style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-500)', display: 'block', marginBottom: '0.35rem' }}>Metal Type</label>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {Object.keys(metalPrices[wearType] || {}).map(metal => (
                        <button key={metal} onClick={() => setSelectedMetal(metal)}
                          className={`btn btn-sm ${selectedMetal === metal ? 'btn-gold' : 'btn-outline'}`}
                          style={{ fontSize: '0.65rem', padding: '0.35rem 0.75rem' }}>
                          {metal} (+{formatPrice(metalPrices[wearType][metal])})
                        </button>
                      ))}
                    </div>
                  </div>
                  {wearType === 'Ring' && (
                    <div style={{ marginBottom: 'var(--space-md)' }}>
                      <label style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-500)', display: 'block', marginBottom: '0.35rem' }}>Ring Size</label>
                      <select className="form-select" value={ringSize} onChange={(e) => setRingSize(e.target.value)} style={{ maxWidth: 200, fontSize: '0.8rem', padding: '0.4rem 0.5rem' }}>
                        <option value="">Select Size</option>
                        {[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Ring size for Rings category */}
          {isRing && (
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <label style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-500)', display: 'block', marginBottom: '0.35rem' }}>Ring Size</label>
              <select className="form-select" value={ringSize} onChange={(e) => setRingSize(e.target.value)} style={{ maxWidth: 200, fontSize: '0.8rem', padding: '0.4rem 0.5rem' }}>
                <option value="">Select Size</option>
                {[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
            <button className="btn btn-gold btn-lg" style={{ flex: 2 }} onClick={handleAddToCart}>
              <i className="fas fa-shopping-bag" style={{ marginRight: 8 }}></i>Add to Bag
            </button>
            <button className={`btn ${inWish ? 'btn-outline' : 'btn-outline'} btn-lg`} style={{ flex: 1, color: inWish ? 'var(--color-red)' : '' }} onClick={(e) => toggleWishlistItem(product.id, e)}>
              <i className={`${inWish ? 'fas' : 'far'} fa-heart`} style={{ marginRight: 6 }}></i>{inWish ? 'Saved' : 'Save'}
            </button>
          </div>

          {/* Trust Badges */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.7rem', color: 'var(--color-gray-500)' }}>
            <span><i className="fas fa-certificate" style={{ color: 'var(--color-gold)', marginRight: 4 }}></i>{product.cert} Certified</span>
            <span><i className="fas fa-truck-fast" style={{ color: 'var(--color-gold)', marginRight: 4 }}></i>Free Shipping</span>
            <span><i className="fas fa-shield-halved" style={{ color: 'var(--color-gold)', marginRight: 4 }}></i>10-Day Returns</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <section style={{ marginTop: 'var(--space-3xl)' }}>
        <div style={{ display: 'flex', borderBottom: '2px solid var(--color-gray-200)', marginBottom: 'var(--space-xl)' }}>
          {['description', 'specifications', 'reviews'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{ padding: '0.75rem 1.5rem', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: 'none', background: 'none', cursor: 'pointer', borderBottom: activeTab === tab ? '2px solid var(--color-gold)' : '2px solid transparent', color: activeTab === tab ? 'var(--color-dark)' : 'var(--color-gray-500)', marginBottom: '-2px' }}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        {activeTab === 'description' && (
          <div style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
            <p>{product.desc}</p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              {product.details.map((d, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{d}</li>)}
            </ul>
          </div>
        )}
        {activeTab === 'specifications' && (
          <div style={{ maxWidth: 500 }}>
            {[
              ['Name', product.name], ['Category', product.category], ['Carat Weight', product.carat],
              ['Origin', product.origin], ['Cut / Shape', product.cut], ['Color', product.color],
              ['Clarity', product.clarity], ['Treatment', product.treatment], ['Certification', product.cert],
            ].map(([label, val], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--color-gray-100)', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--color-gray-500)', fontWeight: 600 }}>{label}</span>
                <span style={{ color: 'var(--color-dark)', fontWeight: 700 }}>{val}</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'reviews' && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--color-gray-400)' }}>
            <i className="fas fa-star" style={{ fontSize: '2rem', marginBottom: '1rem', opacity: 0.3, display: 'block', color: 'var(--color-gold)' }}></i>
            <p style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.7rem' }}>{product.reviews} Verified Reviews</p>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Rating: {product.rating}/5 · Reviews coming soon</p>
          </div>
        )}
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section style={{ marginTop: 'var(--space-4xl)' }}>
          <div className="section-header">
            <span className="section-label">You May Also Like</span>
            <h2 className="section-title">Related Gemstones</h2>
            <div className="gold-line"></div>
          </div>
          <div className="product-grid hide-scrollbar featured-scroll">
            {related.map(p => (
              <div key={p.id} className="featured-product-wrapper"><ProductCard product={p} /></div>
            ))}
          </div>
        </section>
      )}

      {/* Recently Viewed */}
      {recentProducts.length > 0 && (
        <section style={{ marginTop: 'var(--space-3xl)' }}>
          <div className="section-header">
            <span className="section-label">Recently Browsed</span>
            <h2 className="section-title">Recently Viewed</h2>
            <div className="gold-line"></div>
          </div>
          <div className="product-grid hide-scrollbar featured-scroll">
            {recentProducts.map(p => (
              <div key={p.id} className="featured-product-wrapper"><ProductCard product={p} /></div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
