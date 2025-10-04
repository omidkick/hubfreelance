# HubFreelance

HubFreelance is a full-stack freelancing platform where project owners can create projects and freelancers can submit proposals.  
The app includes authentication, profile management, payment integration, and an intuitive UI built with React + Tailwind CSS.

## 🚀 Tech Stack

### Frontend
- [React](https://reactjs.org/) (with Vite)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Axios for API calls
- Context API / State management

### Backend
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
- Authentication with JWT (Access & Refresh tokens)
- [Kavenegar API](https://kavenegar.com/) (SMS verification)
- [Zarinpal Payment Gateway](https://www.zarinpal.com/) (payment processing)
- Cookie-based sessions
- Error handling with `http-errors`

---

## 📂 Project Structure

hubfreelance/
├── backend/ # Express + MongoDB server
│ ├── router/ # API routes
│ ├── models/ # Mongoose models
│ ├── controllers/ # Route controllers
│ ├── middlewares/ # Custom middlewares
│ ├── Application.js # Main Express application class
│ └── server.js # Server entrypoint
│
├── frontend/ # React + Vite client
│ ├── src/ # Components, hooks, pages
│ ├── public/ # Static assets
│ └── vite.config.js
│
└── README.md # Project documentation


---

## ⚙️ Environment Variables

### Backend `.env`
```env
APP_DB=mongodb://localhost:27017/react-freelancer-app
KAVENEGAR_API_KEY=your_kavenegar_api_key
ACCESS_TOKEN_SECRET_KEY=your_access_token_secret
REFRESH_TOKEN_SECRET_KEY=your_refresh_token_secret
COOKIE_PARSER_SECRET_KEY=your_cookie_secret
TOKEN_SECRET_KEY=your_token_secret
ZARINPAL_CALLBACK_URL=/api/payment/verify
CLIENT_URL=http://localhost:3000
SERVER_URL=http://localhost:5000
NODE_ENV=development
PORT=5000
ALLOW_CORS_ORIGIN=http://localhost:3000,http://localhost:4173
DOMAIN=localhost

### Frontend.env.production.local

VITE_BASE_URL=http://localhost:5000/api


▶️ Getting Started
1. Clone the repo
git clone https://github.com/omidkick/hubfreelance.git
cd hubfreelance

2. Install dependencies
## Backend
cd backend
npm install

## Frontend
cd frontend
npm install

3. Run the app
Start backend (Express server)
cd backend
npm run dev

Start frontend (React app)
cd frontend
npm run dev

-------------------------------------
🔑 Features

🔐 Authentication (JWT-based with refresh tokens, secure cookies)

👤 User Profiles (project owners & freelancers)

📁 Projects & Proposals system

💳 Payment Integration (Zarinpal)

📱 SMS Verification (Kavenegar)

🎨 Modern UI (React + Tailwind, responsive design)

⚡ Fast Development (Vite bundler)

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a PR or issue on GitHub Issues
.

📜 License

This project is licensed under the MIT License – see the LICENSE
 file for details.


---

This is **production-level**:  
- Documents backend + frontend clearly.  
- Explains `.env` usage.  
- Professional structure + deployment notes.  
- Clean sections (Tech Stack, Features, etc.).  

👉 Do you want me to also include **example API endpoints (like `/api/user/profile`, `/api/auth/register`)** in the README, so new developers/testers can test your backend quickly?


