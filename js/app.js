/* ============================================
   VijayKumar Diamonds & Gems — JS Engine
   Shared logic for all pages
   ============================================ */

// ─── PRODUCT DATABASE (40+ items) ───
const products = [
  // ── RUBY ──
  { id:1, name:"Natural Burmese Ruby",category:"Ruby",price:185000,mrp:220000,carat:"3.15",origin:"Myanmar",cut:"Oval",color:"Pigeon Blood Red",clarity:"Eye Clean",cert:"GRS",treatment:"Unheated",image:"images/ruby.png",gallery:["images/ruby.png"],rating:5.0,reviews:18,badge:"Bestseller",desc:"Unheated pigeon blood ruby from the legendary Mogok mines",details:["3.15 Carat Weight","Oval Faceted Cut","GRS Certified","Unheated / Untreated","Origin: Myanmar (Burma)"] },
  { id:2, name:"Mozambique Ruby Oval",category:"Ruby",price:72000,mrp:85000,carat:"2.10",origin:"Mozambique",cut:"Oval",color:"Vivid Red",clarity:"Slightly Included",cert:"IGI",treatment:"Heated",image:"images/mozambique_ruby.png",gallery:["images/mozambique_ruby.png"],rating:4.6,reviews:9,desc:"Vivid red heated ruby, ideal for astrological rings",details:["2.10 Carat","Oval Cut","IGI Certified","Heated","Origin: Mozambique"] },
  { id:3, name:"Star Ruby Cabochon",category:"Ruby",price:45000,mrp:52000,carat:"4.80",origin:"India",cut:"Cabochon",color:"Purplish Red",clarity:"Translucent",cert:"Lab Cert",treatment:"Natural",image:"https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop"],rating:4.3,reviews:5,desc:"Natural star ruby with distinct 6-ray asterism",details:["4.80 Carat","Cabochon Cut","6-Ray Star Effect","Natural","Origin: India"] },

  // ── BLUE SAPPHIRE ──
  { id:4, name:"Ceylon Blue Sapphire",category:"Blue Sapphire",price:210000,mrp:250000,carat:"3.52",origin:"Sri Lanka",cut:"Cushion",color:"Royal Blue",clarity:"Eye Clean",cert:"GRS",treatment:"Unheated",image:"images/blue_sapphire.png",gallery:["images/blue_sapphire.png"],rating:5.0,reviews:24,badge:"Premium",desc:"Unheated royal blue sapphire from Sri Lanka mines",details:["3.52 Carat","Cushion Cut","GRS Certified","Unheated","Origin: Sri Lanka (Ceylon)"] },
  { id:5, name:"Kashmir Blue Sapphire",category:"Blue Sapphire",price:520000,mrp:600000,carat:"2.80",origin:"Kashmir",cut:"Oval",color:"Cornflower Blue",clarity:"VVS",cert:"Gübelin",treatment:"Unheated",image:"https://images.unsplash.com/photo-1615655096345-61a54750068d?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1615655096345-61a54750068d?q=80&w=600&auto=format&fit=crop"],rating:5.0,reviews:3,badge:"Rare",desc:"Extremely rare unheated Kashmir sapphire with velvety luster",details:["2.80 Carat","Oval Cut","Gübelin Certified","Unheated","Origin: Kashmir, India"] },
  { id:6, name:"Blue Sapphire Heated",category:"Blue Sapphire",price:55000,mrp:68000,carat:"3.20",origin:"Thailand",cut:"Round",color:"Medium Blue",clarity:"Slightly Included",cert:"IGI",treatment:"Heated",image:"images/blue_sapphire.png",gallery:["images/blue_sapphire.png"],rating:4.4,reviews:11,desc:"Affordable heated blue sapphire for Shani graha",details:["3.20 Carat","Round Cut","IGI Certified","Heated","Origin: Thailand"] },

  // ── EMERALD ──
  { id:7, name:"Colombian Emerald",category:"Emerald",price:295000,mrp:350000,carat:"2.85",origin:"Colombia",cut:"Emerald",color:"Vivid Green",clarity:"Minor Inclusions",cert:"GRS",treatment:"Minor Oil",image:"images/emerald.png",gallery:["images/emerald.png"],rating:4.9,reviews:15,badge:"Premium",desc:"Exceptional vivid green emerald from Muzo, Colombia",details:["2.85 Carat","Emerald Cut","GRS Certified","Minor Oil Treatment","Origin: Colombia (Muzo)"] },
  { id:8, name:"Zambian Emerald",category:"Emerald",price:125000,mrp:150000,carat:"3.40",origin:"Zambia",cut:"Oval",color:"Deep Green",clarity:"Moderately Included",cert:"IGI",treatment:"Minor Oil",image:"https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop"],rating:4.7,reviews:8,desc:"Deep green Zambian emerald with excellent saturation",details:["3.40 Carat","Oval Cut","IGI Certified","Minor Oil","Origin: Zambia"] },
  { id:9, name:"Panna Stone 5ct",category:"Emerald",price:68000,mrp:80000,carat:"5.10",origin:"Brazil",cut:"Octagon",color:"Medium Green",clarity:"Included",cert:"Lab Cert",treatment:"Oiled",image:"images/emerald.png",gallery:["images/emerald.png"],rating:4.2,reviews:12,desc:"Affordable natural emerald ideal for Budh graha",details:["5.10 Carat","Octagonal Cut","Lab Certified","Oiled","Origin: Brazil"] },

  // ── YELLOW SAPPHIRE ──
  { id:10,name:"Ceylon Yellow Sapphire",category:"Yellow Sapphire",price:95000,mrp:115000,carat:"4.20",origin:"Sri Lanka",cut:"Oval",color:"Canary Yellow",clarity:"Eye Clean",cert:"GIA",treatment:"Unheated",image:"images/yellow_sapphire.png",gallery:["images/yellow_sapphire.png"],rating:4.9,reviews:22,badge:"Bestseller",desc:"Brilliant canary yellow pukhraj for Jupiter benefits",details:["4.20 Carat","Oval Cut","GIA Certified","Unheated","Origin: Sri Lanka"] },
  { id:11,name:"Golden Yellow Sapphire",category:"Yellow Sapphire",price:62000,mrp:75000,carat:"3.80",origin:"Sri Lanka",cut:"Cushion",color:"Golden Yellow",clarity:"VVS",cert:"IGI",treatment:"Unheated",image:"https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=600&auto=format&fit=crop"],rating:4.7,reviews:14,desc:"Premium golden yellow sapphire with excellent brilliance",details:["3.80 Carat","Cushion Cut","IGI Certified","Unheated","Origin: Sri Lanka"] },
  { id:12,name:"Pukhraj 6ct Budget",category:"Yellow Sapphire",price:35000,mrp:42000,carat:"6.10",origin:"Thailand",cut:"Oval",color:"Light Yellow",clarity:"Slightly Included",cert:"Lab Cert",treatment:"Heated",image:"images/yellow_sapphire.png",gallery:["images/yellow_sapphire.png"],rating:4.1,reviews:7,desc:"Affordable heated pukhraj for astrological use",details:["6.10 Carat","Oval Cut","Lab Certified","Heated","Origin: Thailand"] },

  // ── PEARL ──
  { id:13,name:"South Sea Pearl",category:"Pearl",price:42000,mrp:50000,carat:"12mm",origin:"Australia",cut:"Round",color:"Cream White",clarity:"AAA Luster",cert:"GIA",treatment:"Natural",image:"images/pearl.png",gallery:["images/pearl.png"],rating:4.8,reviews:19,badge:"Popular",desc:"Lustrous 12mm South Sea pearl with exceptional orient",details:["12mm Diameter","Round Shape","AAA Luster Grade","GIA Certified","Origin: Australia"] },
  { id:14,name:"Basra Pearl Natural",category:"Pearl",price:185000,mrp:220000,carat:"8mm",origin:"Persian Gulf",cut:"Round",color:"Cream",clarity:"Fine Luster",cert:"Gübelin",treatment:"Natural",image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop"],rating:5.0,reviews:4,badge:"Rare",desc:"Extremely rare natural Basra pearl — collector's piece",details:["8mm Diameter","Near Round","Natural Formation","Gübelin Certified","Origin: Persian Gulf"] },
  { id:15,name:"Freshwater Pearl Set",category:"Pearl",price:12000,mrp:15000,carat:"7mm",origin:"China",cut:"Button",color:"White",clarity:"Good Luster",cert:"Lab Cert",treatment:"Natural",image:"images/pearl.png",gallery:["images/pearl.png"],rating:4.3,reviews:26,desc:"Set of 5 matched freshwater pearls for jewelry",details:["7mm Each","Button Shape","Set of 5","Lab Certified","Origin: China"] },

  // ── RED CORAL ──
  { id:16,name:"Italian Red Coral",category:"Red Coral",price:28000,mrp:35000,carat:"8.50",origin:"Italy",cut:"Capsule",color:"Ox Blood Red",clarity:"Opaque",cert:"Lab Cert",treatment:"Natural",image:"images/coral.png",gallery:["images/coral.png"],rating:4.6,reviews:16,badge:"Popular",desc:"Premium ox blood Italian coral for Mars (Mangal)",details:["8.50 Carat","Capsule Shape","Lab Certified","Natural","Origin: Italy (Mediterranean)"] },
  { id:17,name:"Japanese Red Coral",category:"Red Coral",price:65000,mrp:78000,carat:"6.20",origin:"Japan",cut:"Oval Cabochon",color:"Deep Red",clarity:"Opaque",cert:"Lab Cert",treatment:"Natural",image:"images/coral.png",gallery:["images/coral.png"],rating:4.8,reviews:6,desc:"Premium deep red Japanese coral — finest quality",details:["6.20 Carat","Oval Cabochon","Lab Certified","Natural","Origin: Japan"] },

  // ── HESSONITE (GOMED) ──
  { id:18,name:"Ceylon Hessonite Garnet",category:"Hessonite",price:18000,mrp:22000,carat:"5.80",origin:"Sri Lanka",cut:"Oval",color:"Honey Brown",clarity:"Eye Clean",cert:"IGI",treatment:"Natural",image:"images/hessonite.png",gallery:["images/hessonite.png"],rating:4.5,reviews:13,desc:"Premium Ceylon gomed for Rahu — excellent transparency",details:["5.80 Carat","Oval Cut","IGI Certified","Natural/Untreated","Origin: Sri Lanka"] },
  { id:19,name:"African Gomed 7ct",category:"Hessonite",price:8500,mrp:11000,carat:"7.20",origin:"Africa",cut:"Cushion",color:"Cinnamon",clarity:"Slightly Included",cert:"Lab Cert",treatment:"Natural",image:"images/hessonite.png",gallery:["images/hessonite.png"],rating:4.0,reviews:8,desc:"Budget-friendly gomed for astrological purposes",details:["7.20 Carat","Cushion Cut","Lab Certified","Natural","Origin: Africa"] },

  // ── OPAL ──
  { id:20,name:"Natural Australian Opal",category:"Opal",price:75000,mrp:90000,carat:"3.40",origin:"Australia",cut:"Cabochon",color:"Vivid Play-of-Color",clarity:"Translucent",cert:"GIA",treatment:"Natural",image:"images/opal.png",gallery:["images/opal.png"],rating:4.9,reviews:7,badge:"Rare",desc:"Certified natural Australian white opal with vibrant play-of-color",details:["3.40 Carat","Oval Cabochon","Luxury Play-of-Color","GIA Certified","Origin: Australia"] },
  { id:21,name:"White Ethiopian Opal",category:"Opal",price:15000,mrp:18000,carat:"5.60",origin:"Ethiopia",cut:"Cabochon",color:"Rainbow Flashes",clarity:"Translucent",cert:"Lab Cert",treatment:"Natural",image:"images/opal.png",gallery:["images/opal.png"],rating:4.2,reviews:10,desc:"Natural Ethiopian opal showing stellar rainbow flashes",details:["5.60 Carat","Round Cabochon","Vivid Multi-Color Flashes","Lab Certified","Origin: Ethiopia"] },
  { id:22,name:"Fire Opal Cabochon",category:"Opal",price:85000,mrp:95000,carat:"1.01",origin:"Mexico",cut:"Faceted",color:"Sunset Orange",clarity:"IF",cert:"GIA",treatment:"Natural",image:"images/opal.png",gallery:["images/opal.png"],rating:5.0,reviews:3,badge:"Investment",desc:"Rare unheated Mexican fire opal with intense sunset orange brilliance",details:["1.01 Carat","Oval Faceted","Vibrant Orange Body Color","GIA Certified","Origin: Mexico"] },
  { id:23,name:"Natural Black Opal",category:"Opal",price:185000,mrp:210000,carat:"0.52",origin:"Australia",cut:"Cabochon",color:"Red-Green Play-of-Color",clarity:"Translucent",cert:"GIA",treatment:"Natural",image:"images/opal.png",gallery:["images/opal.png"],rating:4.9,reviews:12,desc:"Investment grade Australian black opal with intense red and green play-of-color",details:["0.52 Carat","Oval Cabochon","Exceptional Dark body tone","GIA Certified","Origin: Lightning Ridge, Australia"] },
  { id:24,name:"Premium Pink Opal",category:"Opal",price:32000,mrp:38000,carat:"0.75",origin:"Peru",cut:"Cabochon",color:"Pastel Pink",clarity:"Opaque",cert:"GIA",treatment:"Natural",image:"images/opal.png",gallery:["images/opal.png"],rating:4.8,reviews:5,badge:"Rare",desc:"Natural Peruvian pink opal cabochon, perfect for astrological healing and rings",details:["0.75 Carat","Cushion Cabochon","Lovely Pastel Pink Color","Lab Certified","Origin: Peru"] },

  // ── RINGS ──
  { id:25,name:"Blue Sapphire Gold Ring",category:"Rings",price:145000,mrp:175000,carat:"2.50",origin:"Sri Lanka",cut:"Oval",color:"Royal Blue",clarity:"Eye Clean",cert:"Hallmark",treatment:"Set in 22K Gold",image:"images/ring.png",gallery:["images/ring.png"],rating:4.8,reviews:21,badge:"Bestseller",desc:"Handcrafted 22K gold ring with certified blue sapphire",details:["22K Yellow Gold","2.50ct Ceylon Sapphire","Hallmarked BIS","Ring Size: Adjustable","Free Ring Box"] },
  { id:26,name:"Ruby Diamond Ring",category:"Rings",price:225000,mrp:265000,carat:"1.80",origin:"Myanmar",cut:"Oval",color:"Pigeon Blood",clarity:"Eye Clean",cert:"Hallmark",treatment:"Set in 18K Gold",image:"https://images.unsplash.com/photo-1605100804763-247f6612d543?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1605100804763-247f6612d543?q=80&w=600&auto=format&fit=crop"],rating:4.9,reviews:14,desc:"Stunning Burmese ruby with diamond halo in 18K gold",details:["18K White Gold","1.80ct Burma Ruby","0.45ct Diamond Halo","Hallmarked","Certificate Included"] },
  { id:27,name:"Emerald Panchdhatu Ring",category:"Rings",price:32000,mrp:40000,carat:"4.25",origin:"Zambia",cut:"Oval",color:"Green",clarity:"Included",cert:"Lab Cert",treatment:"Panchdhatu Setting",image:"images/ring.png",gallery:["images/ring.png"],rating:4.4,reviews:18,desc:"Astrological panna ring in five-metal panchdhatu",details:["Panchdhatu Metal","4.25ct Emerald","Astrological Setting","Lab Certified Gem","Adjustable Size"] },
  { id:28,name:"Yellow Sapphire Ring",category:"Rings",price:78000,mrp:92000,carat:"3.80",origin:"Sri Lanka",cut:"Oval",color:"Golden Yellow",clarity:"VVS",cert:"Hallmark",treatment:"Set in 22K Gold",image:"https://images.unsplash.com/photo-1543294001-f7cbfe92237e?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1543294001-f7cbfe92237e?q=80&w=600&auto=format&fit=crop"],rating:4.7,reviews:29,badge:"Popular",desc:"Premium pukhraj ring in 22K hallmarked gold",details:["22K Yellow Gold","3.80ct Yellow Sapphire","Hallmarked BIS","Free Sizing","With Certificate"] },
];

