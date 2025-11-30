import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js'

var msg = document.getElementById('message')
var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')
var signupBtn = document.getElementById('signup')
var loginBtn = document.getElementById('login')
var logoutBtn = document.getElementById('logout')

var cfg = window.__FIREBASE_CONFIG__
var app
var auth
if (cfg) {
  try { console.log('Firebase config loaded', cfg) } catch (e) {}
  app = initializeApp(cfg)
  auth = getAuth(app)
} else {
  if (msg) {
    msg.textContent = 'Missing Firebase configuration'
    msg.className = 'message-error'
  }
}

function isValidEmail(value) {
  return value && value.indexOf('@') !== -1
}

function isValidPassword(value) {
  return value && value.length >= 6
}

if (signupBtn) {
  signupBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (!auth) return
    var email = emailInput ? emailInput.value : ''
    var password = passwordInput ? passwordInput.value : ''
    if (!isValidEmail(email)) {
      if (msg) { msg.textContent = 'Enter a valid email'; msg.className = 'message-error' }
      return
    }
    if (!isValidPassword(password)) {
      if (msg) { msg.textContent = 'Password must be at least 6 characters'; msg.className = 'message-error' }
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(function () {
        if (msg) { msg.textContent = 'Signed up successfully'; msg.className = 'message-success' }
        location.href = 'app.html'
      })
      .catch(function (err) {
        var t = err && err.code ? err.code : (err && err.message ? err.message : 'Error')
        var l = t.toLowerCase()
        if (l.indexOf('configuration-not-found') !== -1 || l.indexOf('configuration_not_found') !== -1) {
          t = 'Configuration not found. Serve from http://localhost and add your host to Authorized domains in Firebase.'
        }
        if (msg) { msg.textContent = t; msg.className = 'message-error' }
      })
  })
}

if (loginBtn) {
  loginBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (!auth) return
    var email = emailInput ? emailInput.value : ''
    var password = passwordInput ? passwordInput.value : ''
    if (!isValidEmail(email)) {
      if (msg) { msg.textContent = 'Enter a valid email'; msg.className = 'message-error' }
      return
    }
    if (!isValidPassword(password)) {
      if (msg) { msg.textContent = 'Password must be at least 6 characters'; msg.className = 'message-error' }
      return
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(function () {
        if (msg) { msg.textContent = 'Logged in successfully'; msg.className = 'message-success' }
        location.href = 'app.html'
      })
      .catch(function (err) {
        var t = err && err.code ? err.code : (err && err.message ? err.message : 'Error')
        var l = t.toLowerCase()
        if (l.indexOf('configuration-not-found') !== -1 || l.indexOf('configuration_not_found') !== -1) {
          t = 'Configuration not found. Serve from http://localhost and add your host to Authorized domains in Firebase.'
        }
        if (msg) { msg.textContent = t; msg.className = 'message-error' }
      })
  })
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    if (!auth) return
    signOut(auth)
      .then(function () {
        if (msg) { msg.textContent = 'Logged out'; msg.className = 'message-success' }
        location.href = 'index.html'
      })
      .catch(function (err) {
        if (msg) { msg.textContent = err.message; msg.className = 'message-error' }
      })
  })
}

if (auth) {
  onAuthStateChanged(auth, function (user) {
    var path = location.pathname.toLowerCase()
    if (user) {
      if (path.indexOf('index.html') !== -1) {
        location.href = 'app.html'
      }
    } else {
      if (path.indexOf('app.html') !== -1) {
        location.href = 'index.html'
      }
    }
  })
}
