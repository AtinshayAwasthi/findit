// auth.js

// DOM Elements
const authForm = document.getElementById('auth-form');
const formTitle = document.getElementById('form-title');
const toggleLink = document.getElementById('switch-to-signup');

// Form Toggle Logic
toggleLink.addEventListener('click', (event) => {
  event.preventDefault();
  if (formTitle.textContent === 'Login') {
    formTitle.textContent = 'Sign Up';
    authForm.innerHTML = `
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required>
      </div>
      <button type="submit" class="custom-button">Sign Up</button>
    `;
    toggleLink.textContent = 'Already have an account? Login here.';
  } else {
    formTitle.textContent = 'Login';
    authForm.innerHTML = `
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required>
      </div>
      <button type="submit" class="custom-button">Login</button>
    `;
    toggleLink.textContent = "Don't have an account? Sign up here.";
  }
});