// Category images map for gem circles
const categoryImages = {
  "Yellow Sapphire": "images/yellow_sapphire.png",
  "Blue Sapphire": "images/blue_sapphire.png",
  "Emerald": "images/emerald.png",
  "Ruby": "images/ruby.png",
  "Opal": "images/opal.png",
  "Pearl": "images/pearl.png",
  "Red Coral": "images/coral.png",
  "Hessonite": "images/hessonite.png",
  "Rings": "images/ring.png"
};

const allCategories = ["Yellow Sapphire","Blue Sapphire","Emerald","Ruby","Opal","Pearl","Red Coral","Hessonite","Rings"];
const gemCategories = ["Yellow Sapphire","Blue Sapphire","Emerald","Ruby","Opal","Pearl","Red Coral","Hessonite"];
const jewelryCategories = ["Rings"];

// ─── STATE MANAGEMENT ───
let cart = JSON.parse(localStorage.getItem('vk_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('vk_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('vk_user')) || null;
let orders = JSON.parse(localStorage.getItem('vk_orders')) || [];
let recentlyViewed = JSON.parse(localStorage.getItem('vk_recent')) || [];
let appliedPromo = parseFloat(localStorage.getItem('vk_promo')) || 0;

// ─── HELPERS ───
function formatPrice(p) {
  return '₹' + p.toLocaleString('en-IN');
}

function getProduct(id) {
  return products.find(p => p.id === parseInt(id));
}

function getDiscount(product) {
  if (!product.mrp || product.mrp <= product.price) return 0;
  return Math.round(((product.mrp - product.price) / product.mrp) * 100);
}

function generateStars(rating) {
  let html = '';
  for (let i = 0; i < 5; i++) {
    html += `<i class="fas fa-star ${i < Math.floor(rating) ? '' : 'empty'}"></i>`;
  }
  return html;
}

function saveState() {
  localStorage.setItem('vk_cart', JSON.stringify(cart));
  localStorage.setItem('vk_wishlist', JSON.stringify(wishlist));
  localStorage.setItem('vk_user', JSON.stringify(currentUser));
  localStorage.setItem('vk_orders', JSON.stringify(orders));
  localStorage.setItem('vk_recent', JSON.stringify(recentlyViewed));
  localStorage.setItem('vk_promo', appliedPromo.toString());
}

function addToRecentlyViewed(id) {
  recentlyViewed = recentlyViewed.filter(r => r !== id);
  recentlyViewed.unshift(id);
  if (recentlyViewed.length > 10) recentlyViewed = recentlyViewed.slice(0, 10);
  saveState();
}

// ─── CART OPERATIONS ───
function getOptionSummary(options) {
  if (!options) return '';
  let parts = [];
  if (options.wearType) {
    if (options.wearType === 'Loose') {
      parts.push('Loose Gemstone');
    } else if (options.wearType === 'Ring') {
      parts.push(`Mounted in Ring (${options.metal || ''})`);
      if (options.size) parts.push(`Size: ${options.size}`);
    } else if (options.wearType === 'Pendant') {
      parts.push(`Mounted in Pendant (${options.metal || ''})`);
    }
  } else if (options.size) {
    parts.push(`Size: ${options.size}`);
  }
  return parts.join(' • ');
}

function addToCart(id, qty = 1, options = null) {
  const product = getProduct(id);
  if (!product) return;
  const existing = cart.find(c => c.id === id && JSON.stringify(c.options) === JSON.stringify(options));
  if (existing) { existing.qty += qty; }
  else { cart.push({ id: id, qty: qty, options: options }); }
  saveState();
  updateCartUI();
  showToast(product.name + ' added to bag', 'success');
}

function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
  }
  saveState();
  updateCartUI();
}

