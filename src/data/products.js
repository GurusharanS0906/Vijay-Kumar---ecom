/* ============================================
   VijayKumar Diamonds & Gems — Product Database
   Extracted from app.js for React
   ============================================ */

export const products = [
  // ── RUBY ──
  { id:1, name:"Natural Burmese Ruby",category:"Ruby",price:185000,mrp:220000,carat:"3.15",origin:"Myanmar",cut:"Oval",color:"Pigeon Blood Red",clarity:"Eye Clean",cert:"GRS",treatment:"Unheated",image:"/images/ruby.png",gallery:["/images/ruby.png"],rating:5.0,reviews:18,badge:"Bestseller",desc:"Unheated pigeon blood ruby from the legendary Mogok mines",details:["3.15 Carat Weight","Oval Faceted Cut","GRS Certified","Unheated / Untreated","Origin: Myanmar (Burma)"] },
  { id:2, name:"Mozambique Ruby Oval",category:"Ruby",price:72000,mrp:85000,carat:"2.10",origin:"Mozambique",cut:"Oval",color:"Vivid Red",clarity:"Slightly Included",cert:"IGI",treatment:"Heated",image:"/images/mozambique_ruby.png",gallery:["/images/mozambique_ruby.png"],rating:4.6,reviews:9,desc:"Vivid red heated ruby, ideal for astrological rings",details:["2.10 Carat","Oval Cut","IGI Certified","Heated","Origin: Mozambique"] },
  { id:3, name:"Star Ruby Cabochon",category:"Ruby",price:45000,mrp:52000,carat:"4.80",origin:"India",cut:"Cabochon",color:"Purplish Red",clarity:"Translucent",cert:"Lab Cert",treatment:"Natural",image:"https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop"],rating:4.3,reviews:5,desc:"Natural star ruby with distinct 6-ray asterism",details:["4.80 Carat","Cabochon Cut","6-Ray Star Effect","Natural","Origin: India"] },

  // ── BLUE SAPPHIRE ──
  { id:4, name:"Ceylon Blue Sapphire",category:"Blue Sapphire",price:210000,mrp:250000,carat:"3.52",origin:"Sri Lanka",cut:"Cushion",color:"Royal Blue",clarity:"Eye Clean",cert:"GRS",treatment:"Unheated",image:"/images/blue_sapphire.png",gallery:["/images/blue_sapphire.png"],rating:5.0,reviews:24,badge:"Premium",desc:"Unheated royal blue sapphire from Sri Lanka mines",details:["3.52 Carat","Cushion Cut","GRS Certified","Unheated","Origin: Sri Lanka (Ceylon)"] },
  { id:5, name:"Kashmir Blue Sapphire",category:"Blue Sapphire",price:520000,mrp:600000,carat:"2.80",origin:"Kashmir",cut:"Oval",color:"Cornflower Blue",clarity:"VVS",cert:"Gübelin",treatment:"Unheated",image:"https://images.unsplash.com/photo-1615655096345-61a54750068d?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1615655096345-61a54750068d?q=80&w=600&auto=format&fit=crop"],rating:5.0,reviews:3,badge:"Rare",desc:"Extremely rare unheated Kashmir sapphire with velvety luster",details:["2.80 Carat","Oval Cut","Gübelin Certified","Unheated","Origin: Kashmir, India"] },
  { id:6, name:"Blue Sapphire Heated",category:"Blue Sapphire",price:55000,mrp:68000,carat:"3.20",origin:"Thailand",cut:"Round",color:"Medium Blue",clarity:"Slightly Included",cert:"IGI",treatment:"Heated",image:"/images/blue_sapphire.png",gallery:["/images/blue_sapphire.png"],rating:4.4,reviews:11,desc:"Affordable heated blue sapphire for Shani graha",details:["3.20 Carat","Round Cut","IGI Certified","Heated","Origin: Thailand"] },

  // ── EMERALD ──
  { id:7, name:"Colombian Emerald",category:"Emerald",price:295000,mrp:350000,carat:"2.85",origin:"Colombia",cut:"Emerald",color:"Vivid Green",clarity:"Minor Inclusions",cert:"GRS",treatment:"Minor Oil",image:"/images/emerald.png",gallery:["/images/emerald.png"],rating:4.9,reviews:15,badge:"Premium",desc:"Exceptional vivid green emerald from Muzo, Colombia",details:["2.85 Carat","Emerald Cut","GRS Certified","Minor Oil Treatment","Origin: Colombia (Muzo)"] },
  { id:8, name:"Zambian Emerald",category:"Emerald",price:125000,mrp:150000,carat:"3.40",origin:"Zambia",cut:"Oval",color:"Deep Green",clarity:"Moderately Included",cert:"IGI",treatment:"Minor Oil",image:"https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop"],rating:4.7,reviews:8,desc:"Deep green Zambian emerald with excellent saturation",details:["3.40 Carat","Oval Cut","IGI Certified","Minor Oil","Origin: Zambia"] },
  { id:9, name:"Panna Stone 5ct",category:"Emerald",price:68000,mrp:80000,carat:"5.10",origin:"Brazil",cut:"Octagon",color:"Medium Green",clarity:"Included",cert:"Lab Cert",treatment:"Oiled",image:"/images/emerald.png",gallery:["/images/emerald.png"],rating:4.2,reviews:12,desc:"Affordable natural emerald ideal for Budh graha",details:["5.10 Carat","Octagonal Cut","Lab Certified","Oiled","Origin: Brazil"] },

  // ── YELLOW SAPPHIRE ──
  { id:10,name:"Ceylon Yellow Sapphire",category:"Yellow Sapphire",price:95000,mrp:115000,carat:"4.20",origin:"Sri Lanka",cut:"Oval",color:"Canary Yellow",clarity:"Eye Clean",cert:"GIA",treatment:"Unheated",image:"/images/yellow_sapphire.png",gallery:["/images/yellow_sapphire.png"],rating:4.9,reviews:22,badge:"Bestseller",desc:"Brilliant canary yellow pukhraj for Jupiter benefits",details:["4.20 Carat","Oval Cut","GIA Certified","Unheated","Origin: Sri Lanka"] },
  { id:11,name:"Golden Yellow Sapphire",category:"Yellow Sapphire",price:62000,mrp:75000,carat:"3.80",origin:"Sri Lanka",cut:"Cushion",color:"Golden Yellow",clarity:"VVS",cert:"IGI",treatment:"Unheated",image:"https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=600&auto=format&fit=crop"],rating:4.7,reviews:14,desc:"Premium golden yellow sapphire with excellent brilliance",details:["3.80 Carat","Cushion Cut","IGI Certified","Unheated","Origin: Sri Lanka"] },
  { id:12,name:"Pukhraj 6ct Budget",category:"Yellow Sapphire",price:35000,mrp:42000,carat:"6.10",origin:"Thailand",cut:"Oval",color:"Light Yellow",clarity:"Slightly Included",cert:"Lab Cert",treatment:"Heated",image:"/images/yellow_sapphire.png",gallery:["/images/yellow_sapphire.png"],rating:4.1,reviews:7,desc:"Affordable heated pukhraj for astrological use",details:["6.10 Carat","Oval Cut","Lab Certified","Heated","Origin: Thailand"] },

  // ── PEARL ──
  { id:13,name:"South Sea Pearl",category:"Pearl",price:42000,mrp:50000,carat:"12mm",origin:"Australia",cut:"Round",color:"Cream White",clarity:"AAA Luster",cert:"GIA",treatment:"Natural",image:"/images/pearl.png",gallery:["/images/pearl.png"],rating:4.8,reviews:19,badge:"Popular",desc:"Lustrous 12mm South Sea pearl with exceptional orient",details:["12mm Diameter","Round Shape","AAA Luster Grade","GIA Certified","Origin: Australia"] },
  { id:14,name:"Basra Pearl Natural",category:"Pearl",price:185000,mrp:220000,carat:"8mm",origin:"Persian Gulf",cut:"Round",color:"Cream",clarity:"Fine Luster",cert:"Gübelin",treatment:"Natural",image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop"],rating:5.0,reviews:4,badge:"Rare",desc:"Extremely rare natural Basra pearl — collector's piece",details:["8mm Diameter","Near Round","Natural Formation","Gübelin Certified","Origin: Persian Gulf"] },
  { id:15,name:"Freshwater Pearl Set",category:"Pearl",price:12000,mrp:15000,carat:"7mm",origin:"China",cut:"Button",color:"White",clarity:"Good Luster",cert:"Lab Cert",treatment:"Natural",image:"/images/pearl.png",gallery:["/images/pearl.png"],rating:4.3,reviews:26,desc:"Set of 5 matched freshwater pearls for jewelry",details:["7mm Each","Button Shape","Set of 5","Lab Certified","Origin: China"] },

  // ── RED CORAL ──
  { id:16,name:"Italian Red Coral",category:"Red Coral",price:28000,mrp:35000,carat:"8.50",origin:"Italy",cut:"Capsule",color:"Ox Blood Red",clarity:"Opaque",cert:"Lab Cert",treatment:"Natural",image:"/images/coral.png",gallery:["/images/coral.png"],rating:4.6,reviews:16,badge:"Popular",desc:"Premium ox blood Italian coral for Mars (Mangal)",details:["8.50 Carat","Capsule Shape","Lab Certified","Natural","Origin: Italy (Mediterranean)"] },
  { id:17,name:"Japanese Red Coral",category:"Red Coral",price:65000,mrp:78000,carat:"6.20",origin:"Japan",cut:"Oval Cabochon",color:"Deep Red",clarity:"Opaque",cert:"Lab Cert",treatment:"Natural",image:"/images/coral.png",gallery:["/images/coral.png"],rating:4.8,reviews:6,desc:"Premium deep red Japanese coral — finest quality",details:["6.20 Carat","Oval Cabochon","Lab Certified","Natural","Origin: Japan"] },

  // ── HESSONITE (GOMED) ──
  { id:18,name:"Ceylon Hessonite Garnet",category:"Hessonite",price:18000,mrp:22000,carat:"5.80",origin:"Sri Lanka",cut:"Oval",color:"Honey Brown",clarity:"Eye Clean",cert:"IGI",treatment:"Natural",image:"/images/hessonite.png",gallery:["/images/hessonite.png"],rating:4.5,reviews:13,desc:"Premium Ceylon gomed for Rahu — excellent transparency",details:["5.80 Carat","Oval Cut","IGI Certified","Natural/Untreated","Origin: Sri Lanka"] },
  { id:19,name:"African Gomed 7ct",category:"Hessonite",price:8500,mrp:11000,carat:"7.20",origin:"Africa",cut:"Cushion",color:"Cinnamon",clarity:"Slightly Included",cert:"Lab Cert",treatment:"Natural",image:"/images/hessonite.png",gallery:["/images/hessonite.png"],rating:4.0,reviews:8,desc:"Budget-friendly gomed for astrological purposes",details:["7.20 Carat","Cushion Cut","Lab Certified","Natural","Origin: Africa"] },

  // ── OPAL ──
  { id:20,name:"Natural Australian Opal",category:"Opal",price:75000,mrp:90000,carat:"3.40",origin:"Australia",cut:"Cabochon",color:"Vivid Play-of-Color",clarity:"Translucent",cert:"GIA",treatment:"Natural",image:"/images/opal.png",gallery:["/images/opal.png"],rating:4.9,reviews:7,badge:"Rare",desc:"Certified natural Australian white opal with vibrant play-of-color",details:["3.40 Carat","Oval Cabochon","Luxury Play-of-Color","GIA Certified","Origin: Australia"] },
  { id:21,name:"White Ethiopian Opal",category:"Opal",price:15000,mrp:18000,carat:"5.60",origin:"Ethiopia",cut:"Cabochon",color:"Rainbow Flashes",clarity:"Translucent",cert:"Lab Cert",treatment:"Natural",image:"/images/opal.png",gallery:["/images/opal.png"],rating:4.2,reviews:10,desc:"Natural Ethiopian opal showing stellar rainbow flashes",details:["5.60 Carat","Round Cabochon","Vivid Multi-Color Flashes","Lab Certified","Origin: Ethiopia"] },
  { id:22,name:"Fire Opal Cabochon",category:"Opal",price:85000,mrp:95000,carat:"1.01",origin:"Mexico",cut:"Faceted",color:"Sunset Orange",clarity:"IF",cert:"GIA",treatment:"Natural",image:"/images/opal.png",gallery:["/images/opal.png"],rating:5.0,reviews:3,badge:"Investment",desc:"Rare unheated Mexican fire opal with intense sunset orange brilliance",details:["1.01 Carat","Oval Faceted","Vibrant Orange Body Color","GIA Certified","Origin: Mexico"] },
  { id:23,name:"Natural Black Opal",category:"Opal",price:185000,mrp:210000,carat:"0.52",origin:"Australia",cut:"Cabochon",color:"Red-Green Play-of-Color",clarity:"Translucent",cert:"GIA",treatment:"Natural",image:"/images/opal.png",gallery:["/images/opal.png"],rating:4.9,reviews:12,desc:"Investment grade Australian black opal with intense red and green play-of-color",details:["0.52 Carat","Oval Cabochon","Exceptional Dark body tone","GIA Certified","Origin: Lightning Ridge, Australia"] },
  { id:24,name:"Premium Pink Opal",category:"Opal",price:32000,mrp:38000,carat:"0.75",origin:"Peru",cut:"Cabochon",color:"Pastel Pink",clarity:"Opaque",cert:"GIA",treatment:"Natural",image:"/images/opal.png",gallery:["/images/opal.png"],rating:4.8,reviews:5,badge:"Rare",desc:"Natural Peruvian pink opal cabochon, perfect for astrological healing and rings",details:["0.75 Carat","Cushion Cabochon","Lovely Pastel Pink Color","Lab Certified","Origin: Peru"] },

  // ── RINGS ──
  { id:25,name:"Blue Sapphire Gold Ring",category:"Rings",price:145000,mrp:175000,carat:"2.50",origin:"Sri Lanka",cut:"Oval",color:"Royal Blue",clarity:"Eye Clean",cert:"Hallmark",treatment:"Set in 22K Gold",image:"/images/ring.png",gallery:["/images/ring.png"],rating:4.8,reviews:21,badge:"Bestseller",desc:"Handcrafted 22K gold ring with certified blue sapphire",details:["22K Yellow Gold","2.50ct Ceylon Sapphire","Hallmarked BIS","Ring Size: Adjustable","Free Ring Box"] },
  { id:26,name:"Ruby Diamond Ring",category:"Rings",price:225000,mrp:265000,carat:"1.80",origin:"Myanmar",cut:"Oval",color:"Pigeon Blood",clarity:"Eye Clean",cert:"Hallmark",treatment:"Set in 18K Gold",image:"https://images.unsplash.com/photo-1605100804763-247f6612d543?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1605100804763-247f6612d543?q=80&w=600&auto=format&fit=crop"],rating:4.9,reviews:14,desc:"Stunning Burmese ruby with diamond halo in 18K gold",details:["18K White Gold","1.80ct Burma Ruby","0.45ct Diamond Halo","Hallmarked","Certificate Included"] },
  { id:27,name:"Emerald Panchdhatu Ring",category:"Rings",price:32000,mrp:40000,carat:"4.25",origin:"Zambia",cut:"Oval",color:"Green",clarity:"Included",cert:"Lab Cert",treatment:"Panchdhatu Setting",image:"/images/ring.png",gallery:["/images/ring.png"],rating:4.4,reviews:18,desc:"Astrological panna ring in five-metal panchdhatu",details:["Panchdhatu Metal","4.25ct Emerald","Astrological Setting","Lab Certified Gem","Adjustable Size"] },
  { id:28,name:"Yellow Sapphire Ring",category:"Rings",price:78000,mrp:92000,carat:"3.80",origin:"Sri Lanka",cut:"Oval",color:"Golden Yellow",clarity:"VVS",cert:"Hallmark",treatment:"Set in 22K Gold",image:"https://images.unsplash.com/photo-1543294001-f7cbfe92237e?q=80&w=600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1543294001-f7cbfe92237e?q=80&w=600&auto=format&fit=crop"],rating:4.7,reviews:29,badge:"Popular",desc:"Premium pukhraj ring in 22K hallmarked gold",details:["22K Yellow Gold","3.80ct Yellow Sapphire","Hallmarked BIS","Free Sizing","With Certificate"] },
];

