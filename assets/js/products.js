const products = [
  {
    id: 1,
    name: "Merino Wool Cashmere Blazer",
    slug: "merino-wool-cashmere-blazer",
    category: "men",
    subcategory: "clothing",
    type: "jackets",
    description: "Luxuriously soft merino wool blended with cashmere creates the ultimate tailored blazer. Features a modern slim fit with notch lapels and interior pockets.",
    price: 429.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
      "https://images.unsplash.com/photo-1593032627993-590190f13a8d?w=600"
    ],
    colors: ["Navy", "Black", "Gray", "Burgundy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    brand: "EliteWear Collection",
    rating: 4.8,
    reviews: 215,
    isNew: true,
    isTrending: true,
    isSale: false,
    stock: 35
  },
  {
    id: 2,
    name: "Italian Leather Chelsea Boots",
    slug: "italian-leather-chelsea-boots",
    category: "men",
    subcategory: "shoes",
    type: "shoes",
    description: "Handcrafted in Italy from premium full-grain leather with a sleek elastic side panel. Features a durable leather sole and cushioned insole for all-day comfort.",
    price: 349.99,
    discount: 15,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
      "https://images.unsplash.com/photo-1608236423697-5bf9c0c8d2a0?w=600"
    ],
    colors: ["Black", "Brown"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    brand: "Luxe Label",
    rating: 4.7,
    reviews: 183,
    isNew: false,
    isTrending: true,
    isSale: true,
    stock: 28
  },
  {
    id: 3,
    name: "Slim Fit Oxford Shirt",
    slug: "slim-fit-oxford-shirt",
    category: "men",
    subcategory: "clothing",
    type: "shirts",
    description: "Classic Oxford cloth button-down shirt with a modern slim fit. Crafted from premium cotton with a wrinkle-resistant finish.",
    price: 89.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
      "https://images.unsplash.com/photo-1564582562289-629e396a31af?w=600"
    ],
    colors: ["White", "Navy", "Gray", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    brand: "EliteWear Collection",
    rating: 4.5,
    reviews: 327,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 120
  },
  {
    id: 4,
    name: "Classic Fit Chino Pants",
    slug: "classic-fit-chino-pants",
    category: "men",
    subcategory: "clothing",
    type: "pants",
    description: "Essential chino pants tailored from stretch cotton twill for a comfortable classic fit. Features a mid-rise waist and tapered leg opening.",
    price: 79.99,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600",
      "https://images.unsplash.com/photo-1593032627993-590190f13a8d?w=600"
    ],
    colors: ["Beige", "Navy", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    brand: "Apex Studio",
    rating: 4.4,
    reviews: 256,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 85
  },
  {
    id: 5,
    name: "Premium Leather Belt",
    slug: "premium-leather-belt",
    category: "men",
    subcategory: "accessories",
    type: "belts",
    description: "Full-grain Italian leather belt with a brushed nickel buckle. Features a tapered design that works seamlessly with both dress and casual attire.",
    price: 69.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
      "https://images.unsplash.com/photo-1583746783675-19071a2e10f6?w=600"
    ],
    colors: ["Black", "Brown"],
    sizes: ["S", "M", "L", "XL"],
    brand: "Regal Tailors",
    rating: 4.3,
    reviews: 98,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 150
  },
  {
    id: 6,
    name: "Aviator Polarized Sunglasses",
    slug: "aviator-polarized-sunglasses",
    category: "men",
    subcategory: "accessories",
    type: "sunglasses",
    description: "Classic aviator sunglasses with polarized brown lenses and a lightweight titanium frame. Provides 100% UV protection with anti-reflective coating.",
    price: 159.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600"
    ],
    colors: ["Gold", "Black"],
    sizes: ["S", "M", "L"],
    brand: "Vogue Craft",
    rating: 4.6,
    reviews: 142,
    isNew: true,
    isTrending: true,
    isSale: false,
    stock: 60
  },
  {
    id: 7,
    name: "Cashmere Crew Neck Sweater",
    slug: "cashmere-crew-neck-sweater",
    category: "men",
    subcategory: "clothing",
    type: "sweaters",
    description: "Pure cashmere crew neck sweater with a luxurious soft hand feel. Ribbed cuffs and hem provide a polished finish for any occasion.",
    price: 259.99,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1576566588098-7c7c1e12b2a4?w=600",
      "https://images.unsplash.com/photo-1578934840524-5d8c6b1a2c3d?w=600"
    ],
    colors: ["Gray", "Navy", "Black", "Burgundy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    brand: "Luxe Label",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 42
  },
  {
    id: 8,
    name: "Waterproof Down Parka",
    slug: "waterproof-down-parka",
    category: "men",
    subcategory: "clothing",
    type: "coats",
    description: "Premium goose-down insulated parka with a waterproof outer shell. Features a detachable fur-trimmed hood and multiple zip pockets for extreme weather protection.",
    price: 599.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600"
    ],
    colors: ["Black", "Navy", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    brand: "EliteWear Collection",
    rating: 4.7,
    reviews: 64,
    isNew: true,
    isTrending: false,
    isSale: false,
    stock: 18
  },
  {
    id: 9,
    name: "Luxury Chronograph Watch",
    slug: "luxury-chronograph-watch",
    category: "men",
    subcategory: "accessories",
    type: "watches",
    description: "Swiss-made automatic chronograph with a sapphire crystal face and stainless steel bracelet. Water-resistant to 100 meters with a date complication.",
    price: 499.99,
    discount: 10,
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600"
    ],
    colors: ["Gold", "Black"],
    sizes: [],
    brand: "Prestige Line",
    rating: 4.8,
    reviews: 312,
    isNew: false,
    isTrending: true,
    isSale: true,
    stock: 15
  },
  {
    id: 10,
    name: "Cotton Zip Hoodie",
    slug: "cotton-zip-hoodie",
    category: "men",
    subcategory: "clothing",
    type: "hoodies",
    description: "Heavyweight cotton fleece zip hoodie with a full-length YKK zipper. Features a kangaroo pocket and adjustable drawstring hood for everyday comfort.",
    price: 99.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600"
    ],
    colors: ["Black", "Gray", "Navy", "Forest Green"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    brand: "Apex Studio",
    rating: 4.3,
    reviews: 198,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 95
  },
  {
    id: 11,
    name: "Linen Blend Shorts",
    slug: "linen-blend-shorts",
    category: "men",
    subcategory: "clothing",
    type: "shorts",
    description: "Breathable linen-cotton blend shorts with an elastic waistband and drawstring. Features side pockets and a relaxed fit perfect for warm weather.",
    price: 59.99,
    discount: 30,
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600",
      "https://images.unsplash.com/photo-1593032627993-590190f13a8d?w=600"
    ],
    colors: ["Beige", "Navy", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    brand: "Regal Tailors",
    rating: 4.1,
    reviews: 73,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 110
  },
  {
    id: 12,
    name: "Italian Silk Tie Collection",
    slug: "italian-silk-tie-collection",
    category: "men",
    subcategory: "accessories",
    type: "jewelry",
    description: "Hand-rolled Italian silk tie with a classic seven-fold construction. Features a subtle jacquard pattern and comes in a premium gift box.",
    price: 129.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=600",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600"
    ],
    colors: ["Navy", "Burgundy", "Black", "Gray"],
    sizes: [],
    brand: "Regal Tailors",
    rating: 4.5,
    reviews: 56,
    isNew: true,
    isTrending: false,
    isSale: false,
    stock: 75
  },
  {
    id: 13,
    name: "Leather Messenger Bag",
    slug: "leather-messenger-bag",
    category: "men",
    subcategory: "accessories",
    type: "bags",
    description: "Distressed full-grain leather messenger bag with a padded laptop compartment. Features brass hardware and an adjustable crossbody strap for everyday carry.",
    price: 289.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"
    ],
    colors: ["Brown", "Black"],
    sizes: [],
    brand: "EliteWear Collection",
    rating: 4.6,
    reviews: 167,
    isNew: false,
    isTrending: true,
    isSale: false,
    stock: 30
  },
  {
    id: 14,
    name: "Wool Fedora Hat",
    slug: "wool-fedora-hat",
    category: "men",
    subcategory: "accessories",
    type: "hats",
    description: "Classic wool fedora with a black grosgrain ribbon band and a wide brim. Reinforced interior sweatband ensures a comfortable fit for all-day wear.",
    price: 79.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1514327605052-3e9d75867046?w=600",
      "https://images.unsplash.com/photo-1596728325488-58c7e62f22b1?w=600"
    ],
    colors: ["Black", "Gray", "Beige"],
    sizes: ["S", "M", "L", "XL"],
    brand: "Vogue Craft",
    rating: 4.2,
    reviews: 44,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 55
  },
  {
    id: 15,
    name: "Performance Running Shoes",
    slug: "performance-running-shoes",
    category: "men",
    subcategory: "shoes",
    type: "shoes",
    description: "Lightweight performance runner with responsive cushioning and a breathable mesh upper. Features a carbon fiber plate for enhanced energy return.",
    price: 189.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1542291026-7aec4f0b0b1a?w=600",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"
    ],
    colors: ["Black", "White", "Gray", "Navy"],
    sizes: ["39", "40", "41", "42", "43", "44", "45", "46"],
    brand: "Apex Studio",
    rating: 4.4,
    reviews: 289,
    isNew: true,
    isTrending: true,
    isSale: false,
    stock: 90
  },
  {
    id: 16,
    name: "Distressed Denim Jacket",
    slug: "distressed-denim-jacket",
    category: "men",
    subcategory: "clothing",
    type: "jackets",
    description: "Classic denim jacket with a lived-in distressed finish and button front closure. Features a spread collar and chest pockets with signature branding.",
    price: 149.99,
    discount: 15,
    images: [
      "https://images.unsplash.com/photo-1601335853738-2e5e5c0a1b1a?w=600",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600"
    ],
    colors: ["Gray", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    brand: "Apex Studio",
    rating: 4.3,
    reviews: 134,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 45
  },
  {
    id: 17,
    name: "Pima Cotton Crew Neck Tee",
    slug: "pima-cotton-crew-neck-tee",
    category: "men",
    subcategory: "clothing",
    type: "shirts",
    description: "Luxuriously soft Peruvian Pima cotton t-shirt with a classic crew neckline. Features reinforced seams and a tagless label for ultimate comfort.",
    price: 49.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      "https://images.unsplash.com/photo-1583746783675-19071a2e10f6?w=600"
    ],
    colors: ["White", "Black", "Gray", "Navy", "Forest Green"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    brand: "EliteWear Collection",
    rating: 4.6,
    reviews: 412,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 200
  },
  {
    id: 18,
    name: "Silk Evening Gown",
    slug: "silk-evening-gown",
    category: "women",
    subcategory: "clothing",
    type: "dresses",
    description: "Floor-length silk charmeuse evening gown with a cowl neckline and open back. Features a flowing silhouette with subtle side slit for elegant movement.",
    price: 459.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600"
    ],
    colors: ["Black", "Burgundy", "Navy", "Gold"],
    sizes: ["XS", "S", "M", "L", "XL"],
    brand: "Vogue Craft",
    rating: 4.9,
    reviews: 78,
    isNew: true,
    isTrending: true,
    isSale: false,
    stock: 12
  },
  {
    id: 19,
    name: "Leather Ankle Boots",
    slug: "leather-ankle-boots",
    category: "women",
    subcategory: "shoes",
    type: "shoes",
    description: "Chic leather ankle boots with a stacked block heel and side zipper closure. Cushioned footbed and leather lining provide all-day comfort and style.",
    price: 229.99,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600",
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600"
    ],
    colors: ["Black", "Brown", "Beige"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    brand: "Luxe Label",
    rating: 4.5,
    reviews: 203,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 40
  },
  {
    id: 20,
    name: "Tailored Wool Blazer",
    slug: "tailored-wool-blazer",
    category: "women",
    subcategory: "clothing",
    type: "jackets",
    description: "Sartorial wool blazer with a single-breasted two-button closure and peak lapels. Fully lined with interior pockets and a flattering nipped-waist silhouette.",
    price: 389.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600"
    ],
    colors: ["Black", "Navy", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    brand: "Regal Tailors",
    rating: 4.7,
    reviews: 145,
    isNew: false,
    isTrending: true,
    isSale: false,
    stock: 25
  },
  {
    id: 21,
    name: "Cashmere Wrap Coat",
    slug: "cashmere-wrap-coat",
    category: "women",
    subcategory: "clothing",
    type: "coats",
    description: "Pure cashmere wrap coat with a self-tie belt and notched lapels. The luxurious fabric drapes beautifully for an effortlessly sophisticated silhouette.",
    price: 549.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600",
      "https://images.unsplash.com/photo-1489987630535-be6084a4d161?w=600"
    ],
    colors: ["Beige", "Black", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    brand: "EliteWear Collection",
    rating: 4.8,
    reviews: 56,
    isNew: true,
    isTrending: true,
    isSale: false,
    stock: 14
  },
  {
    id: 22,
    name: "Designer Tote Bag",
    slug: "designer-tote-bag",
    category: "women",
    subcategory: "accessories",
    type: "bags",
    description: "Spacious structured tote crafted from pebbled leather with gold-toned hardware. Features a detachable shoulder strap and interior zip compartment.",
    price: 349.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
      "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600"
    ],
    colors: ["Black", "Beige", "Navy"],
    sizes: [],
    brand: "Luxe Label",
    rating: 4.7,
    reviews: 198,
    isNew: false,
    isTrending: true,
    isSale: false,
    stock: 22
  },
  {
    id: 23,
    name: "Crystal Pendant Necklace",
    slug: "crystal-pendant-necklace",
    category: "women",
    subcategory: "accessories",
    type: "jewelry",
    description: "925 sterling silver necklace with a genuine Swarovski crystal pendant. The adjustable chain allows for versatile styling from day to evening wear.",
    price: 189.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
      "https://images.unsplash.com/photo-1515562141589-2f5ac1e8e9c0?w=600"
    ],
    colors: ["Gold", "White"],
    sizes: [],
    brand: "Prestige Line",
    rating: 4.6,
    reviews: 89,
    isNew: true,
    isTrending: false,
    isSale: false,
    stock: 65
  },
  {
    id: 24,
    name: "High-Waist Skinny Jeans",
    slug: "high-waist-skinny-jeans",
    category: "women",
    subcategory: "clothing",
    type: "pants",
    description: "Premium stretch denim jeans with a high-rise waist and skinny leg fit. Features a flattering contour waistband that prevents gapping at the back.",
    price: 109.99,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
      "https://images.unsplash.com/photo-1552902868-52d0c2a5a6f3?w=600"
    ],
    colors: ["Black", "Navy", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    brand: "Apex Studio",
    rating: 4.3,
    reviews: 312,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 70
  },
  {
    id: 25,
    name: "Off-Shoulder Sweater",
    slug: "off-shoulder-sweater",
    category: "women",
    subcategory: "clothing",
    type: "sweaters",
    description: "Chunky knit off-shoulder sweater with a ribbed neckline and balloon sleeves. Made from a soft wool-blend yarn for warmth and style.",
    price: 119.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1576566588098-7c7c1e12b2a4?w=600",
      "https://images.unsplash.com/photo-1578934840524-5d8c6b1a2c3d?w=600"
    ],
    colors: ["Beige", "Burgundy", "Black", "Forest Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    brand: "Vogue Craft",
    rating: 4.4,
    reviews: 167,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 38
  },
  {
    id: 26,
    name: "Cat Eye Sunglasses",
    slug: "cat-eye-sunglasses",
    category: "women",
    subcategory: "accessories",
    type: "sunglasses",
    description: "Vintage-inspired cat eye sunglasses with gradient brown lenses and tortoiseshell frames. UV400 protection with scratch-resistant lens coating.",
    price: 139.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    ],
    colors: ["Gold", "Black", "Beige"],
    sizes: [],
    brand: "Vogue Craft",
    rating: 4.5,
    reviews: 112,
    isNew: false,
    isTrending: true,
    isSale: false,
    stock: 48
  },
  {
    id: 27,
    name: "Pleated Midi Skirt",
    slug: "pleated-midi-skirt",
    category: "women",
    subcategory: "clothing",
    type: "skirts",
    description: "Elegant pleated midi skirt in luxurious satin with a smooth elastic waistband. The fluid movement creates a graceful silhouette for any occasion.",
    price: 89.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600",
      "https://images.unsplash.com/photo-1552902868-52d0c2a5a6f3?w=600"
    ],
    colors: ["Black", "Navy", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    brand: "Prestige Line",
    rating: 4.2,
    reviews: 94,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 55
  },
  {
    id: 28,
    name: "Cotton Linen Shirt",
    slug: "cotton-linen-shirt",
    category: "women",
    subcategory: "clothing",
    type: "shirts",
    description: "Relaxed-fit shirt in a breathable cotton-linen blend with a classic button-down front. Features a spread collar and roll-tab sleeves for versatile styling.",
    price: 79.99,
    discount: 15,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600"
    ],
    colors: ["White", "Beige", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    brand: "Apex Studio",
    rating: 4.3,
    reviews: 128,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 80
  },
  {
    id: 29,
    name: "Leather Crossbody Bag",
    slug: "leather-crossbody-bag",
    category: "women",
    subcategory: "accessories",
    type: "bags",
    description: "Compact crossbody bag handcrafted from supple calf leather with an adjustable strap. Features multiple card slots and a secure zip-top closure.",
    price: 199.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
      "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600"
    ],
    colors: ["Black", "Beige", "Burgundy"],
    sizes: [],
    brand: "Luxe Label",
    rating: 4.6,
    reviews: 234,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 35
  },
  {
    id: 30,
    name: "Silk Scarf Collection",
    slug: "silk-scarf-collection",
    category: "women",
    subcategory: "accessories",
    type: "scarves",
    description: "Hand-rolled 100% silk twill scarf featuring an exclusive botanical print. Versatile enough to wear as a neckerchief, headband, or bag accessory.",
    price: 149.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1604848695127-f3ad60a3e2ff?w=600",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600"
    ],
    colors: ["Gold", "Burgundy", "Navy"],
    sizes: [],
    brand: "Prestige Line",
    rating: 4.4,
    reviews: 67,
    isNew: true,
    isTrending: false,
    isSale: false,
    stock: 42
  },
  {
    id: 31,
    name: "Wool Beret Hat",
    slug: "wool-beret-hat",
    category: "women",
    subcategory: "accessories",
    type: "hats",
    description: "Classic French wool beret with a soft comfortable fit and leather sweatband. A timeless accessory that adds Parisian elegance to any outfit.",
    price: 49.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1514327605052-3e9d75867046?w=600",
      "https://images.unsplash.com/photo-1596728325488-58c7e62f22b1?w=600"
    ],
    colors: ["Black", "Red", "Beige", "Navy"],
    sizes: ["S", "M", "L"],
    brand: "Vogue Craft",
    rating: 4.1,
    reviews: 33,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 95
  },
  {
    id: 32,
    name: "Diamond Stud Earrings",
    slug: "diamond-stud-earrings",
    category: "women",
    subcategory: "accessories",
    type: "jewelry",
    description: "Brilliant-cut diamond stud earrings set in 14k white gold with a secure screw-back setting. Each diamond is GIA certified with SI1 clarity.",
    price: 399.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1515562141589-2f5ac1e8e9c0?w=600",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600"
    ],
    colors: ["White", "Gold"],
    sizes: [],
    brand: "Prestige Line",
    rating: 4.9,
    reviews: 45,
    isNew: true,
    isTrending: true,
    isSale: false,
    stock: 10
  },
  {
    id: 33,
    name: "Sporty Hooded Jacket",
    slug: "sporty-hooded-jacket",
    category: "women",
    subcategory: "clothing",
    type: "jackets",
    description: "Lightweight quilted jacket with a fixed hood and zip-front closure. Features ribbed cuffs and hem with zip pockets for a sporty-chic look.",
    price: 139.99,
    discount: 30,
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600",
      "https://images.unsplash.com/photo-1593032627993-590190f13a8d?w=600"
    ],
    colors: ["Black", "Navy", "Forest Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    brand: "Apex Studio",
    rating: 4.2,
    reviews: 156,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 60
  },
  {
    id: 34,
    name: "Lace Trim Camisole",
    slug: "lace-trim-camisole",
    category: "women",
    subcategory: "clothing",
    type: "shirts",
    description: "Silk camisole with delicate French lace trim and adjustable spaghetti straps. Perfect for layering or wearing alone for an effortlessly chic look.",
    price: 69.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1564582562289-629e396a31af?w=600",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600"
    ],
    colors: ["White", "Black", "Beige"],
    sizes: ["XS", "S", "M", "L", "XL"],
    brand: "Vogue Craft",
    rating: 4.3,
    reviews: 88,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 75
  },
  {
    id: 35,
    name: "Leather Strap Watch",
    slug: "leather-strap-watch",
    category: "women",
    subcategory: "accessories",
    type: "watches",
    description: "Elegant quartz watch with a mother-of-pearl dial and genuine Italian leather strap. Features a date window and rose gold-tone case with 30m water resistance.",
    price: 279.99,
    discount: 10,
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600"
    ],
    colors: ["Rose Gold", "Black", "White"],
    sizes: [],
    brand: "Prestige Line",
    rating: 4.7,
    reviews: 178,
    isNew: false,
    isTrending: true,
    isSale: true,
    stock: 32
  },
  {
    id: 36,
    name: "Velvet Party Dress",
    slug: "velvet-party-dress",
    category: "kids",
    subcategory: "clothing",
    type: "dresses",
    description: "Beautiful velvet party dress with a tulle underskirt and satin bow detail. Features a concealed back zipper and comfortable lined bodice for special occasions.",
    price: 79.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6c8?w=600",
      "https://images.unsplash.com/photo-1518831959646-742c3a1ebeb8?w=600"
    ],
    colors: ["Burgundy", "Navy", "Black", "Forest Green"],
    sizes: ["2T", "3T", "4T", "5T", "6Y", "8Y", "10Y", "12Y", "14Y"],
    brand: "Regal Tailors",
    rating: 4.6,
    reviews: 89,
    isNew: false,
    isTrending: true,
    isSale: false,
    stock: 45
  },
  {
    id: 37,
    name: "Mini Sneakers",
    slug: "mini-sneakers",
    category: "kids",
    subcategory: "shoes",
    type: "shoes",
    description: "Adorable mini sneakers with a flexible rubber sole and hook-and-loop closure for easy on and off. Padded collar and breathable mesh lining keep little feet comfortable.",
    price: 49.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"
    ],
    colors: ["White", "Black", "Navy"],
    sizes: ["2T", "3T", "4T", "5T", "6Y", "8Y", "10Y"],
    brand: "Apex Studio",
    rating: 4.5,
    reviews: 124,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 100
  },
  {
    id: 38,
    name: "Denim Dungaree Set",
    slug: "denim-dungaree-set",
    category: "kids",
    subcategory: "clothing",
    type: "pants",
    description: "Classic denim dungarees with adjustable shoulder straps and a relaxed fit. Features multiple pockets and reinforced knees for durable everyday play.",
    price: 59.99,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1519238428814-05f1f5e2b58e?w=600",
      "https://images.unsplash.com/photo-1552902868-52d0c2a5a6f3?w=600"
    ],
    colors: ["Navy", "Gray"],
    sizes: ["2T", "3T", "4T", "5T", "6Y", "8Y"],
    brand: "Regal Tailors",
    rating: 4.4,
    reviews: 67,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 55
  },
  {
    id: 39,
    name: "Graphic Print Hoodie",
    slug: "graphic-print-hoodie",
    category: "kids",
    subcategory: "clothing",
    type: "hoodies",
    description: "Soft cotton-blend hoodie with a fun graphic print and cozy fleece lining. Features a kangaroo pocket and ribbed cuffs for a comfortable active fit.",
    price: 44.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600"
    ],
    colors: ["Gray", "Navy", "Black", "Forest Green"],
    sizes: ["4T", "5T", "6Y", "8Y", "10Y", "12Y", "14Y"],
    brand: "Apex Studio",
    rating: 4.3,
    reviews: 112,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 90
  },
  {
    id: 40,
    name: "Knit Beanie Hat",
    slug: "knit-beanie-hat",
    category: "kids",
    subcategory: "accessories",
    type: "hats",
    description: "Warm acrylic knit beanie with a soft fleece lining and playful pom-pom top. Stretchy ribbed knit ensures a snug comfortable fit for growing heads.",
    price: 24.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1514327605052-3e9d75867046?w=600",
      "https://images.unsplash.com/photo-1596728325488-58c7e62f22b1?w=600"
    ],
    colors: ["Burgundy", "Navy", "Gray", "Forest Green"],
    sizes: ["2T", "3T", "4T", "6Y", "8Y", "10Y"],
    brand: "EliteWear Collection",
    rating: 4.2,
    reviews: 45,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 130
  },
  {
    id: 41,
    name: "Kids Digital Watch",
    slug: "kids-digital-watch",
    category: "kids",
    subcategory: "accessories",
    type: "watches",
    description: "Colorful digital watch with a shock-resistant case and easy-to-read display. Features alarm, stopwatch, and backlight functions for young adventurers.",
    price: 34.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600"
    ],
    colors: ["Navy", "Black", "White"],
    sizes: [],
    brand: "Apex Studio",
    rating: 4.1,
    reviews: 78,
    isNew: true,
    isTrending: false,
    isSale: false,
    stock: 85
  },
  {
    id: 42,
    name: "Cotton Tee & Shorts Set",
    slug: "cotton-tee-shorts-set",
    category: "kids",
    subcategory: "clothing",
    type: "shirts",
    description: "Coordinating cotton t-shirt and shorts set with an elastic waistband. Pre-shrunk fabric and tagless labels ensure lasting comfort for active little ones.",
    price: 39.99,
    discount: 15,
    images: [
      "https://images.unsplash.com/photo-1519238428814-05f1f5e2b58e?w=600",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6c8?w=600"
    ],
    colors: ["White", "Gray", "Navy"],
    sizes: ["2T", "3T", "4T", "5T", "6Y", "8Y"],
    brand: "EliteWear Collection",
    rating: 4.5,
    reviews: 156,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 110
  },
  {
    id: 43,
    name: "Fleece Zip Jacket",
    slug: "fleece-zip-jacket",
    category: "kids",
    subcategory: "clothing",
    type: "jackets",
    description: "Cozy fleece zip-up jacket with a stand-up collar and zippered pockets. Lightweight yet warm, perfect for layering during cooler weather adventures.",
    price: 49.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600",
      "https://images.unsplash.com/photo-1601335853738-2e5e5c0a1b1a?w=600"
    ],
    colors: ["Black", "Navy", "Forest Green", "Gray"],
    sizes: ["4T", "5T", "6Y", "8Y", "10Y", "12Y"],
    brand: "EliteWear Collection",
    rating: 4.4,
    reviews: 93,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 65
  },
  {
    id: 44,
    name: "Junior Backpack",
    slug: "junior-backpack",
    category: "kids",
    subcategory: "accessories",
    type: "bags",
    description: "Lightweight backpack with padded shoulder straps and a roomy main compartment. Features a fun printed design with reflective strips for safety.",
    price: 39.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"
    ],
    colors: ["Navy", "Black", "Forest Green"],
    sizes: [],
    brand: "Regal Tailors",
    rating: 4.3,
    reviews: 67,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 55
  },
  {
    id: 45,
    name: "Plaid Button-Up Shirt",
    slug: "plaid-button-up-shirt",
    category: "kids",
    subcategory: "clothing",
    type: "shirts",
    description: "Classic plaid button-up shirt in soft cotton with a regular fit. Features a button-down collar and chest pocket for a timeless school-ready look.",
    price: 34.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
      "https://images.unsplash.com/photo-1564582562289-629e396a31af?w=600"
    ],
    colors: ["Navy", "Gray", "Burgundy"],
    sizes: ["4T", "5T", "6Y", "8Y", "10Y", "12Y", "14Y"],
    brand: "Regal Tailors",
    rating: 4.2,
    reviews: 52,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 80
  },
  {
    id: 46,
    name: "Girls Tutu Skirt",
    slug: "girls-tutu-skirt",
    category: "kids",
    subcategory: "clothing",
    type: "skirts",
    description: "Enchanting multi-layer tulle tutu skirt with a satin waistband and sparkle detail. Soft and comfortable for dress-up play or special occasions.",
    price: 34.99,
    discount: 10,
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a1ebeb8?w=600",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6c8?w=600"
    ],
    colors: ["Black", "White", "Burgundy"],
    sizes: ["2T", "3T", "4T", "5T", "6Y", "8Y", "10Y"],
    brand: "Vogue Craft",
    rating: 4.6,
    reviews: 78,
    isNew: true,
    isTrending: true,
    isSale: true,
    stock: 45
  },
  {
    id: 47,
    name: "Kids Polarized Sunglasses",
    slug: "kids-polarized-sunglasses",
    category: "kids",
    subcategory: "accessories",
    type: "sunglasses",
    description: "Durable polarized sunglasses designed for kids with impact-resistant polycarbonate lenses. Flexible frame with 100% UV protection for safe outdoor play.",
    price: 29.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    ],
    colors: ["Black", "Gold"],
    sizes: [],
    brand: "Apex Studio",
    rating: 4.1,
    reviews: 34,
    isNew: true,
    isTrending: false,
    isSale: false,
    stock: 95
  },
  {
    id: 48,
    name: "Warm Puffer Coat",
    slug: "warm-puffer-coat",
    category: "kids",
    subcategory: "clothing",
    type: "coats",
    description: "Insulated puffer coat with a water-resistant shell and detachable hood. Features reflective piping and a two-way zipper for easy dressing and visibility.",
    price: 89.99,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600"
    ],
    colors: ["Navy", "Black", "Forest Green"],
    sizes: ["4T", "5T", "6Y", "8Y", "10Y", "12Y", "14Y"],
    brand: "EliteWear Collection",
    rating: 4.5,
    reviews: 88,
    isNew: false,
    isTrending: false,
    isSale: true,
    stock: 35
  },
  {
    id: 49,
    name: "Character Belt Set",
    slug: "character-belt-set",
    category: "kids",
    subcategory: "accessories",
    type: "belts",
    description: "Adjustable webbing belt with a fun character buckle design. Set includes two interchangeable buckle styles for mix-and-match fun.",
    price: 24.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
      "https://images.unsplash.com/photo-1583746783675-19071a2e10f6?w=600"
    ],
    colors: ["Black", "Navy", "Gray"],
    sizes: ["2T", "3T", "4T", "6Y", "8Y"],
    brand: "Regal Tailors",
    rating: 4.0,
    reviews: 28,
    isNew: false,
    isTrending: false,
    isSale: false,
    stock: 120
  },
  {
    id: 50,
    name: "Toddler Soft Sole Shoes",
    slug: "toddler-soft-sole-shoes",
    category: "kids",
    subcategory: "shoes",
    type: "shoes",
    description: "Butter-soft leather baby shoes with a flexible non-slip suede sole. Elastic ankle opening ensures a secure fit for crawling and first walking steps.",
    price: 44.99,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"
    ],
    colors: ["White", "Beige", "Black"],
    sizes: ["2T", "3T", "4T", "5T"],
    brand: "Luxe Label",
    rating: 4.7,
    reviews: 112,
    isNew: true,
    isTrending: false,
    isSale: false,
    stock: 70
  }
];