function updateCartQty(index, delta) {
  if (index < 0 || index >= cart.length) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) { cart.splice(index, 1); }
  saveState();
  updateCartUI();
}

function getCartCount() {
  return cart.reduce((s, c) => s + c.qty, 0);
}

function getCartSubtotal() {
  return cart.reduce((s, c) => {
    const p = getProduct(c.id);
    if (!p) return s;
    const price = c.options && c.options.price ? c.options.price : p.price;
    return s + (price * c.qty);
  }, 0);
}

function getCartTotal() {
  const sub = getCartSubtotal();
  const discount = sub * appliedPromo;
  return sub - discount;
}

function applyPromoCode(code) {
  const c = code.trim().toUpperCase();
  if (c === 'VK20') { appliedPromo = 0.20; saveState(); showToast('20% discount applied!', 'success'); return true; }
  if (c === 'VK10') { appliedPromo = 0.10; saveState(); showToast('10% discount applied!', 'success'); return true; }
  if (c === 'GEMS15') { appliedPromo = 0.15; saveState(); showToast('15% discount applied!', 'success'); return true; }
  appliedPromo = 0; saveState();
  showToast('Invalid promo code', 'error');
  return false;
}

// ─── WISHLIST OPERATIONS ───
function toggleWishlistItem(id, event) {
  if (event) event.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx > -1) { wishlist.splice(idx, 1); showToast('Removed from wishlist'); }
  else { wishlist.push(id); showToast('Added to wishlist', 'success'); }
  saveState();
  updateWishlistUI();
}

function isInWishlist(id) { return wishlist.includes(id); }
function isInCart(id) { return cart.some(c => c.id === id); }
function getCartItemQty(id) { const c = cart.find(c => c.id === id); return c ? c.qty : 0; }

// ─── AUTH ───
let tempPhone = '';

function isLoggedIn() { return currentUser !== null; }

function login(phone) {
  currentUser = { phone: '+91 ' + phone, name: '', email: '' };
  saveState();
  updateAuthUI();
  showToast('Welcome! You are now signed in.', 'success');
}

function logout() {
  currentUser = null;
  localStorage.removeItem('vk_user');
  updateAuthUI();
  showToast('Signed out successfully');
}

// ─── ORDERS ───
function placeOrder(addressData) {
  const orderId = 'VK' + Math.floor(100000 + Math.random() * 900000);
  const subtotal = getCartSubtotal();
  const discount = subtotal * appliedPromo;
  const shipping = subtotal >= 50000 ? 0 : 500;
  const gst = Math.round(subtotal * 0.03);
  const total = (subtotal - discount) + shipping + gst;

  const order = {
    id: orderId,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    items: cart.map(c => ({ ...c, product: getProduct(c.id) })),
    subtotal: subtotal,
    discount: discount,
    shipping: shipping,
    gst: gst,
    total: total,
    address: addressData || {},
    status: 'Processing',
    statusIcon: 'fas fa-cog fa-spin'
  };
  orders.unshift(order);
  cart = [];
  appliedPromo = 0;
  saveState();
  updateCartUI();
  return order;
}

// ─── SEARCH ───
function searchProducts(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    (p.origin && p.origin.toLowerCase().includes(q))
  );
}

