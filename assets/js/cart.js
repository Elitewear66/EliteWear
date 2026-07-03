class Cart {
  constructor() {
    this.items = this.loadCart();
    this.updateBadge();
  }

  loadCart() {
    try {
      const data = localStorage.getItem('elitewear_cart');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveCart() {
    localStorage.setItem('elitewear_cart', JSON.stringify(this.items));
    this.updateBadge();
    this.dispatchUpdate();
  }

  dispatchUpdate() {
    window.dispatchEvent(new CustomEvent('cart:updated', { detail: { items: this.items } }));
  }

  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  addItem(product, quantity = 1, size = null, color = null) {
    const sizeKey = size || 'default';
    const colorKey = color ? color.name || color : 'default';
    const existing = this.items.find(i =>
      i.id === product.id && i.size === sizeKey && i.color === (colorKey)
    );
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category,
        size: sizeKey,
        color: colorKey,
        quantity: quantity
      });
    }
    this.saveCart();
    this.showNotification(`${product.name} added to cart`, 'success');
  }

  removeItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  updateQuantity(index, quantity) {
    if (index >= 0 && index < this.items.length) {
      if (quantity <= 0) {
        this.removeItem(index);
      } else {
        this.items[index].quantity = quantity;
        this.saveCart();
      }
    }
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  updateBadge() {
    document.querySelectorAll('.cart-badge').forEach(el => {
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

  renderCartPage() {
    const container = document.querySelector('.cart-items-container');
    if (!container) return;
    if (this.items.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon"><i class="fas fa-shopping-bag"></i></div>
          <h2 class="empty-state-title">Your cart is empty</h2>
          <p class="empty-state-desc">Looks like you haven't added anything yet. Explore our collection.</p>
          <a href="shop.html" class="btn btn-primary">Shop Now</a>
        </div>`;
      document.querySelector('.cart-summary')?.remove();
      return;
    }
    let html = '<div class="cart-items">';
    this.items.forEach((item, index) => {
      html += `
        <div class="cart-item" data-index="${index}">
          <div class="cart-item-image"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
          <div class="cart-item-info">
            <h3 class="cart-item-info-name"><a href="product.html?id=${item.id}">${item.name}</a></h3>
            <p class="cart-item-info-meta">${item.size !== 'default' ? 'Size: ' + item.size : ''}${item.color !== 'default' ? ' | Color: ' + item.color : ''}</p>
            <div class="qty-selector">
              <button onclick="cart.updateQuantity(${index}, cart.items[${index}].quantity - 1)"><i class="fas fa-minus"></i></button>
              <input type="text" value="${item.quantity}" readonly>
              <button onclick="cart.updateQuantity(${index}, cart.items[${index}].quantity + 1)"><i class="fas fa-plus"></i></button>
            </div>
          </div>
          <div class="cart-item-total">
            <div>$${(item.price * item.quantity).toFixed(2)}</div>
            <button class="cart-item-remove" onclick="cart.removeItem(${index})"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
    this.renderCartSummary();
  }

  renderCartSummary() {
    const container = document.querySelector('.cart-summary');
    if (!container) return;
    const subtotal = this.getTotal();
    const shipping = subtotal >= 200 ? 0 : 15;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    container.innerHTML = `
      <h3 class="cart-summary-title">Order Summary</h3>
      <div class="cart-summary-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      <div class="cart-summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span></div>
      <div class="cart-summary-row"><span>Tax (8%)</span><span>$${tax.toFixed(2)}</span></div>
      <div class="cart-summary-row total"><span>Total</span><span class="amount">$${total.toFixed(2)}</span></div>
      <div class="coupon-input">
        <input type="text" placeholder="Coupon code" id="couponInput">
        <button onclick="alert('Coupon functionality coming soon!')">Apply</button>
      </div>
      <button class="checkout-btn" onclick="alert('Checkout functionality coming soon!')">Proceed to Checkout</button>`;
  }
}

const cart = new Cart();
