document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initHeroSlider();
  loadProductSections();
  initAccordions();
  initCountdown();
  initQuantitySelectors();
  initScrollAnimation();
  initShopPage();
  initProductPage();
  initAuthPage();
  initCartPage();
  initWishlistPage();
});

const colorMap = {
  'black': '#0a0a0a', 'white': '#ffffff', 'navy': '#1a1a3e', 'beige': '#d4c5a9',
  'burgundy': '#800020', 'grey': '#808080', 'gray': '#808080', 'gold': '#d4af37',
  'brown': '#8B4513', 'camel': '#c19a6b', 'forest green': '#228b22', 'pink': '#ffb6c1',
  'red': '#dc143c', 'blue': '#1e90ff', 'olive': '#808000', 'tan': '#d2b48c',
  'charcoal': '#36454f', 'cream': '#fffdd0', 'ivory': '#fffff0', 'maroon': '#800000',
  'wine': '#722f37', 'khaki': '#c3b091', 'coral': '#ff7f50', 'teal': '#008080',
  'rose gold': '#b76e79'
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getColorHex(colorName) {
  return colorMap[colorName.toLowerCase()] || '#cccccc';
}

function computeBadge(product) {
  if (product.isNew) return { type: 'new', text: 'New' };
  if (product.isTrending) return { type: 'trending', text: 'Trending' };
  if (product.isSale) return { type: 'sale', text: 'Sale' };
  return null;
}

function computeOriginalPrice(product) {
  if (product.discount > 0) {
    return product.price / (1 - product.discount / 100);
  }
  return null;
}

function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-overlay');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
  if (overlay) {
    overlay.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  const dropdownToggles = mobileMenu.querySelectorAll('.nav-dropdown > .nav-link');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const menu = toggle.nextElementSibling;
      if (menu) menu.classList.toggle('open');
    });
  });
}

function initHeroSlider() {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.hero-slide');
  const dots = slider.querySelectorAll('.hero-dot');
  const prev = slider.querySelector('.hero-nav-prev');
  const next = slider.querySelector('.hero-nav-next');
  let current = 0;
  let interval;

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function nextSlide() { goToSlide(current + 1); }
  function prevSlide() { goToSlide(current - 1); }

  if (dots.length) {
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { goToSlide(i); resetInterval(); });
    });
  }
  if (prev) prev.addEventListener('click', () => { prevSlide(); resetInterval(); });
  if (next) next.addEventListener('click', () => { nextSlide(); resetInterval(); });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 6000);
  }

  interval = setInterval(nextSlide, 6000);
}

function loadProductSections() {
  document.querySelectorAll('.products-grid[data-filter]').forEach(grid => {
    const filter = grid.dataset.filter;
    const limit = grid.dataset.limit || 8;
    const category = grid.dataset.category || null;
    const filters = { filter, limit };
    if (category) filters.category = category;
    const items = getFilteredProducts(filters);
    grid.innerHTML = items.map(renderProductCard).join('');
  });
}