function getProductById(id) {
  return products.find(p => p.id === id);
}

function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

function getProductsByType(type) {
  return products.filter(p => p.type === type);
}

function getNewProducts() {
  return products.filter(p => p.isNew);
}

function getTrendingProducts() {
  return products.filter(p => p.isTrending);
}

function getSaleProducts() {
  return products.filter(p => p.isSale);
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.subcategory.toLowerCase().includes(q) ||
    p.type.toLowerCase().includes(q)
  );
}

function getRelatedProducts(product, count = 4) {
  return products.filter(p =>
    p.id !== product.id &&
    (p.category === product.category || p.type === product.type)
  ).slice(0, count);
}

function getFilteredProducts(filters = {}) {
  let items = [...products];
  const { filter, category, limit, sort, minPrice, maxPrice, colors, sizes, search, brand } = filters;

  if (filter === 'new') items = items.filter(p => p.isNew);
  else if (filter === 'trending') items = items.filter(p => p.isTrending);
  else if (filter === 'sale') items = items.filter(p => p.isSale);
  else if (filter === 'featured') items = items.filter(p => p.isTrending || p.isNew);

  if (category) {
    const cats = category.split(',');
    items = items.filter(p => cats.includes(p.category));
  }
  if (minPrice) items = items.filter(p => p.price >= parseFloat(minPrice));
  if (maxPrice) items = items.filter(p => p.price <= parseFloat(maxPrice));
  if (colors) {
    const colorList = colors.split(',');
    items = items.filter(p => p.colors.some(c => colorList.includes(c.toLowerCase())));
  }
  if (sizes) {
    const sizeList = sizes.split(',');
    items = items.filter(p => p.sizes.some(s => sizeList.includes(s)));
  }
  if (search) items = searchProducts(search);
  if (brand) items = items.filter(p => p.brand.toLowerCase() === brand.toLowerCase());

  if (sort === 'price-low') items.sort((a, b) => a.price - b.price);
  else if (sort === 'price-high') items.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') items.sort((a, b) => b.rating - a.rating);
  else if (sort === 'newest') items.sort((a, b) => b.id - a.id);

  if (limit) items = items.slice(0, parseInt(limit));
  return items;
}

