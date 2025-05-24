# URL Shortener App

A modern, full-stack URL shortener built with React (Vite + TailwindCSS) for the frontend.

---

## Features

- **Shorten URLs:** Instantly generate a short code for any long URL.
- **Top URLs:** View a dynamic, auto-sorted list of the most clicked short URLs.
- **Copy to Clipboard:** Easily copy your short URL with one click.
- **Smart Redirect:** Visiting `/shortcode` in the browser automatically redirects to the original URL.
- **Modern UI:** Responsive and clean design.

---

## Tech Stack

- **Frontend:** React (Vite), TailwindCSS, TypeScript

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/mazc1995/mazc1995-fs-challenge-front.git
cd mazc1995-fs-challenge-front
```

### 2. Install dependencies

#### Frontend

```sh
npm install
```
### 3. Start the servers

```sh
npm run dev
```

## Usage

### Shorten a URL

1. Go to the homepage.
2. Paste your long URL and click **Shorten URL**.
3. Copy the generated short URL and share it!

### Redirect

- Visit `http://localhost:5173/{shortcode}` in your browser.
- You will be redirected to the original URL in a new tab.

### View Top URLs

- Click on **Top URLs** in the navbar to see the most popular links, sorted by click count.

---

## Development Notes

- The frontend uses React Router for dynamic routing.
- All state and UI logic is handled client-side for a smooth SPA experience.

---

## Author

- [Mario Andrés Zambrano](https://github.com/mazc1995)