function renderProductCard(product) {
  const badge = computeBadge(product);
  const badgeHTML = badge ? `<span class="product-card-badge badge-${badge.type}">${badge.text}</span>` : '';
  const originalPrice = computeOriginalPrice(product);
  const originalPriceHTML = originalPrice ? `<span class="product-card-price-original">$${originalPrice.toFixed(2)}</span>` : '';
  const stars = renderStars(product.rating);
  const inWishlist = wishlist.isInWishlist(product.id);
  const categoryName = capitalize(product.category);
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-card-image">
        <a href="product.html?id=${product.id}"><img src="${product.images[0]}" alt="${product.name}" loading="lazy"></a>
        ${badgeHTML}
        <div class="product-card-actions">
          <button class="product-card-action-btn ${inWishlist ? 'active' : ''}" onclick="handleWishlistToggle(${product.id}); this.classList.toggle('active')" aria-label="Add to wishlist">
            <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
          </button>
          <button class="product-card-action-btn" onclick="handleAddToCart(${product.id})" aria-label="Add to cart">
            <i class="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
      <div class="product-card-body">
        <p class="product-card-category">${categoryName}</p>
        <h3 class="product-card-name"><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="product-card-rating">${stars}<span>(${product.reviews})</span></div>
        <div class="product-card-price">
          <span class="product-card-price-current">$${product.price.toFixed(2)}</span>
          ${originalPriceHTML}
        </div>
        <button class="product-card-add-cart" onclick="handleAddToCart(${product.id})">Add to Cart</button>
      </div>
    </div>`;
}

function handleWishlistToggle(productId) {
  const product = getProductById(productId);
  if (product) wishlist.toggleItem(product);
}

function handleAddToCart(productId) {
  const product = getProductById(productId);
  if (product) cart.addItem(product);
}

function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars += '<i class="fas fa-star"></i>';
    else if (rating >= i - 0.5) stars += '<i class="fas fa-star-half-alt"></i>';
    else stars += '<i class="far fa-star"></i>';
  }
  return stars;
}

function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      if (!item) return;
      item.classList.toggle('active');
    });
  });
}

function initCountdown() {
  const countdown = document.querySelector('.countdown');
  if (!countdown) return;

  function updateCountdown() {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const diff = Math.max(0, end - now);
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    const pad = n => String(n).padStart(2, '0');
    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');
    if (daysEl) daysEl.textContent = pad(d);
    if (hoursEl) hoursEl.textContent = pad(h);
    if (minutesEl) minutesEl.textContent = pad(m);
    if (secondsEl) secondsEl.textContent = pad(s);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function initQuantitySelectors() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.qty-selector button');
    if (!btn) return;
    const selector = btn.closest('.qty-selector');
    const input = selector ? selector.querySelector('input') : null;
    if (!input) return;
    let val = parseInt(input.value) || 1;
    if (btn.innerHTML.includes('minus') || btn.innerHTML.includes('fa-minus')) {
      val = Math.max(1, val - 1);
    } else {
      val = Math.min(99, val + 1);
    }
    input.value = val;
    input.dispatchEvent(new Event('change'));
  });
}

function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

function initShopPage() {
  const grid = document.querySelector('.shop-products-grid');
  if (!grid) return;

  const sidebar = document.querySelector('.shop-sidebar');
  const filterOverlay = document.querySelector('.shop-sidebar-overlay');
  const filterBtn = document.querySelector('.mobile-filter-btn');

  if (filterBtn && sidebar) {
    filterBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      if (filterOverlay) filterOverlay.classList.toggle('active');
    });
    if (filterOverlay) {
      filterOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        filterOverlay.classList.remove('active');
      });
    }
  }

  function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    const filters = {};
    params.forEach((value, key) => { filters[key] = value; });
    return filters;
  }

  function applyFilters() {
    const filters = getURLParams();
    const items = getFilteredProducts(filters);
    const total = items.length;
    const limit = parseInt(filters.limit) || 12;
    const page = parseInt(filters.page) || 1;
    const start = (page - 1) * limit;
    const pageItems = items.slice(start, start + limit);

    grid.innerHTML = pageItems.map(renderProductCard).join('');

    const resultsEl = document.querySelector('.shop-results');
    if (resultsEl) {
      resultsEl.textContent = `Showing ${start + 1}-${Math.min(start + limit, total)} of ${total} results`;
    }

    renderPagination(total, limit, page);
    renderActiveFilters(filters);
  }

  function renderPagination(total, limit, currentPage) {
    const container = document.querySelector('.pagination');
    if (!container) return;
    const pages = Math.ceil(total / limit);
    if (pages <= 1) { container.innerHTML = ''; return; }
    let html = `<button ${currentPage <= 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})"><i class="fas fa-chevron-left"></i></button>`;
    for (let i = 1; i <= pages; i++) {
      html += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    html += `<button ${currentPage >= pages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})"><i class="fas fa-chevron-right"></i></button>`;
    container.innerHTML = html;
  }

  window.changePage = function(page) {
    const params = new URLSearchParams(window.location.search);
    params.set('page', page);
    window.history.pushState({}, '', `${window.location.pathname}?${params}`);
    applyFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function renderActiveFilters(filters) {
    const container = document.querySelector('.active-filters');
    if (!container) return;
    const exclude = ['page', 'limit'];
    const entries = Object.entries(filters).filter(([k]) => !exclude.includes(k));
    if (!entries.length) { container.innerHTML = ''; return; }
    container.innerHTML = entries.map(([key, val]) =>
      `<span class="active-filter-tag">${key}: ${val} <i class="fas fa-times" onclick="removeFilter('${key}')"></i></span>`
    ).join('');
  }

  window.removeFilter = function(key) {
    const params = new URLSearchParams(window.location.search);
    params.delete(key);
    params.delete('page');
    window.history.pushState({}, '', `${window.location.pathname}${params.toString() ? '?' + params : ''}`);
    applyFilters();
  };

  document.querySelectorAll('.filter-checkbox input').forEach(cb => {
    cb.addEventListener('change', () => {
      const params = new URLSearchParams(window.location.search);
      const group = cb.closest('[data-filter-group]');
      const key = group ? group.dataset.filterGroup : 'category';
      const checked = document.querySelectorAll(`[data-filter-group="${key}"] input:checked`);
      if (checked.length) {
        params.set(key, Array.from(checked).map(c => c.value).join(','));
      } else {
        params.delete(key);
      }
      params.delete('page');
      window.history.pushState({}, '', `${window.location.pathname}?${params}`);
      applyFilters();
      if (window.innerWidth <= 992 && sidebar) {
        sidebar.classList.remove('active');
        if (filterOverlay) filterOverlay.classList.remove('active');
      }
    });
  });

  document.querySelectorAll('.sort-select').forEach(select => {
    select.addEventListener('change', () => {
      const params = new URLSearchParams(window.location.search);
      params.set('sort', select.value);
      params.delete('page');
      window.history.pushState({}, '', `${window.location.pathname}?${params}`);
      applyFilters();
    });
  });

  const colorSwatches = document.querySelectorAll('.color-swatches .color-swatch');
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      const params = new URLSearchParams(window.location.search);
      const color = swatch.dataset.color;
      const current = params.get('colors');
      const colors = current ? current.split(',') : [];
      const idx = colors.indexOf(color);
      if (idx >= 0) { colors.splice(idx, 1); } else { colors.push(color); }
      if (colors.length) params.set('colors', colors.join(','));
      else params.delete('colors');
      params.delete('page');
      window.history.pushState({}, '', `${window.location.pathname}?${params}`);
      applyFilters();
    });
  });

  document.querySelectorAll('.view-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-toggle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      grid.className = `products-grid shop-products-grid ${view}-view`;
    });
  });

  function initPriceFilter() {
    const minInput = document.querySelector('.price-range-inputs input:first-child');
    const maxInput = document.querySelector('.price-range-inputs input:last-child');
    if (!minInput || !maxInput) return;
    function applyPrice() {
      const params = new URLSearchParams(window.location.search);
      const min = parseFloat(minInput.value);
      const max = parseFloat(maxInput.value);
      if (min && !isNaN(min)) params.set('minPrice', min);
      else params.delete('minPrice');
      if (max && !isNaN(max)) params.set('maxPrice', max);
      else params.delete('maxPrice');
      params.delete('page');
      window.history.pushState({}, '', `${window.location.pathname}?${params}`);
      applyFilters();
    }
    minInput.addEventListener('change', applyPrice);
    maxInput.addEventListener('change', applyPrice);
  }

  initPriceFilter();

  const params = getURLParams();
  if (params.category) {
    document.querySelectorAll('.filter-checkbox input').forEach(cb => {
      cb.checked = params.category.split(',').includes(cb.value);
    });
  }
  if (params.sort) {
    document.querySelectorAll('.sort-select').forEach(sel => sel.value = params.sort);
  }

  applyFilters();
  window.addEventListener('popstate', applyFilters);
}

