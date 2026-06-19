import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, gemCategories, jewelryCategories, categoryImages } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('cat') || 'All';
  const typeParam = searchParams.get('type') || 'All';
  const searchParam = searchParams.get('search') || searchParams.get('q') || '';

  const [currentCategory, setCurrentCategory] = useState(catParam);
  const [currentTypeFilter] = useState(typeParam);
  const [currentSort, setCurrentSort] = useState('Recommended');
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchQuery, setSearchQuery] = useState(searchParam);

  useEffect(() => { setCurrentCategory(catParam); }, [catParam]);

  const pageTitle = useMemo(() => {
    if (currentTypeFilter === 'gems') return 'Certified Loose Gemstones';
    if (currentTypeFilter === 'jewelry') return 'Handcrafted Fine Jewelry';
    return 'Our Collection';
  }, [currentTypeFilter]);

  const categoriesToRender = useMemo(() => {
    if (currentTypeFilter === 'jewelry') return jewelryCategories;
    if (currentTypeFilter === 'gems') return gemCategories;
    return [...gemCategories, ...jewelryCategories];
  }, [currentTypeFilter]);

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      if (currentTypeFilter === 'gems' && !gemCategories.includes(p.category)) return false;
      if (currentTypeFilter === 'jewelry' && !jewelryCategories.includes(p.category)) return false;
      if (currentCategory !== 'All' && p.category !== currentCategory) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) || (p.origin && p.origin.toLowerCase().includes(q));
      }
      return true;
    });

    if (currentSort === 'Price Low-High') result.sort((a, b) => a.price - b.price);
    else if (currentSort === 'Price High-Low') result.sort((a, b) => b.price - a.price);
    else if (currentSort === 'Highest Rated') result.sort((a, b) => b.rating - a.rating);
    else if (currentSort === 'Newest') result.sort((a, b) => b.id - a.id);
    else result.sort((a, b) => {
      const valA = (a.badge === 'Bestseller' ? 2 : a.badge === 'Popular' ? 1 : 0);
      const valB = (b.badge === 'Bestseller' ? 2 : b.badge === 'Popular' ? 1 : 0);
      return valB - valA;
    });

    return result;
  }, [currentCategory, currentTypeFilter, currentSort, searchQuery]);

  const toShow = filteredProducts.slice(0, visibleCount);

  const selectCategory = (cat) => {
    setCurrentCategory(cat);
    setVisibleCount(12);
  };

  return (
    <main className="container" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-4xl)' }}>
      <div className="breadcrumbs">
        <Link to="/">Home</Link> <span>/</span>
        {currentCategory === 'All' ? (
          <span className="current">Shop</span>
        ) : (
          <><Link to="/shop">Shop</Link> <span>/</span> <span className="current">{currentCategory}</span></>
        )}
      </div>

      <div className="section-header" style={{ textAlign: 'left', marginBottom: 'var(--space-xl)' }}>
        <span className="section-label">VK Catalog</span>
        <h1 className="section-title" style={{ fontSize: '2.25rem' }}>{pageTitle}</h1>
        <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
          Showing {Math.min(visibleCount, filteredProducts.length)} of {filteredProducts.length} certified items
        </p>
        <div className="gold-line" style={{ marginLeft: 0, marginTop: 'var(--space-sm)' }}></div>
      </div>

      {/* Gem Circles Filter */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <div className="gem-circles hide-scrollbar">
          <div onClick={() => selectCategory('All')} className={`gem-circle ${currentCategory === 'All' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
            <div className="gem-circle-img icon-circle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-dark)', color: 'var(--color-gold)', fontSize: '1.25rem' }}><i className="fas fa-th-large"></i></div>
            <span className="gem-circle-label">All</span>
          </div>
          {categoriesToRender.map(cat => (
            <div key={cat} onClick={() => selectCategory(cat)} className={`gem-circle ${currentCategory === cat ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
              <div className="gem-circle-img"><img src={categoryImages[cat] || '/images/ruby.png'} alt={cat} /></div>
              <span className="gem-circle-label">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Search Bar */}
      <div style={{ marginBottom: 'var(--space-xl)', maxWidth: 500, position: 'relative' }}>
        <i className="fas fa-search" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gray-400)', fontSize: '0.85rem' }}></i>
        <input
          type="text" placeholder="Search gems, jewelry, categories, origin..."
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(12); }}
          style={{ width: '100%', padding: '0.7rem 1.5rem 0.7rem 2.5rem', fontSize: '0.85rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--color-gray-200)', outline: 'none', background: 'var(--color-white)' }}
        />
        {searchQuery && (
          <button onClick={() => { setSearchQuery(''); setVisibleCount(12); }} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-gray-400)', fontSize: '0.85rem' }}><i className="fas fa-times"></i></button>
        )}
      </div>

      {/* Filter & Sort Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)', borderBottom: '1px solid var(--color-gray-200)', paddingBottom: 'var(--space-md)' }}>
        <div className="filter-pills hide-scrollbar">
          {['All', ...categoriesToRender].map(cat => (
            <button key={cat} className={`filter-pill ${currentCategory === cat ? 'active' : ''}`} onClick={() => selectCategory(cat)}>
              {cat === 'All' ? 'All Items' : cat}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <label style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-500)' }}>Sort By:</label>
          <select className="form-select" value={currentSort} onChange={(e) => setCurrentSort(e.target.value)} style={{ padding: '0.4rem 2rem 0.4rem 0.75rem', fontSize: '0.75rem', fontWeight: 600, borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-300)', outline: 'none' }}>
            <option value="Recommended">Recommended</option>
            <option value="Price Low-High">Price: Low to High</option>
            <option value="Price High-Low">Price: High to Low</option>
            <option value="Highest Rated">Highest Rated</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 1rem', color: 'var(--color-gray-500)' }}>
          <i className="fas fa-gem" style={{ fontSize: '3rem', marginBottom: '1.5rem', opacity: 0.3, display: 'block', color: 'var(--color-gold)' }}></i>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-dark)' }}>No Gemstones Found</h3>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>We couldn't find any products matching your selection.</p>
          <button className="btn btn-gold btn-md" onClick={() => selectCategory('All')}>View All Collection</button>
        </div>
      ) : (
        <div className="product-grid">
          {toShow.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}

      {/* Load More */}
      {visibleCount < filteredProducts.length && (
        <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
          <button className="btn btn-outline-gold btn-lg" onClick={() => setVisibleCount(prev => prev + 8)}>
            Load More Products <i className="fas fa-chevron-down" style={{ marginLeft: 8 }}></i>
          </button>
        </div>
      )}
    </main>
  );
}
