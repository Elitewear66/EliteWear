class Auth {
  constructor() {
    this.currentUser = null;
    this.loadSession();
    this.updateUI();
  }

  loadSession() {
    try {
      const session = localStorage.getItem('elitewear_session');
      if (session) {
        this.currentUser = JSON.parse(session);
      }
    } catch {
      this.currentUser = null;
    }
  }

  saveSession() {
    if (this.currentUser) {
      localStorage.setItem('elitewear_session', JSON.stringify(this.currentUser));
    } else {
      localStorage.removeItem('elitewear_session');
    }
    this.updateUI();
  }

  getUsers() {
    try {
      return JSON.parse(localStorage.getItem('elitewear_users') || '[]');
    } catch {
      return [];
    }
  }

  saveUsers(users) {
    localStorage.setItem('elitewear_users', JSON.stringify(users));
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  register(name, email, password) {
    const users = this.getUsers();
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'An account with this email already exists.' };
    }
    const user = {
      id: Date.now(),
      name,
      email,
      password,
      createdAt: new Date().toISOString()
    };
    users.push(user);
    this.saveUsers(users);
    this.currentUser = { id: user.id, name: user.name, email: user.email };
    this.saveSession();
    return { success: true, message: 'Account created successfully!' };
  }

  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return { success: false, message: 'Invalid email or password.' };
    }
    this.currentUser = { id: user.id, name: user.name, email: user.email };
    this.saveSession();
    return { success: true, message: `Welcome back, ${user.name}!` };
  }

  logout() {
    this.currentUser = null;
    this.saveSession();
    window.location.href = 'index.html';
  }

  updateUI() {
    const userIcon = document.getElementById('userIcon');
    if (!userIcon) return;
    if (this.isLoggedIn()) {
      userIcon.innerHTML = `<i class="fas fa-user"></i><span style="font-size:0.65rem;margin-left:4px;color:var(--gold)">${this.currentUser.name.split(' ')[0]}</span>`;
      userIcon.href = '#';
      userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.isLoggedIn()) {
          if (confirm('Log out?')) this.logout();
        }
      });
    } else {
      userIcon.innerHTML = '<i class="fas fa-user"></i>';
      userIcon.href = 'login.html';
    }
  }

  renderLoginForm() {
    const container = document.getElementById('authContainer');
    if (!container) return;
    if (this.isLoggedIn()) {
      container.innerHTML = `
        <div class="auth-box" style="text-align:center">
          <div style="font-size:3rem;color:var(--gold);margin-bottom:1rem"><i class="fas fa-user-circle"></i></div>
          <h2 class="auth-title">Welcome, ${this.currentUser.name}!</h2>
          <p class="auth-subtitle">You are signed in as ${this.currentUser.email}</p>
          <button class="auth-btn" onclick="auth.logout()">Sign Out</button>
          <a href="index.html" class="btn btn-outline" style="margin-top:12px;width:100%">Continue Shopping</a>
        </div>`;
      return;
    }
    container.innerHTML = `
      <div class="auth-box">
        <h2 class="auth-title">Welcome Back</h2>
        <p class="auth-subtitle">Sign in to your EliteWear account</p>
        <form id="loginForm">
          <div class="form-group">
            <label for="loginEmail">Email</label>
            <input type="email" id="loginEmail" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="loginPassword">Password</label>
            <input type="password" id="loginPassword" placeholder="Enter your password" required>
          </div>
          <div class="form-options">
            <label class="form-remember"><input type="checkbox"> Remember me</label>
            <a href="#" class="form-link">Forgot password?</a>
          </div>
          <div id="loginError" style="color:#FF3B30;font-size:0.85rem;margin-bottom:12px;display:none"></div>
          <button type="submit" class="auth-btn">Sign In</button>
        </form>
        <div class="auth-divider">or continue with</div>
        <div class="auth-social">
          <button class="auth-social-btn" aria-label="Sign in with Google"><i class="fab fa-google"></i></button>
          <button class="auth-social-btn" aria-label="Sign in with Facebook"><i class="fab fa-facebook-f"></i></button>
          <button class="auth-social-btn" aria-label="Sign in with Apple"><i class="fab fa-apple"></i></button>
        </div>
        <p class="auth-footer-text">Don't have an account? <a href="register.html" class="form-link">Sign Up</a></p>
      </div>`;
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const error = document.getElementById('loginError');
      const result = this.login(email, password);
      if (result.success) {
        window.location.href = 'index.html';
      } else {
        error.textContent = result.message;
        error.style.display = 'block';
      }
    });
  }

  renderRegisterForm() {
    const container = document.getElementById('authContainer');
    if (!container) return;
    if (this.isLoggedIn()) {
      return this.renderLoginForm();
    }
    container.innerHTML = `
      <div class="auth-box">
        <h2 class="auth-title">Create Account</h2>
        <p class="auth-subtitle">Join EliteWear for exclusive access</p>
        <form id="registerForm">
          <div class="form-group">
            <label for="regName">Full Name</label>
            <input type="text" id="regName" placeholder="John Doe" required>
          </div>
          <div class="form-group">
            <label for="regEmail">Email</label>
            <input type="email" id="regEmail" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="regPassword">Password</label>
            <input type="password" id="regPassword" placeholder="Create a password" minlength="6" required>
          </div>
          <div class="form-group">
            <label for="regConfirm">Confirm Password</label>
            <input type="password" id="regConfirm" placeholder="Confirm your password" required>
          </div>
          <div id="registerError" style="color:#FF3B30;font-size:0.85rem;margin-bottom:12px;display:none"></div>
          <button type="submit" class="auth-btn">Create Account</button>
        </form>
        <div class="auth-divider">or sign up with</div>
        <div class="auth-social">
          <button class="auth-social-btn" aria-label="Sign up with Google"><i class="fab fa-google"></i></button>
          <button class="auth-social-btn" aria-label="Sign up with Facebook"><i class="fab fa-facebook-f"></i></button>
          <button class="auth-social-btn" aria-label="Sign up with Apple"><i class="fab fa-apple"></i></button>
        </div>
        <p class="auth-footer-text">Already have an account? <a href="login.html" class="form-link">Sign In</a></p>
      </div>`;
    document.getElementById('registerForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regName').value;
      const email = document.getElementById('regEmail').value;
      const password = document.getElementById('regPassword').value;
      const confirm = document.getElementById('regConfirm').value;
      const error = document.getElementById('registerError');
      if (password !== confirm) {
        error.textContent = 'Passwords do not match.';
        error.style.display = 'block';
        return;
      }
      const result = this.register(name, email, password);
      if (result.success) {
        window.location.href = 'index.html';
      } else {
        error.textContent = result.message;
        error.style.display = 'block';
      }
    });
  }
}

const auth = new Auth();