function initProductPage() {
  const detail = document.querySelector('.product-detail');
  if (!detail) return;
  const productId = detail.dataset.productId || getURLParam('id');
  if (!productId) return;
  const product = getProductById(parseInt(productId));
  if (!product) {
    detail.innerHTML = '<div class="empty-state"><h2>Product not found</h2><a href="shop.html" class="btn btn-primary">Back to Shop</a></div>';
    return;
  }
  renderProductDetail(product);
  renderProductReviews(product);
  loadRelatedProducts(product);
}

function getURLParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderProductDetail(product) {
  document.title = `${product.name} - EliteWear`;
  const stars = renderStars(product.rating);
  const originalPrice = computeOriginalPrice(product);
  const originalPriceHTML = originalPrice ? `<span class="product-info-price-original">$${originalPrice.toFixed(2)}</span>` : '';
  const discountHTML = product.discount ? `<span class="product-info-price-discount">${product.discount}% OFF</span>` : '';
  const inWishlist = wishlist.isInWishlist(product.id);
  const categoryName = capitalize(product.category);

  const breadcrumbCategory = document.querySelector('.breadcrumb .category-link');
  const breadcrumbCurrent = document.querySelector('.breadcrumb .current');
  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = categoryName;
    breadcrumbCategory.href = `shop.html?category=${product.category}`;
  }
  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = product.name;
  }

  const thumbnails = product.images.map((img, i) =>
    `<div class="product-thumbnail ${i === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')"><img src="${img}" alt="${product.name}"></div>`
  ).join('');

  const colors = product.colors.map(c =>
    `<div class="color-swatch" style="background:${getColorHex(c)}" data-color="${c}" onclick="selectColor(this)" title="${c}"></div>`
  ).join('');

  const sizes = product.sizes.map(s =>
    `<button class="size-option" onclick="selectSize(this)">${s}</button>`
  ).join('');

  const features = [
    `Premium ${product.brand} craftsmanship`,
    `Available in ${product.colors.length} color${product.colors.length !== 1 ? 's' : ''}`,
    product.discount > 0 ? `Save ${product.discount}% off the regular price` : 'Full retail value',
    `Free shipping on orders over $200`,
    `30-day hassle-free returns`
  ];

  const accordionHTML = `
    <div class="accordion-item active">
      <button class="accordion-header">Description <i class="fas fa-chevron-down"></i></button>
      <div class="accordion-body"><div class="accordion-body-inner">${product.description}</div></div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header">Features <i class="fas fa-chevron-down"></i></button>
      <div class="accordion-body"><div class="accordion-body-inner"><ul>${features.map(f => '<li>' + f + '</li>').join('')}</ul></div></div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header">Size Guide <i class="fas fa-chevron-down"></i></button>
      <div class="accordion-body"><div class="accordion-body-inner"><p>Our sizes run true to standard US sizing. Refer to our detailed size chart for exact measurements. For tailored items, we recommend ordering your usual size. If you're between sizes, we suggest sizing up for a more comfortable fit.</p><br><p>Need help? Contact our <a href="#" style="color:var(--gold)">customer service team</a> for personalized size recommendations.</p></div></div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header">Shipping Info <i class="fas fa-chevron-down"></i></button>
      <div class="accordion-body"><div class="accordion-body-inner"><p>Free standard shipping on all orders over $200. Express shipping available for $15. Orders are processed within 1-2 business days. International shipping available to select countries.</p><br><p>Estimated delivery times:</p><ul><li>Standard: 5-8 business days</li><li>Express: 2-3 business days</li><li>International: 7-14 business days</li></ul></div></div>
    </div>`;

  const metaDetails = `
    <div class="product-info-meta-item"><i class="fas fa-truck"></i> Free shipping on orders over $200</div>
    <div class="product-info-meta-item"><i class="fas fa-undo"></i> 30-day easy returns</div>
    <div class="product-info-meta-item"><i class="fas fa-shield-alt"></i> 2-year warranty</div>`;

  detail.innerHTML = `
    <div class="container">
      <div class="product-detail-layout">
        <div class="product-gallery">
          <div class="product-main-image" id="mainImage">
            <img src="${product.images[0]}" alt="${product.name}" id="mainProductImage">
          </div>
          <div class="product-thumbnails">${thumbnails}</div>
        </div>
        <div class="product-info">
          <span class="product-info-badge">${categoryName}</span>
          <h1 class="product-info-name">${product.name}</h1>
          <div class="product-info-rating">${stars}<span>${product.rating} (${product.reviews} reviews)</span></div>
          <div class="product-info-price">
            <span class="product-info-price-current">$${product.price.toFixed(2)}</span>
            ${originalPriceHTML}${discountHTML}
          </div>
          <p class="product-info-desc">${product.description}</p>
          <div class="product-info-colors">
            <p class="product-info-label">Color</p>
            <div class="color-swatches">${colors}</div>
          </div>
          <div class="product-info-sizes">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <p class="product-info-label">Size</p>
              <a href="#" class="size-guide-link" onclick="event.preventDefault();document.querySelector('.accordion-item:nth-child(3) .accordion-header')?.click()">Size Guide</a>
            </div>
            <div class="size-options">${sizes}</div>
          </div>
          <div class="product-info-qty">
            <p class="product-info-label">Quantity</p>
            <div class="qty-selector">
              <button><i class="fas fa-minus"></i></button>
              <input type="text" value="1" readonly>
              <button><i class="fas fa-plus"></i></button>
            </div>
          </div>
          <div class="product-info-actions">
            <button class="btn btn-primary" id="addToCartBtn"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
            <button class="btn-wishlist ${inWishlist ? 'active' : ''}" id="wishlistBtn"><i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i></button>
          </div>
          <div class="product-info-meta">${metaDetails}</div>
        </div>
      </div>
      <div class="product-accordion">${accordionHTML}</div>
      <div class="reviews-section" id="reviewsSection"></div>
      <div class="related-products section-products">
        <h2 class="section-title">Complete the Look</h2>
        <div class="section-divider"></div>
        <div class="products-grid related-products-grid"></div>
      </div>
      <div class="recently-viewed section-products alt-bg">
        <h2 class="section-title">Recently Viewed</h2>
        <div class="section-divider"></div>
        <div class="products-grid recently-viewed-grid"></div>
      </div>
    </div>`;

  const mainContainer = document.getElementById('mainImage');
  const mainImg = document.getElementById('mainProductImage');
  if (mainContainer && mainImg) {
    mainContainer.addEventListener('mousemove', (e) => {
      const rect = mainContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImg.style.transformOrigin = `${x}% ${y}%`;
      mainContainer.classList.add('zoomed');
    });
    mainContainer.addEventListener('mouseleave', () => {
      mainContainer.classList.remove('zoomed');
    });
  }

  const addBtn = document.getElementById('addToCartBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const qtyInput = document.querySelector('.qty-selector input');
      const qty = parseInt(qtyInput ? qtyInput.value : 1) || 1;
      const activeColor = document.querySelector('.product-info-colors .color-swatch.active');
      const activeSize = document.querySelector('.size-option.active');
      const color = activeColor ? activeColor.dataset.color : null;
      const size = activeSize ? activeSize.textContent.trim() : null;
      cart.addItem(product, qty, size, color);
    });
  }

  const wishBtn = document.getElementById('wishlistBtn');
  if (wishBtn) {
    wishBtn.addEventListener('click', () => {
      wishlist.toggleItem(product);
      wishBtn.classList.toggle('active');
      const icon = wishBtn.querySelector('i');
      if (icon) {
        icon.className = wishlist.isInWishlist(product.id) ? 'fas fa-heart' : 'far fa-heart';
      }
    });
  }

  initAccordions();
}

