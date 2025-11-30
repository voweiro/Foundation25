# Lab 16 – Mood Tracker: Auth Implementation Notes

## Overview

- Goal: add email/password authentication (signup, login, logout) and guard pages using `onAuthStateChanged`.
- Pages:
  - `index.html` (login/sign up)
  - `app.html` (mood tracking + logout)
- Logic lives in `auth.js` and uses Firebase modular SDK over CDN.

## Firebase Setup

- Configuration is exposed on `window.__FIREBASE_CONFIG__` in both pages before loading `auth.js`.
- App and Auth initialization: `initializeApp(cfg)` → `getAuth(app)` (`Labs/Lab16/auth.js:15–16`).
- CDN imports: `firebase-app.js` and `firebase-auth.js` v12.6.0 (`Labs/Lab16/auth.js:1–2`).

## Signup / Login / Logout

- Inputs read from `#email` and `#password`. Basic checks:
  - Email contains `@` (`Labs/Lab16/auth.js:24–26`).
  - Password length ≥ 6 (`Labs/Lab16/auth.js:28–30`).
- Signup: `createUserWithEmailAndPassword` then redirect to `app.html` (`Labs/Lab16/auth.js:46–53`).
- Login: `signInWithEmailAndPassword` then redirect to `app.html` (`Labs/Lab16/auth.js:71–78`).
- Logout: `signOut` then redirect to `index.html` (`Labs/Lab16/auth.js:85–92`).
- Feedback shown in `#message` with simple text and classes (`Labs/Lab16/auth.js:4`, `Labs/Lab16/styles.css`).

## What is `onAuthStateChanged`?

- An observer function from Firebase Auth that runs whenever the user’s sign-in state changes (initial load, login, logout, token refresh).
- It receives a `user` object when signed in, or `null` when signed out, letting you update UI or navigation.

## How I Used `onAuthStateChanged`

- Registered after Auth init: `onAuthStateChanged(auth, callback)` (`Labs/Lab16/auth.js:96–109`).
- Implemented simple route guards:
  - If signed in on `index.html` → redirect to `app.html` (`Labs/Lab16/auth.js:100–102`).
  - If signed out on `app.html` → redirect to `index.html` (`Labs/Lab16/auth.js:104–106`).
- This keeps pages aligned with current auth state even on refresh or direct navigation.

## Learnings

- What was easy:
  - Using modular CDN imports and calling the auth methods (`createUserWithEmailAndPassword`, `signInWithEmailAndPassword`, `signOut`).
  - Wiring up basic UI events to buttons and reading inputs.
  - Showing simple feedback in the page via a message element.

- What was challenging:
  - Understanding when to initialize Firebase and making sure the config exists before calling `initializeApp`.
  - Getting redirects right without causing loops; placing `onAuthStateChanged` once and keeping conditions simple.
  - Handling minimal validation while keeping code readable and beginner-friendly.

## How to Test

- Open `Labs/Lab16/index.html`.
- Sign up or log in with an email containing `@` and a password ≥ 6 characters.
- Confirm redirect to `app.html` and the ability to log out back to `index.html`.
- Navigate directly to `app.html` while signed out → should redirect to `index.html`.
- Navigate to `index.html` while signed in → should redirect to `app.html`.

