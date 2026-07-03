class Wishlist {
  constructor() {
    this.items = this.loadWishlist();
    this.updateBadge();
  }

  loadWishlist() {
    try {
      const data = localStorage.getItem('elitewear_wishlist');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveWishlist() {
    localStorage.setItem('elitewear_wishlist', JSON.stringify(this.items));
    this.updateBadge();
  }

  getItemCount() {
    return this.items.length;
  }

  isInWishlist(productId) {
    return this.items.some(item => item.id === parseInt(productId));
  }

  toggleItem(product) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index >= 0) {
      this.items.splice(index, 1);
      this.saveWishlist();
      this.showNotification(`${product.name} removed from wishlist`, 'info');
      return false;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category
      });
      this.saveWishlist();
      this.showNotification(`${product.name} added to wishlist`, 'success');
      return true;
    }
  }

  removeItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      this.saveWishlist();
    }
  }

  clearWishlist() {
    this.items = [];
    this.saveWishlist();
  }

  updateBadge() {
    document.querySelectorAll('.wishlist-badge').forEach(el => {
      const count = this.getItemCount();
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  showNotification(message, type = 'success') {
    const notif = document.createElement('div');
    notif.className = 'notification show';
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    notif.innerHTML = `<i class="fas ${icons[type] || icons.info} notification-icon ${type}"></i><span class="notification-text">${message}</span>`;
    document.body.appendChild(notif);
    setTimeout(() => {
      notif.classList.remove('show');
      setTimeout(() => notif.remove(), 300);
    }, 3000);
  }

  renderWishlistPage() {
    const container = document.querySelector('.wishlist-container');
    if (!container) return;
    if (this.items.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon"><i class="fas fa-heart"></i></div>
          <h2 class="empty-state-title">Your wishlist is empty</h2>
          <p class="empty-state-desc">Save your favorite items and come back to them later.</p>
          <a href="shop.html" class="btn btn-primary">Explore Collection</a>
        </div>`;
      return;
    }
    let html = '<div class="wishlist-grid">';
    this.items.forEach((item, index) => {
      html += `
        <div class="product-card" data-index="${index}">
          <div class="product-card-image">
            <a href="product.html?id=${item.id}"><img src="${item.image}" alt="${item.name}" loading="lazy"></a>
            <div class="product-card-actions" style="opacity:1;transform:none">
              <button class="product-card-action-btn active" onclick="wishlist.removeItem(${index}); wishlist.renderWishlistPage()" aria-label="Remove from wishlist">
                <i class="fas fa-heart"></i>
              </button>
              <button class="product-card-action-btn" onclick="const p = getProductById(${item.id}); if(p){cart.addItem(p)}" aria-label="Add to cart">
                <i class="fas fa-shopping-bag"></i>
              </button>
            </div>
          </div>
          <div class="product-card-body">
            <p class="product-card-category">${item.category}</p>
            <h3 class="product-card-name"><a href="product.html?id=${item.id}">${item.name}</a></h3>
            <div class="product-card-price">
              <span class="product-card-price-current">$${item.price.toFixed(2)}</span>
            </div>
          </div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
  }
}

const wishlist = new Wishlist();