window.changeMainImage = function(el, src) {
  document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const mainImg = document.getElementById('mainProductImage');
  if (mainImg) mainImg.src = src;
};

window.selectColor = function(el) {
  document.querySelectorAll('.product-info-colors .color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
};

window.selectSize = function(el) {
  document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
};

function renderProductReviews(product) {
  const container = document.getElementById('reviewsSection');
  if (!container) return;
  const productReviews = getReviewsByProduct(product.id);
  const avgRating = getAverageRating(product.id);

  let reviewsHTML = '';
  if (productReviews.length) {
    reviewsHTML = productReviews.map(r => {
      const initials = r.name.split(' ').map(n => n[0]).join('');
      return `
        <div class="review-card">
          <div class="review-card-header">
            <div class="review-card-author">
              <div class="review-card-avatar">${initials}</div>
              <div>
                <div class="review-card-name">${r.name}</div>
                <div class="review-card-date">${new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              </div>
            </div>
            <div class="review-card-stars">${renderStars(r.rating)}</div>
          </div>
          <h4 class="review-card-title">${r.title}</h4>
          <p class="review-card-text">${r.text}</p>
        </div>`;
    }).join('');
  }

  container.innerHTML = `
    <div class="reviews-header">
      <div class="reviews-average">
        <span class="reviews-average-number">${avgRating}</span>
        <div>
          <div class="reviews-average-stars">${renderStars(parseFloat(avgRating))}</div>
          <span class="reviews-average-text">Based on ${productReviews.length} reviews</span>
        </div>
      </div>
      <button class="btn btn-outline" onclick="document.querySelector('.review-form')?.scrollIntoView({behavior:'smooth'})">Write a Review</button>
    </div>
    ${reviewsHTML}
    <div class="review-form">
      <h3 class="review-form-title">Write a Review</h3>
      <form onsubmit="event.preventDefault(); alert('Review submitted! Thank you for your feedback.'); this.reset()">
        <div class="form-group">
          <label>Your Rating</label>
          <div class="star-rating-input">
            <input type="radio" name="rating" id="star5" value="5"><label for="star5" title="5 stars"><i class="fas fa-star"></i></label>
            <input type="radio" name="rating" id="star4" value="4"><label for="star4" title="4 stars"><i class="fas fa-star"></i></label>
            <input type="radio" name="rating" id="star3" value="3"><label for="star3" title="3 stars"><i class="fas fa-star"></i></label>
            <input type="radio" name="rating" id="star2" value="2"><label for="star2" title="2 stars"><i class="fas fa-star"></i></label>
            <input type="radio" name="rating" id="star1" value="1"><label for="star1" title="1 star"><i class="fas fa-star"></i></label>
          </div>
        </div>
        <div class="form-group">
          <label for="reviewTitle">Review Title</label>
          <input type="text" id="reviewTitle" placeholder="Give your review a title" required>
        </div>
        <div class="form-group">
          <label for="reviewText">Your Review</label>
          <textarea id="reviewText" placeholder="Share your experience with this product" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit Review</button>
      </form>
    </div>`;
}

function loadRelatedProducts(product) {
  const relatedGrid = document.querySelector('.related-products-grid');
  if (relatedGrid) {
    const related = getRelatedProducts(product, 4);
    relatedGrid.innerHTML = related.map(renderProductCard).join('');
  }

  const recentGrid = document.querySelector('.recently-viewed-grid');
  if (recentGrid) {
    const recent = getFilteredProducts({ filter: 'featured', limit: 4 }).filter(p => p.id !== product.id).slice(0, 4);
    recentGrid.innerHTML = recent.map(renderProductCard).join('');
  }
}

function initAuthPage() {
  if (document.getElementById('authContainer')) {
    const isLogin = window.location.pathname.includes('login.html') || window.location.pathname.includes('login');
    if (isLogin) auth.renderLoginForm();
    else auth.renderRegisterForm();
  }
}

function initCartPage() {
  if (document.querySelector('.cart-items-container')) {
    cart.renderCartPage();
  }
}

function initWishlistPage() {
  if (document.querySelector('.wishlist-container')) {
    wishlist.renderWishlistPage();
  }
}
