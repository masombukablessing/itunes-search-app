# 🎵 iTunes Search App – Full Stack React & Express Project

Welcome to the **iTunes Search App**, a full-stack web application built with **React (Frontend)** and **Express (Backend)**. This app connects to the **iTunes Search API**, allowing users to search for various media types and manage a temporary favourites list.

---

## 🌟 Features

- 🔍 Search for media by title/artist/term via the iTunes API
- 🎞 Select media types: music, movies, podcasts, audiobooks, TV shows, software, ebooks, etc.
- ❤️ Add and remove items from a live (in-memory) favourites list
- 🔐 JWT-protected backend API using Express + Node
- 💅 Responsive, clean interface built with React
- ⚙️ Fully documented and organized codebase

---

## 📦 Tech Stack

| Frontend        | Backend          | Tools/Services    |
|-----------------|------------------|-------------------|
| React.js        | Node.js + Express| iTunes API        |
| Axios           | JWT (jsonwebtoken)| Render (Hosting)  |
| CSS             | CORS              | GitHub            |

---

## 🖥️ Live Demo

**Frontend**: [https://your-frontend.onrender.com](https://your-frontend.onrender.com)  
**Backend**: [https://your-backend.onrender.com](https://your-backend.onrender.com)

> ⚠️ Note: You must manually update the JWT token in the frontend source (`App.js` or `.env`) for demo purposes.

---

## 🚀 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/itunes-search-app.git
cd itunes-search-app
```

---

### 2. Run the Backend (Express API)

```bash
cd server
npm install
node app.js
```

> This starts the backend on `http://localhost:5000`

#### 🔐 Generate a JWT Token

Create a file called `generateToken.js`:

```js
const jwt = require('jsonwebtoken');
const token = jwt.sign({ user: 'demo' }, 'secret123', { expiresIn: '2h' });
console.log(token);
```

Then run:

```bash
node generateToken.js
```

Copy the printed token for use in the frontend.

---

### 3. Run the Frontend (React)

```bash
cd ../client
npm install
npm start
```

> The frontend runs on `http://localhost:3000`

#### 🛠 Add the JWT Token

In `App.js`:

```js
const token = 'YOUR_JWT_TOKEN_HERE';
```

**OR** use a `.env` file:

```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_JWT=YOUR_JWT_TOKEN_HERE
```

Then in `App.js`, access it like:

```js
const token = process.env.REACT_APP_JWT;
```

---

## ⚙️ Deployment Guide

### ✅ Deploy Backend to Render

1. Go to [https://render.com](https://render.com) → click **New Web Service**
2. Set **Root Directory** to `/server`
3. Build Command: `npm install`
4. Start Command: `node app.js`
5. Add the following environment variable:
   - `SECRET_KEY=secret123`

---

### ✅ Deploy Frontend to Render

1. Click **New Static Site**
2. Set **Root Directory** to `/client`
3. Build Command: `npm run build`
4. Publish Directory: `build`
5. Make sure to update API URLs in your frontend to point to the deployed backend

---

## 📂 Project Structure

```
itunes-search-app/
├── client/         # React Frontend
│   └── src/
│       ├── App.js
│       ├── App.css
│       └── index.js
├── server/         # Express Backend
│   ├── app.js
│   ├── routes/search.js
│   └── generateToken.js
├── README.md
└── package.json
```

---

## 🧪 Testing & Debugging

- Test backend API directly using Postman or curl:

```bash
curl -H "Authorization: yourTokenHere" "http://localhost:5000/api/search?term=drake&media=music"
```

- Use browser DevTools to inspect frontend errors (check 401 or CORS issues)
- Ensure CORS is enabled in Express (`app.use(cors())`)
- Regenerate your token if it expires (they're time-limited)

---

## ✅ Capstone Checklist

- [x] React UI with search and media selector
- [x] Results from iTunes API displayed attractively
- [x] Add/remove favourites functionality
- [x] JWT-secured Express backend
- [x] No authentication or persistent data needed
- [x] Local and cloud deployment support
- [x] Clean README documentation

---

## 🙌 Acknowledgments

- [iTunes Search API Documentation](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/)
- [React Documentation](https://react.dev/)
- [Express Documentation](https://expressjs.com/)
- [Render](https://render.com/)

---

## 📄 License

This project is part of the **HyperionDev Full Stack Web Developer Capstone Project** and is provided for educational purposes only.