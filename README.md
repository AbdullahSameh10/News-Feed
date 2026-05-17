# 📰 News Feed App

A modern React news application that fetches and displays the latest headlines using the NewsAPI.  
Users can browse news by category, search for articles, and navigate through pages with a clean and responsive UI.

---

## 🚀 Live Demo

🔗 Deployed on Vercel:  
[https://news-feed-phi.vercel.app/](https://news-feed-phi.vercel.app/)

> ⚠️ **Important:** Due to NewsAPI restrictions, the deployed version may not work in production unless a paid NewsAPI plan is used.  
> The project works fully in **local development**.

---

## ✨ Features

- 🌍 Browse top headlines
- 🔍 Search for news articles
- 🗂️ Filter news by category
- 📄 Pagination support
- ⚡ Fast and responsive UI
- 🔐 Uses environment variables for API keys

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- CSS / MUI
- NewsAPI
- Vercel

---

## 🔑 Environment Variables

This project requires a **NewsAPI API key**.

### 1️⃣ Create your own API key
Visit: 

[https://newsapi.org](https://newsapi.org/)

### 2️⃣ Create a `.env` file in the root of the project
```env
VITE_NEWS_FEED_API_KEY=your_api_key_here
```

> ⚠️ Do NOT upload the `.env` file to GitHub.  
> It is already ignored using `.gitignore`.

---

## ⚠️ NewsAPI Limitation (Very Important)

The **free NewsAPI plan only allows requests from `localhost`**.

This means:
- ✅ The project works correctly in **local development**
- ❌ The project will fail in **production deployments** (Vercel, Netlify, etc.)

To make it work in production, one of the following is required:
- Upgrade to a **paid NewsAPI plan**
- Or use a **backend / serverless function** to proxy requests

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/AbdullahSameh10/News-Feed.git
cd News-Feed
```

### 2️⃣ Install dependencies
```bash
pnpm install
```

### 3️⃣ Run the project locally
```bash
npm install
```
OR
```bash
pnpm install
```

### 3️⃣ Run the project locally
```bash
npm dev
```
or
```bash
pnpm dev
```

The app will run on: [http://localhost:5173](http://localhost:5173)

(or the port shown in your terminal)

---

## 🚀 Deployment (Optional)

1. Upload the project to GitHub
2. Import the repository into Vercel
3. Add the same environment variable in:
   Project Settings → Environment Variables
4. Deploy

> ⚠️ Production deployment requires a paid NewsAPI plan.

---

## 🔒 Security Notes

- API keys are stored using environment variables
- `.env` files are excluded from version control
- Never expose private API keys publicly

---

## 👤 Author

**Abdullah Sameh**  
GitHub: https://github.com/AbdullahSameh10

---

## ⭐ Support

If you like this project, don’t forget to give it a ⭐ on GitHub! :)
