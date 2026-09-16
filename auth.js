// ---- Modal open/close ----
function openAuthModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
}
function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}
function showRegister() {
  document.getElementById('auth-login-view').classList.add('hidden');
  document.getElementById('auth-register-view').classList.remove('hidden');
}
function showLogin() {
  document.getElementById('auth-register-view').classList.add('hidden');
  document.getElementById('auth-login-view').classList.remove('hidden');
}

// ---- API calls ----
async function doLogin() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');
  errEl.textContent = '';

  const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  if (data.success) {
    location.reload();
  } else {
    errEl.textContent = data.error || 'Login failed';
  }
}

async function doRegister() {
  const username = document.getElementById('register-username').value.trim();
  const password = document.getElementById('register-password').value;
  const errEl = document.getElementById('register-error');
  errEl.textContent = '';

  const res = await fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  if (data.success) {
    location.reload();
  } else {
    errEl.textContent = data.error || 'Registration failed';
  }
}

async function doLogout() {
  await fetch('/logout', { method: 'POST' });
  location.reload();
}

// ---- Check login state on page load ----
fetch('/me')
  .then(res => res.json())
  .then(user => {
    const area = document.getElementById('auth-area');
    if (user.loggedIn) {
      area.innerHTML = `
        <span class="auth-name">${user.username}</span>
        <button class="btn btn-primary" onclick="doLogout()">Logout</button>
      `;
    }
  })
  .catch(() => {});