// ─── TOAST NOTIFICATIONS ───
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? '<i class="fas fa-check-circle" style="color:var(--color-gold)"></i>' :
               type === 'error' ? '<i class="fas fa-exclamation-circle"></i>' :
               '<i class="fas fa-info-circle" style="color:var(--color-gold)"></i>';
  toast.innerHTML = icon + ' ' + msg;
  container.appendChild(toast);
  requestAnimationFrame(() => { requestAnimationFrame(() => { toast.classList.add('show'); }); });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

// ─── PRODUCT CARD GENERATOR ───
function renderProductCard(product) {
  const discount = getDiscount(product);
  const inWish = isInWishlist(product.id);
  const qty = getCartItemQty(product.id);
  const stars = generateStars(product.rating);

  return `
    <div class="product-card reveal" data-id="${product.id}">
      <div class="product-card-image" onclick="goToProduct(${product.id})">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
        ${qty > 0 ? `<span class="product-card-badge" style="background:var(--color-gold)">In Bag (${qty})</span>` : ''}
        <button class="product-card-wishlist ${inWish ? 'active' : ''}" onclick="toggleWishlistItem(${product.id}, event); renderPageProducts && renderPageProducts();">
          <i class="${inWish ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <button class="product-card-quick-add" onclick="event.stopPropagation(); addToCart(${product.id}); if(typeof renderPageProducts==='function') renderPageProducts();">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="product-card-info" onclick="goToProduct(${product.id})">
        <div class="product-card-rating">${stars}<span>(${product.reviews})</span></div>
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-desc">${product.desc}</p>
        <p class="product-card-price">
          ${formatPrice(product.price)}
          ${discount > 0 ? `<span class="original">${formatPrice(product.mrp)}</span><span class="discount">${discount}% off</span>` : ''}
        </p>
      </div>
    </div>
  `;
}

function goToProduct(id) {
  window.location.href = 'product.html?id=' + id;
}

// ─── DYNAMIC HEADER ───
function injectHeader() {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const cartCount = getCartCount();
  const wishCount = wishlist.length;

  const headerHTML = `
  <header class="main-header" id="main-header">
    <div class="container">
      <div class="header-inner">
        <!-- Left Action: Hamburger on Home, Back Button on Subpages -->
        ${currentPage === 'index' || currentPage === '' 
          ? `<button class="hamburger" id="hamburger-btn" onclick="toggleMobileMenu()" aria-label="Menu">
               <span></span><span></span><span></span>
             </button>`
          : `<button class="header-back-btn" onclick="goBackOrHome()" aria-label="Back">
               <i class="fas fa-chevron-left"></i>
             </button>`
        }

        <!-- Center: Medallion Logo on Home, Elegant Page Title on Subpages -->
        ${currentPage === 'index' || currentPage === ''
          ? `<a href="index.html" class="logo-link">
               <img src="images/logo.jpeg" alt="VijayKumar Diamonds & Gems" onerror="this.onerror=null;this.alt='VK Diamonds & Gems';this.style.fontSize='0.7rem';this.style.fontFamily='Playfair Display';this.style.fontWeight='700';this.style.color='#D4AF37';">
             </a>`
          : `<div class="subpage-header-title">${getPageTitle(currentPage)}</div>`
        }

        <!-- Desktop Nav -->
        <nav class="desktop-nav">
          <div class="nav-item">
            <a href="shop.html" class="nav-link ${currentPage==='shop'?'active':''}">Gemstones</a>
            <div class="nav-dropdown">
              ${gemCategories.map(c => `<a href="shop.html?cat=${encodeURIComponent(c)}"><img src="${categoryImages[c]}" alt="${c}"> ${c}</a>`).join('')}
            </div>
          </div>
          <a href="shop.html?cat=Rings" class="nav-link">Rings</a>
          <a href="about.html" class="nav-link ${currentPage==='about'?'active':''}">About</a>
          <a href="contact.html" class="nav-link ${currentPage==='contact'?'active':''}">Contact</a>
        </nav>

        <!-- Icons -->
        <div class="header-icons">
          <button class="icon-btn" onclick="toggleSearch()" aria-label="Search" style="display:none" id="desktop-search-btn"><i class="fas fa-search"></i></button>
          <button class="icon-btn desktop-only" onclick="toggleSearch()" aria-label="Search"><i class="fas fa-search"></i></button>
          <button class="icon-btn desktop-only" onclick="handleUserClick()" aria-label="Account"><i class="far fa-user"></i></button>
          <button class="icon-btn desktop-only" onclick="toggleWishlistSidebar()" aria-label="Wishlist">
            <i class="far fa-heart"></i>
            <span class="icon-badge ${wishCount > 0 ? 'visible' : ''}" id="wish-badge">${wishCount}</span>
          </button>
          <button class="icon-btn" onclick="toggleCartSidebar()" aria-label="Cart">
            <i class="fas fa-shopping-bag"></i>
            <span class="icon-badge ${cartCount > 0 ? 'visible' : ''}" id="cart-badge">${cartCount}</span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div class="mobile-menu-overlay" id="mobile-overlay" onclick="toggleMobileMenu()"></div>
  <div class="mobile-menu" id="mobile-menu">
    <div class="mobile-menu-header">
      <img src="images/logo.jpeg" alt="VK" onerror="this.alt='VK';">
      <button onclick="toggleMobileMenu()" style="font-size:1.3rem;color:var(--color-dark)"><i class="fas fa-times"></i></button>
    </div>
    <div class="mobile-nav-links">
      <a href="index.html" class="mobile-nav-link"><span>Home</span><i class="fas fa-chevron-right"></i></a>
      <a href="shop.html?type=gems" class="mobile-nav-link"><span>Gemstones</span><i class="fas fa-chevron-right"></i></a>
      <a href="shop.html?cat=Rings" class="mobile-nav-link"><span>Rings</span><i class="fas fa-chevron-right"></i></a>
      <a href="about.html" class="mobile-nav-link"><span>About Us</span><i class="fas fa-chevron-right"></i></a>
      <a href="contact.html" class="mobile-nav-link"><span>Contact</span><i class="fas fa-chevron-right"></i></a>
    </div>
    <div class="mobile-menu-footer">
      <button onclick="toggleMobileMenu(); handleUserClick();" class="btn btn-primary btn-full">
        <i class="far fa-user"></i> <span id="mobile-auth-text">${isLoggedIn() ? 'My Account' : 'Sign In / Register'}</span>
      </button>
    </div>
  </div>

  <!-- Search Overlay -->
  <div class="search-overlay" id="search-overlay">
    <button class="search-close" onclick="toggleSearch()"><i class="fas fa-times"></i></button>
    <div style="max-width:700px;margin:0 auto;width:100%">
      <div class="search-input-wrap">
        <i class="fas fa-search"></i>
        <input type="text" class="search-input" id="search-input" placeholder="Search gemstones, rings..." oninput="handleSearch(this.value)">
      </div>
      <div id="search-results" style="overflow-y:auto;max-height:60vh"></div>
    </div>
  </div>

  <!-- Sidebar Overlay -->
  <div class="sidebar-overlay" id="sidebar-overlay" onclick="closeAllSidebars()"></div>

  <!-- Cart Sidebar -->
  <div class="sidebar" id="cart-sidebar">
    <div class="sidebar-header">
      <h2>Shopping Bag (<span id="cart-sidebar-count">${cartCount}</span>)</h2>
      <button class="sidebar-close" onclick="toggleCartSidebar()"><i class="fas fa-times"></i></button>
    </div>
    <div class="sidebar-body hide-scrollbar" id="cart-sidebar-body"></div>
    <div class="sidebar-footer" id="cart-sidebar-footer"></div>
  </div>

  <!-- Wishlist Sidebar -->
  <div class="sidebar" id="wishlist-sidebar">
    <div class="sidebar-header">
      <h2><i class="far fa-heart" style="color:var(--color-red);margin-right:0.5rem"></i>Wishlist</h2>
      <button class="sidebar-close" onclick="toggleWishlistSidebar()"><i class="fas fa-times"></i></button>
    </div>
    <div class="sidebar-body hide-scrollbar" id="wishlist-sidebar-body"></div>
  </div>

  <!-- Toast Container -->
  <div class="toast-container" id="toast-container"></div>

  <!-- Mobile Bottom Nav -->
  <nav class="mobile-bottom-nav" id="mobile-bottom-nav">
    <a href="index.html" class="bottom-nav-item ${currentPage==='index'?'active':''}"><i class="fas fa-home"></i><span>Home</span></a>
    <a href="shop.html" class="bottom-nav-item ${currentPage==='shop'?'active':''}"><i class="fas fa-gem"></i><span>Shop</span></a>
    <button class="bottom-nav-item" onclick="toggleWishlistSidebar()">
      <i class="far fa-heart"></i><span>Wishlist</span>
      <span class="bottom-nav-badge ${wishCount > 0 ? 'visible' : ''}" id="bottom-wish-badge">${wishCount}</span>
    </button>
    <button class="bottom-nav-item" onclick="handleUserClick()"><i class="far fa-user"></i><span>Account</span></button>
  </nav>
  `;

  // Add desktop-only class styles
  const style = document.createElement('style');
  style.textContent = `.desktop-only { display: none !important; } @media (min-width: 640px) { .desktop-only { display: flex !important; } }`;
  document.head.appendChild(style);

  const headerContainer = document.getElementById('header-root');
  if (headerContainer) headerContainer.innerHTML = headerHTML;
}