const reviews = [
  { id: 1, productId: 1, name: "James M.", rating: 5, title: "Exceptional quality", text: "The fabric is incredible and the tailoring is flawless. Worth every penny.", date: "2025-06-15" },
  { id: 2, productId: 1, name: "Sarah K.", rating: 4, title: "Beautiful blazer", text: "Great fit and lovely material. Runs slightly large.", date: "2025-05-20" },
  { id: 3, productId: 2, name: "Michael R.", rating: 5, title: "Perfect boots", text: "Most comfortable boots I own. The leather is premium quality.", date: "2025-06-01" },
  { id: 4, productId: 3, name: "Emma L.", rating: 5, title: "Stunning dress", text: "Got so many compliments! The silk is heavenly.", date: "2025-06-10" },
  { id: 5, productId: 4, name: "David P.", rating: 4, title: "Great jacket", text: "Warm, stylish, and well-made. Perfect for fall.", date: "2025-05-28" },
  { id: 6, productId: 5, name: "Olivia W.", rating: 5, title: "Love this sweater", text: "So soft and cozy. The cashmere blend is amazing.", date: "2025-06-05" },
  { id: 7, productId: 6, name: "Daniel C.", rating: 3, title: "Decent shoes", text: "Good quality but sizing runs small. Order up.", date: "2025-04-15" },
  { id: 8, productId: 7, name: "Sophia A.", rating: 5, title: "Timeless piece", text: "This bag is pure elegance. The craftsmanship is outstanding.", date: "2025-06-20" },
  { id: 9, productId: 8, name: "Alexander N.", rating: 4, title: "Solid watch", text: "Beautiful design and feels substantial. The strap took some breaking in.", date: "2025-05-10" },
  { id: 10, productId: 9, name: "Isabella F.", rating: 5, title: "Perfect for summer", text: "Light, breezy, and chic. My new favorite summer dress.", date: "2025-06-18" },
  { id: 11, productId: 10, name: "William T.", rating: 4, title: "Good quality", text: "The leather is excellent and the design is classic.", date: "2025-05-30" },
  { id: 12, productId: 11, name: "Mia S.", rating: 5, title: "Adorable!", text: "My daughter loves this outfit. Great quality for kids.", date: "2025-06-12" },
  { id: 13, productId: 12, name: "Ethan B.", rating: 4, title: "Nice coat", text: "Warm and stylish. Perfect for winter.", date: "2025-04-28" },
  { id: 14, productId: 13, name: "Charlotte H.", rating: 5, title: "Flawless", text: "The details on this dress are incredible. Feels custom-made.", date: "2025-06-08" },
  { id: 15, productId: 14, name: "Lucas M.", rating: 4, title: "Great sneakers", text: "Comfortable and stylish. True to size.", date: "2025-05-22" }
];

function getReviewsByProduct(productId) {
  return reviews.filter(r => r.productId === parseInt(productId));
}

function getAverageRating(productId) {
  const product = getProductById(productId);
  return product ? product.rating.toFixed(1) : "0.0";
}
