# 🚀 CryptoPlace – Real-Time Financial Cryptocurrency Tracker

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Google Charts](https://img.shields.io/badge/Google%20Charts-Integrated-4285F4?style=for-the-badge&logo=google&logoColor=white)
![CoinGecko API](https://img.shields.io/badge/CoinGecko_API-v3-8CC63F?style=for-the-badge&logo=coingecko&logoColor=white)

**CryptoPlace** is a high-performance, real-time financial cryptocurrency tracking web application built using **React.js (Vite)** and context-driven state management. It monitors **250+ digital assets** by consuming the **CoinGecko REST API**, providing live price metrics, 24-hour fluctuations, market capitalization rankings, and interactive multi-day historical charts.

**Live Demo-** https://cryptoplace-using-react.vercel.app/

---

## ✨ Key Features & Highlights
* **📈 Real-Time Financial Tracking:** Live tracking of cryptocurrency market prices, 24H High/Low statistics, and total market capitalization across multiple fiat currencies (**INR ₹, USD $, EUR €**).
* **🔍 Instant Search & Autocomplete:** Dynamic search functionality filtering hundreds of cryptocurrencies instantly with `<datalist>` autocomplete suggestions.
* **📊 Interactive Historical Charts:** Integrated with **Google Charts (`react-google-charts`)** to visualize 10-day historical price fluctuations with responsive rendering.
* **⚡ Optimized Client-Side Caching & Context:** Utilizes React's `Context API` (`CoinContext`) to centralize state management and prevent redundant API polling across routes.
* **📱 100% Responsive Grid Layout:** Mobile-first design architecture using CSS Grid & Flexbox, delivering seamless UI/UX across mobile, tablet, and desktop form factors.

---

## 🛠️ Technical Stack & Architecture
* **Frontend Framework:** React.js (v18) + Vite Bundler
* **State Management:** React Context API (`createContext`, `useContext`)
* **Routing:** React Router DOM (v6) (`<BrowserRouter>`, `<Link>`, `useParams`)
* **Data Visualization:** React Google Charts (`LineChart`)
* **External API Integration:** CoinGecko RESTful API (`/coins/markets`, `/coins/{id}/market_chart`)
* **Styling & CSS:** Custom CSS3 with CSS Variables, Flexbox, and Grid Layouts

---


## 🚀 Getting Started & Local Installation

### 1. Clone the Repository
```bash
git clone https://github.com/PrajapatiPankaj1/Cryptoplace-using-React.git
cd Cryptoplace-using-React
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application locally.

### 4. Build for Production
```bash
npm run build
```

## 👨‍💻 Author & Engineering Contact
**Pankaj Prajapati**
*Aspiring Full-Stack Software Engineer (B.Tech CSE, 2025)*
* **GitHub:** [https://github.com/PrajapatiPankaj1](https://github.com/PrajapatiPankaj1)
* **Email:** pankajprajapati9764@gmail.com