// ─── DYNAMIC FOOTER ───
function injectFooter() {
  const footerHTML = `
  <footer class="main-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="images/logo.jpeg" alt="VijayKumar Diamonds & Gems" onerror="this.alt='VK Diamonds';">
          <p>Curators of certified natural gemstones and fine rings since generations. Every gem tells a story of trust, tradition, and timeless beauty.</p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Gemstones</h4>
          <ul>
            ${gemCategories.map(c => `<li><a href="shop.html?cat=${encodeURIComponent(c)}">${c}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Rings</h4>
          <ul>
            <li><a href="shop.html?cat=Rings">All Rings</a></li>
            <li style="margin-top:1rem"><a href="about.html"><strong>About Us</strong></a></li>
            <li><a href="contact.html"><strong>Contact</strong></a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Concierge</h4>
          <ul>
            <li style="color:var(--color-gray-400);font-size:0.7rem;margin-bottom:0.75rem">Available Mon—Sun, 9AM — 10PM</li>
            <li><a href="tel:+919092716427" style="font-family:var(--font-serif);font-size:1rem;color:var(--color-gold)">+91 90927 16427</a></li>
            <li><a href="mailto:info@vijaykumardiamonds.com">info@vijaykumardiamonds.com</a></li>
            <li style="margin-top:1rem"><a href="#" onclick="handleUserClick();return false;">My Account</a></li>
            <li><a href="cart.html">Shopping Bag</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom-bar">
        <p>&copy; ${new Date().getFullYear()} VijayKumar Diamonds & Gems. All Rights Reserved.</p>
        <p>Real Gems. Real Value. ✦ Crafted with Perfection.</p>
      </div>
    </div>
  </footer>
  `;

  const footerContainer = document.getElementById('footer-root');
  if (footerContainer) footerContainer.innerHTML = footerHTML;
}

// ─── UI UPDATES ───
function updateCartUI() {
  const count = getCartCount();
  const subtotal = getCartSubtotal();
  const discountAmt = subtotal * appliedPromo;
  const total = getCartTotal();

  // Floating Cart Bar (Zepto Style)
  let zeptoBar = document.getElementById('zepto-cart-bar');
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const isCartOrCheckoutPage = currentPage === 'cart' || currentPage === 'checkout';

  if (count > 0 && !isCartOrCheckoutPage) {
    if (!zeptoBar) {
      zeptoBar = document.createElement('div');
      zeptoBar.id = 'zepto-cart-bar';
      zeptoBar.className = 'zepto-cart-bar';
      zeptoBar.onclick = function() {
        toggleCartSidebar();
      };
      document.body.appendChild(zeptoBar);
    }
    
    zeptoBar.innerHTML = `
      <div class="zepto-cart-bar-left">
        <div class="zepto-cart-bar-icon-wrap">
          <i class="fas fa-shopping-bag"></i>
          <span class="zepto-cart-bar-badge">${count}</span>
        </div>
        <div class="zepto-cart-bar-info">
          <span class="zepto-cart-bar-count">${count} ${count === 1 ? 'Item' : 'Items'}</span>
          <span class="zepto-cart-bar-total">${formatPrice(total)}</span>
        </div>
      </div>
      <div class="zepto-cart-bar-right">
        View Bag <i class="fas fa-arrow-right"></i>
      </div>
    `;

    zeptoBar.classList.add('visible');
    
    // Trigger pulse/shake animation
    zeptoBar.classList.remove('zepto-pulse-anim');
    void zeptoBar.offsetWidth; // trigger reflow
    zeptoBar.classList.add('zepto-pulse-anim');
  } else {
    if (zeptoBar) {
      zeptoBar.classList.remove('visible');
      setTimeout(() => {
        if (!zeptoBar.classList.contains('visible') && zeptoBar.parentNode) {
          zeptoBar.remove();
        }
      }, 400);
    }
  }

  // Badges
  document.querySelectorAll('#cart-badge, [id$="-cart-badge"]').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
  const sidebarCount = document.getElementById('cart-sidebar-count');
  if (sidebarCount) sidebarCount.textContent = count;

  // Sidebar Body
  const body = document.getElementById('cart-sidebar-body');
  if (body) {
    if (cart.length === 0) {
      body.innerHTML = `<div style="text-align:center;padding:4rem 1rem;color:var(--color-gray-400)">
        <i class="fas fa-shopping-bag" style="font-size:2rem;opacity:0.4;margin-bottom:1rem;display:block"></i>
        <p style="font-size:0.65rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase">Your bag is empty</p>
        <a href="shop.html" class="btn btn-outline" style="margin-top:1.5rem;font-size:0.6rem">Explore Shop</a>
      </div>`;
    } else {
      body.innerHTML = cart.map((c, index) => {
        const p = getProduct(c.id);
        if (!p) return '';
        const price = c.options && c.options.price ? c.options.price : p.price;
        const optionsSummary = getOptionSummary(c.options);
        return `<div class="cart-item">
          <div class="cart-item-img"><a href="product.html?id=${p.id}"><img src="${p.image}" alt="${p.name}"></a></div>
          <div class="cart-item-info">
            <div class="cart-item-name">${p.name}</div>
            ${optionsSummary ? `<div style="font-size:0.6rem;color:var(--color-gold-dark);margin:0.15rem 0;line-height:1.2;">${optionsSummary}</div>` : ''}
            <div class="cart-item-price">${formatPrice(price)}</div>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateCartQty(${index},-1)"><i class="fas fa-minus"></i></button>
              <span class="qty-value">${c.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${index},1)"><i class="fas fa-plus"></i></button>
            </div>
          </div>
        </div>`;
      }).join('');
    }
  }

  // Sidebar Footer
  const footer = document.getElementById('cart-sidebar-footer');
  if (footer && cart.length > 0) {
    footer.innerHTML = `
      <div style="display:flex;gap:0.5rem;margin-bottom:0.75rem">
        <input type="text" id="promo-sidebar" placeholder="Promo Code (VK20)" class="form-input" style="flex:1;font-size:0.7rem;text-transform:uppercase;font-weight:700;letter-spacing:0.1em;padding:0.5rem 0.75rem">
        <button onclick="applyPromoCode(document.getElementById('promo-sidebar').value); updateCartUI();" class="btn btn-outline btn-sm" style="white-space:nowrap">Apply</button>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:0.35rem">
        <span style="font-size:0.6rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-gray-500)">Subtotal</span>
        <span style="font-family:var(--font-serif);font-size:1rem">${formatPrice(subtotal)}</span>
      </div>
      ${appliedPromo > 0 ? `<div style="display:flex;justify-content:space-between;margin-bottom:0.35rem;color:var(--color-green)">
        <span style="font-size:0.6rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase">Discount</span>
        <span style="font-family:var(--font-serif)">-${formatPrice(discountAmt)}</span>
      </div>` : ''}
      <div style="display:flex;justify-content:space-between;border-top:1px dashed var(--color-gray-200);padding-top:0.5rem;margin-top:0.35rem;margin-bottom:0.75rem">
        <span style="font-size:0.65rem;font-weight:800;letter-spacing:0.15em;text-transform:uppercase">Total</span>
        <span style="font-family:var(--font-serif);font-size:1.25rem;font-weight:700">${formatPrice(total)}</span>
      </div>
      <a href="checkout.html" class="btn btn-primary btn-full" style="font-size:0.65rem;letter-spacing:0.2em">Proceed to Checkout</a>
      <a href="cart.html" style="display:block;text-align:center;margin-top:0.75rem;font-size:0.6rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-gray-500)">View Full Cart</a>
    `;
  } else if (footer) {
    footer.innerHTML = '';
  }
}

function updateWishlistUI() {
  const count = wishlist.length;
  document.querySelectorAll('#wish-badge, #bottom-wish-badge').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });

  const body = document.getElementById('wishlist-sidebar-body');
  if (body) {
    if (count === 0) {
      body.innerHTML = `<div style="text-align:center;padding:4rem 1rem;color:var(--color-gray-400)">
        <i class="far fa-heart" style="font-size:2rem;opacity:0.4;margin-bottom:1rem;display:block"></i>
        <p style="font-size:0.65rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase">Your wishlist is empty</p>
      </div>`;
    } else {
      body.innerHTML = wishlist.map(id => {
        const p = getProduct(id);
        if (!p) return '';
        return `<div class="cart-item">
          <div class="cart-item-img"><a href="product.html?id=${p.id}"><img src="${p.image}" alt="${p.name}"></a></div>
          <div class="cart-item-info">
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${formatPrice(p.price)}</div>
            <div style="display:flex;gap:0.5rem;margin-top:0.25rem">
              <button onclick="addToCart(${p.id});toggleWishlistItem(${p.id});updateWishlistUI();" class="btn btn-primary btn-sm" style="font-size:0.55rem;padding:0.35rem 0.75rem">Move to Bag</button>
              <button onclick="toggleWishlistItem(${p.id});updateWishlistUI();" class="btn btn-sm" style="font-size:0.55rem;padding:0.35rem 0.75rem;color:var(--color-red);border:1px solid var(--color-gray-200)">Remove</button>
            </div>
          </div>
        </div>`;
      }).join('');
    }
  }
}

function updateAuthUI() {
  const mobText = document.getElementById('mobile-auth-text');
  if (mobText) mobText.textContent = isLoggedIn() ? 'My Account' : 'Sign In / Register';
}

// ─── SIDEBAR TOGGLES ───
function toggleCartSidebar() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const isOpen = sidebar && sidebar.classList.contains('open');
  closeAllSidebars();
  if (!isOpen && sidebar) {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function toggleWishlistSidebar() {
  const sidebar = document.getElementById('wishlist-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const isOpen = sidebar && sidebar.classList.contains('open');
  closeAllSidebars();
  if (!isOpen && sidebar) {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllSidebars() {
  document.querySelectorAll('.sidebar').forEach(s => s.classList.remove('open'));
  const overlay = document.getElementById('sidebar-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── MOBILE MENU ───
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  if (menu && overlay) {
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  }
}

// ─── SEARCH ───
function toggleSearch() {
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  const isOpen = overlay.classList.contains('open');
  if (isOpen) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const input = document.getElementById('search-input');
      if (input) input.focus();
    }, 300);
  }
}

function handleSearch(query) {
  const container = document.getElementById('search-results');
  if (!container) return;
  const results = searchProducts(query);
  if (results.length === 0 && query.length >= 2) {
    container.innerHTML = '<p style="text-align:center;color:var(--color-gray-400);padding:2rem;font-size:0.8rem">No results found</p>';
    return;
  }
  if (query.length < 2) { container.innerHTML = ''; return; }
  container.innerHTML = `<div class="product-grid" style="gap:0.75rem">${results.map(p => `
    <a href="product.html?id=${p.id}" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;border-radius:var(--radius-md);transition:background 0.2s;border:1px solid var(--color-gray-100)" onmouseover="this.style.background='var(--color-ivory)'" onmouseout="this.style.background=''">
      <img src="${p.image}" style="width:50px;height:60px;object-fit:cover;border-radius:var(--radius-sm)">
      <div>
        <div style="font-family:var(--font-serif);font-size:0.8rem;font-weight:600;color:var(--color-dark)">${p.name}</div>
        <div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-gray-500)">${p.category}</div>
        <div style="font-size:0.75rem;font-weight:700;color:var(--color-gold-dark);margin-top:0.2rem">${formatPrice(p.price)}</div>
      </div>
    </a>
  `).join('')}</div>`;
}

// ─── AUTH CLICK HANDLER ───
function handleUserClick() {
  if (isLoggedIn()) {
    window.location.href = 'account.html';
  } else {
    window.location.href = 'account.html';
  }
}

// ─── SCROLL ANIMATIONS ───
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right, .stagger-children').forEach(el => {
    observer.observe(el);
  });
}

// ─── HEADER SCROLL EFFECT ───
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 20) { header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
    lastScroll = scrollY;
  }, { passive: true });
}

// ─── PAGE LOADER ───
function hideLoader() {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => { loader.style.display = 'none'; }, 800);
    }, 800);
  }
}

// ─── INITIALIZATION ───
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  updateCartUI();
  updateWishlistUI();
  updateAuthUI();
  injectChatbot();
  hideLoader();
  setTimeout(initScrollAnimations, 200);
  initHeaderScroll();
});

// Re-init scroll animations whenever called (for dynamic content)
function refreshAnimations() {
  setTimeout(initScrollAnimations, 100);
}

// ─── SLIDER SCROLL NAVIGATION ───
function scrollSlider(containerId, direction) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const firstChild = container.querySelector('.featured-product-wrapper');
  const scrollAmount = firstChild ? firstChild.offsetWidth + 20 : container.offsetWidth * 0.75;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// ─── UTILITIES FOR SUBPAGES ───
function goBackOrHome() {
  if (document.referrer && document.referrer.includes(window.location.hostname)) {
    window.history.back();
  } else {
    window.location.href = 'index.html';
  }
}

function getPageTitle(page) {
  switch(page) {
    case 'shop': return 'Collection';
    case 'about': return 'Our Story';
    case 'contact': return 'Contact';
    case 'cart': return 'Shopping Bag';
    case 'checkout': return 'Checkout';
    case 'account': return 'My Account';
    case 'product': return 'Product Details';
    default: return 'VijayKumar';
  }
}

// ─── CHATBOT CONCIERGE ENGINE ───
const chatbotKnowledge = {
  storeName: "VijayKumar Diamonds & Gems",
  address: "Venkatakrishna Street, Opposite Shanmuga Nursing Home, RS Puram, Coimbatore — 641002, Tamil Nadu, India",
  phone: "+91 90927 16427",
  email: "info@vijaykumardiamonds.com",
  hours: "Monday – Sunday: 9:00 AM — 10:00 PM (Open 7 days)",
  astrology: "We offer Free Astrological Consultations with our certified Vedic astrologers to help you find the perfect planetary gemstone (Navaratna) based on your birth chart. You can book a consultation on our Contact page or call us directly.",
  certifications: "All our gemstones and diamonds are 100% natural and earth-mined. They come with certificates from leading laboratories such as GIA (Gemological Institute of America), GRS (GemResearch Swisslab), and IGI (International Gemological Institute).",
  shipping: "We offer free, fully insured shipping across India. Delivery usually takes 3 to 5 business days. International shipping is also available upon request.",
  returns: "We offer a 10-day, no-questions-asked return policy for all standard items in original, unworn condition with tags and certificates intact.",
  payment: "We accept credit/debit cards, net banking, UPI (Google Pay, PhonePe, Paytm), and Bank Transfers. Cash on Delivery (COD) is available for select pincodes.",
  origin: "We source our gemstones directly from conflict-free mines in Ceylon (Sri Lanka), Burma (Myanmar), Zambia, Colombia, and Madagascar to ensure the finest quality."
};

function injectChatbot() {
  // Prevent duplicate insertion
  if (document.getElementById('vk-chatbot-root')) return;

  const root = document.createElement('div');
  root.id = 'vk-chatbot-root';
  root.innerHTML = `
    <!-- Chat Bubble -->
    <button class="vk-chat-bubble" id="vk-chat-bubble" onclick="toggleChatbot()" aria-label="Open chat concierge">
      <i class="fas fa-comment-dots"></i>
      <span class="vk-chat-badge" id="vk-chat-badge">1</span>
    </button>

    <!-- Chat Window -->
    <div class="vk-chat-window" id="vk-chat-window">
      <div class="vk-chat-header">
        <div class="vk-chat-header-info">
          <div class="vk-chat-avatar">💎</div>
          <div>
            <h4>VK Concierge</h4>
            <span>Vedic Astrology & Gem Assistant</span>
          </div>
        </div>
        <button class="vk-chat-close" onclick="toggleChatbot()" aria-label="Close chat"><i class="fas fa-times"></i></button>
      </div>
      <div class="vk-chat-body" id="vk-chat-body">
        <div class="vk-chat-msg system">
          <div class="vk-chat-msg-bubble">
            Namaste! I am your VijayKumar Diamonds virtual concierge. How can I assist you with our certified gemstones, fine jewelry, Vedic astrology consultations, or shipping today?
          </div>
        </div>
      </div>
      <div class="vk-chat-chips">
        <button onclick="sendQuickReply('Free Astrology Consultation')">Astrology Consultation</button>
        <button onclick="sendQuickReply('Do you have Ceylon Blue Sapphire?')">Blue Sapphires</button>
        <button onclick="sendQuickReply('Where is your office located?')">Office Location</button>
        <button onclick="sendQuickReply('What lab certificates do you provide?')">Certifications</button>
      </div>
      <div class="vk-chat-footer">
        <input type="text" id="vk-chat-input" placeholder="Ask about gems, price, astrology..." onkeypress="handleChatPress(event)">
        <button onclick="submitChatMessage()" aria-label="Send message"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  `;
  document.body.appendChild(root);
}

function toggleChatbot() {
  const win = document.getElementById('vk-chat-window');
  const badge = document.getElementById('vk-chat-badge');
  if (win) {
    win.classList.toggle('open');
    if (win.classList.contains('open') && badge) {
      badge.style.display = 'none'; // hide initial badge alert
    }
  }
}

function handleChatPress(e) {
  if (e.key === 'Enter') {
    submitChatMessage();
  }
}

function sendQuickReply(text) {
  const input = document.getElementById('vk-chat-input');
  if (input) {
    input.value = text;
    submitChatMessage();
  }
}

function submitChatMessage() {
  const input = document.getElementById('vk-chat-input');
  const body = document.getElementById('vk-chat-body');
  if (!input || !body) return;

  const text = input.value.trim();
  if (!text) return;

  // Clear input
  input.value = '';

  // Append user message
  const userMsg = document.createElement('div');
  userMsg.className = 'vk-chat-msg user';
  userMsg.innerHTML = `<div class="vk-chat-msg-bubble">${escapeHTML(text)}</div>`;
  body.appendChild(userMsg);
  body.scrollTop = body.scrollHeight;

  // Append typing indicator
  const indicator = document.createElement('div');
  indicator.className = 'vk-chat-msg system typing-wrapper';
  indicator.innerHTML = `
    <div class="vk-chat-msg-bubble" style="padding: 0.35rem 0.65rem;">
      <div class="typing-indicator">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  body.appendChild(indicator);
  body.scrollTop = body.scrollHeight;

  // Generate response after a realistic delay (600ms - 1000ms)
  setTimeout(() => {
    // Remove typing indicator
    const wrappers = body.getElementsByClassName('typing-wrapper');
    if (wrappers.length > 0) {
      wrappers[wrappers.length - 1].remove();
    }

    // Generate response
    const responseText = getChatbotResponse(text);

    // Append system response
    const sysMsg = document.createElement('div');
    sysMsg.className = 'vk-chat-msg system';
    sysMsg.innerHTML = `<div class="vk-chat-msg-bubble">${responseText}</div>`;
    body.appendChild(sysMsg);
    body.scrollTop = body.scrollHeight;
  }, 800);
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

function getChatbotResponse(msg) {
  const rawMsg = msg.toLowerCase().trim();
  const words = rawMsg.replace(/[^\w\s]/g, '').split(/\s+/);
  
  // WhatsApp redirect link utility
  const whatsappUrl = "https://wa.me/919092716427?text=";
  const talkToExpertBtn = `<br><br><a href="${whatsappUrl}${encodeURIComponent("Hi VK Diamonds, I have a question about: " + msg)}" class="btn btn-gold btn-xs" target="_blank" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.6rem;font-size:0.6rem;font-weight:700;letter-spacing:0.05em;cursor:pointer"><i class="fab fa-whatsapp"></i> Talk with Experts</a>`;

  // Location
  if (matches(words, ['address', 'where', 'location', 'coimbatore', 'shop', 'store', 'visit', 'map', 'located', 'place', 'street', 'city', 'office', 'tamil', 'nadu'])) {
    return `Our office is at: <strong>${chatbotKnowledge.address}</strong>.<br>Open daily: 9 AM – 10 PM.`;
  }
  
  // Contact
  if (matches(words, ['phone', 'call', 'mobile', 'contact', 'number', 'email', 'whatsapp', 'support', 'talk', 'agent', 'helpline', 'consultant', 'staff'])) {
    return `Concierge desk: 📞 <strong>${chatbotKnowledge.phone}</strong> | ✉️ <strong>${chatbotKnowledge.email}</strong>.${talkToExpertBtn}`;
  }

  // Hours
  if (matches(words, ['hours', 'time', 'open', 'close', 'sunday', 'saturday', 'when', 'schedule', 'opening', 'weekday', 'weekend'])) {
    return `We are open daily from <strong>9:00 AM to 10:00 PM</strong>, including Sundays.`;
  }

  // Astrology
  if (matches(words, ['astrology', 'astrological', 'chart', 'horoscope', 'consult', 'consultation', 'planet', 'vedic', 'remedy', 'rashi', 'gemologist', 'astro', 'birth', 'benefit', 'benefits'])) {
    return `We offer Free Vedic Astrological consultations to help select your gemstone. Contact our experts to book:<br><br><a href="${whatsappUrl}${encodeURIComponent("Hi, I want a Free Astrological consultation for my birth chart.")}" class="btn btn-gold btn-xs" target="_blank" style="display:inline-flex;align-items:center;gap:0.35rem;cursor:pointer"><i class="fab fa-whatsapp"></i> Book Consult on WhatsApp</a>`;
  }

  // Certifications
  if (matches(words, ['cert', 'certificate', 'certification', 'real', 'fake', 'original', 'natural', 'gia', 'grs', 'igi', 'lab', 'guarantee', 'genuine', 'certified', 'trusted'])) {
    return `All our gemstones are 100% natural and come with lab certificates from GIA, GRS, or IGI.`;
  }

  // Shipping
  if (matches(words, ['ship', 'shipping', 'delivery', 'courier', 'track', 'mumbai', 'delhi', 'chennai', 'send', 'dispatch', 'deliver'])) {
    return `We provide free insured shipping across India. Delivery takes 3 to 5 business days.`;
  }

  // Returns
  if (matches(words, ['return', 'refund', 'exchange', 'policy', 'replace', 'cancel', 'warranty'])) {
    return `We offer a 10-day return policy for items in unworn, original condition with certificates intact.`;
  }

  // Payment
  if (matches(words, ['pay', 'payment', 'upi', 'card', 'cash', 'cod', 'installment', 'gpay', 'phonepe', 'netbank', 'credit'])) {
    return `We accept Credit/Debit Cards, UPI (GPay, PhonePe, Paytm), Net Banking, and Bank Transfer. Cash on Delivery is also available.`;
  }

  // Sourcing & Origins
  if (matches(words, ['origin', 'source', 'mines', 'burma', 'ceylon', 'zambia', 'colombia', 'madagascar', 'conflict-free'])) {
    return `Our gemstones are sourced directly from Ceylon, Burma, Zambia, and Colombia.`;
  }

  // Competitor Comparison
  if (matches(words, ['tanishq', 'bluestone', 'jaipur', 'gems', 'brand', 'brands', 'caratlane'])) {
    return "We offer the same GIA/IGI certified gems and BIS Hallmarked gold settings as Tanishq, Jaipur Gems, and BlueStone, but source directly from mines to offer wholesale pricing.";
  }

  // Greetings
  if (matches(words, ['hi', 'hello', 'hey', 'namaste', 'greetings', 'morning', 'evening'])) {
    return "Namaste! I am your VK virtual concierge. How can I help you find the perfect natural gemstone or jewelry piece today?";
  }
  
  // Specific Category search
  let matchedCategory = null;
  for (const cat of allCategories) {
    if (rawMsg.includes(cat.toLowerCase())) {
      matchedCategory = cat;
      break;
    }
  }
  
  if (rawMsg.includes('gomed') || rawMsg.includes('hessonite')) matchedCategory = 'Hessonite';
  if (rawMsg.includes('lehsunia') || rawMsg.includes("cat's eye") || rawMsg.includes('cats eye')) matchedCategory = "Cat's Eye";
  if (rawMsg.includes('pukhraj') || rawMsg.includes('yellow sapphire')) matchedCategory = 'Yellow Sapphire';
  if (rawMsg.includes('neelam') || rawMsg.includes('blue sapphire')) matchedCategory = 'Blue Sapphire';
  if (rawMsg.includes('panna') || rawMsg.includes('emerald')) matchedCategory = 'Emerald';
  if (rawMsg.includes('moonga') || rawMsg.includes('coral')) matchedCategory = 'Red Coral';
  if (rawMsg.includes('moti') || rawMsg.includes('pearl')) matchedCategory = 'Pearl';
  if (rawMsg.includes('heera') || rawMsg.includes('diamond')) matchedCategory = 'Diamond';
  
  // Specific Product search
  let matchedProduct = null;
  for (const prod of products) {
    if (rawMsg.includes(prod.name.toLowerCase())) {
      matchedProduct = prod;
      break;
    }
  }
  
  if (matchedProduct) {
    const discount = getDiscount(matchedProduct);
    const discText = discount > 0 ? ` (${discount}% OFF)` : '';
    return `
      <strong>${matchedProduct.name}</strong> (${matchedProduct.category})<br>
      ✦ Price: <strong>${formatPrice(matchedProduct.price)}</strong>${discText}<br>
      ✦ Details: ${matchedProduct.carat ? matchedProduct.carat + ' Carat, ' : ''}${matchedProduct.origin ? matchedProduct.origin + ', ' : ''}${matchedProduct.cert ? matchedProduct.cert + ' Cert' : ''}<br><br>
      <button class="btn btn-gold btn-xs" onclick="addToCart(${matchedProduct.id});" style="font-size:0.6rem;padding:0.25rem 0.5rem;cursor:pointer">Add to Bag 💎</button>
      <a href="product.html?id=${matchedProduct.id}" class="btn btn-outline btn-xs" style="font-size:0.6rem;padding:0.25rem 0.5rem;margin-left:0.5rem;display:inline-block">View Page</a>
    `;
  }
  
  if (matchedCategory) {
    const catProds = products.filter(p => p.category === matchedCategory).slice(0, 3);
    const prodList = catProds.map(p => `• <a href="product.html?id=${p.id}" style="color:var(--color-gold-dark);font-weight:600">${p.name}</a> - <strong>${formatPrice(p.price)}</strong>`).join('<br>');
    return `We have natural <strong>${matchedCategory}</strong> gemstones:<br><br>${prodList}<br><br><a href="shop.html?cat=${encodeURIComponent(matchedCategory)}" style="color:var(--color-gold);text-decoration:underline">Browse Category</a>`;
  }
  
  // Price sorting / budget query
  if (matches(words, ['cheap', 'cheapest', 'budget', 'low price', 'affordable', 'under', 'price', 'cost', 'expensive'])) {
    const numbers = rawMsg.match(/\d+/g);
    let limit = 0;
    if (numbers && numbers.length > 0) {
      limit = parseInt(numbers[0]);
    }
    
    let filtered = products;
    if (limit > 0) {
      if (rawMsg.includes('k')) limit *= 1000;
      filtered = products.filter(p => p.price <= limit);
    }
    
    const sorted = [...filtered].sort((a, b) => a.price - b.price).slice(0, 3);
    if (sorted.length > 0) {
      const listText = sorted.map(p => `• <a href="product.html?id=${p.id}" style="color:var(--color-gold-dark)">${p.name}</a> - <strong>${formatPrice(p.price)}</strong>`).join('<br>');
      return `Options ${limit > 0 ? 'under ' + formatPrice(limit) : 'available'}:<br><br>${listText}`;
    }
    return `We couldn't find items in that range. Browse our shop or contact us!${talkToExpertBtn}`;
  }
  
  // Bestsellers / Premium
  if (matches(words, ['bestseller', 'best seller', 'popular', 'premium', 'rare', 'exclusive', 'luxury', 'investment'])) {
    const filtered = products.filter(p => p.badge === 'Bestseller' || p.badge === 'Premium' || p.badge === 'Rare' || p.badge === 'Investment').slice(0, 3);
    const listText = filtered.map(p => `• <a href="product.html?id=${p.id}" style="color:var(--color-gold-dark)">${p.name}</a> - <strong>${formatPrice(p.price)}</strong>`).join('<br>');
    return `Here are some featured pieces:<br><br>${listText}`;
  }

  // Search by keyword
  const searchResults = searchProducts(rawMsg);
  if (searchResults.length > 0) {
    const listText = searchResults.slice(0, 3).map(p => `• <a href="product.html?id=${p.id}" style="color:var(--color-gold-dark)">${p.name}</a> - <strong>${formatPrice(p.price)}</strong>`).join('<br>');
    return `Matches for your search:<br><br>${listText}`;
  }

  // Fallback (Answer not known - Redirect to WhatsApp "talk with experts")
  return `I don't have the answer to that. Please chat with our expert gemologists on WhatsApp:<br><br><a href="${whatsappUrl}${encodeURIComponent("Hi VK Diamonds, I have a question: " + msg)}" class="btn btn-gold btn-xs" target="_blank" style="display:inline-flex;align-items:center;gap:0.35rem;cursor:pointer"><i class="fab fa-whatsapp"></i> Talk with Experts</a>`;
}

function matches(words, keywords) {
  return keywords.some(keyword => words.includes(keyword));
}