export const categoryImages = {
  "Yellow Sapphire": "/images/yellow_sapphire.png",
  "Blue Sapphire": "/images/blue_sapphire.png",
  "Emerald": "/images/emerald.png",
  "Ruby": "/images/ruby.png",
  "Opal": "/images/opal.png",
  "Pearl": "/images/pearl.png",
  "Red Coral": "/images/coral.png",
  "Hessonite": "/images/hessonite.png",
  "Rings": "/images/ring.png"
};

export const allCategories = ["Yellow Sapphire","Blue Sapphire","Emerald","Ruby","Opal","Pearl","Red Coral","Hessonite","Rings"];
export const gemCategories = ["Yellow Sapphire","Blue Sapphire","Emerald","Ruby","Opal","Pearl","Red Coral","Hessonite"];
export const jewelryCategories = ["Rings"];

export const metalPrices = {
  'Ring': {
    '22K Yellow Gold': 45000,
    '18K White Gold': 35000,
    'Sterling Silver': 4500,
    'Panchdhatu': 6000
  },
  'Pendant': {
    '22K Yellow Gold': 30000,
    '18K White Gold': 24000,
    'Sterling Silver': 3000,
    'Panchdhatu': 4000
  }
};

export const chatbotKnowledge = {
  storeName: "VijayKumar Diamonds & Gems",
  address: "Venkatakrishna Street, Opposite Shanmuga Nursing Home, RS Puram, Coimbatore — 641002, Tamil Nadu, India",
  phone: "+91 90927 16427",
  email: "info@vijaykumardiamonds.com",
  hours: "Monday – Sunday: 9:00 AM — 10:00 PM (Open 7 days)",
};
