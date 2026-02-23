# 🎓 College Management System

A full-stack college management web application with a **public website**, **student portal**, and **admin dashboard**. Built with **React** on the frontend and **Express.js + MySQL** on the backend.

---

## 📸 Features

### 🌐 Public Website
- **Hero Section** — Attractive landing banner
- **About** — College overview and information
- **Directors** — Profiles of the college directors
- **Faculty** — Faculty member listings
- **Results** — Student results display
- **Contact** — Enquiry form for visitors

### 🎓 Student Portal
- Secure login with class credentials
- Personal dashboard with marks and details

### 🔐 Admin Dashboard
- Admin authentication (JWT-based)
- **Manage Classes** — Create & manage class sections
- **Marks Management** — Upload and manage student marks
- **Enquiries** — View and respond to contact form submissions

---

## 🛠️ Tech Stack

| Layer        | Technology                                                     |
| ------------ | -------------------------------------------------------------- |
| **Frontend** | React 19, Vite, Tailwind CSS 4, React Router 7, Lucide Icons  |
| **Backend**  | Express.js 5, Node.js                                         |
| **Database** | MySQL (via mysql2)                                             |
| **Auth**     | JSON Web Tokens (jsonwebtoken), bcrypt                         |
| **Other**    | PapaParse (CSV parsing), Swiper (carousels), jwt-decode        |

---

## 📁 Project Structure

```
college-backend-frontend/
├── college-project/
│   ├── college-backend/          # Express.js API server
│   │   ├── config/
│   │   │   └── jwt.js            # JWT secret config
│   │   ├── database/
│   │   │   └── db.js             # MySQL connection pool
│   │   ├── middleware/            # Auth & validation middleware
│   │   ├── routes/
│   │   │   ├── adminAuth.js      # POST /api/admin/login
│   │   │   ├── adminMarks.js     # Admin marks CRUD
│   │   │   ├── adminClasses.js   # Admin class management
│   │   │   ├── adminEnquiries.js # Enquiry management
│   │   │   ├── auth.js           # Student login
│   │   │   ├── classMarks.js     # Student marks retrieval
│   │   │   └── marks.js          # Marks utilities
│   │   ├── hash.js               # Password hashing utility
│   │   ├── server.js             # App entry point
│   │   └── package.json
│   │
│   └── college-frontend/         # React + Vite SPA
│       ├── public/
│       ├── src/
│       │   ├── components/       # Public website sections
│       │   │   ├── Navbar.jsx
│       │   │   ├── Hero.jsx
│       │   │   ├── About.jsx
│       │   │   ├── Faculty.jsx
│       │   │   ├── Results.jsx
│       │   │   ├── Directors.jsx
│       │   │   ├── Contact.jsx
│       │   │   └── Footer.jsx
│       │   ├── class/            # Student portal
│       │   │   ├── ClassLogin.jsx
│       │   │   └── ClassDashboard.jsx
│       │   ├── admin/            # Admin dashboard
│       │   │   ├── AdminLogin.jsx
│       │   │   ├── AdminLayout.jsx
│       │   │   ├── AdminHome.jsx
│       │   │   ├── ManageClasses.jsx
│       │   │   ├── Enquiries.jsx
│       │   │   └── Marks.jsx
│       │   ├── utils/            # Auth helpers
│       │   ├── routes/           # Route configs
│       │   ├── styles/           # Additional styles
│       │   ├── assets/           # Static assets
│       │   ├── App.jsx           # Root component & routing
│       │   └── main.jsx          # App entry point
│       ├── vite.config.js
│       ├── tailwind.config.js
│       └── package.json
│
├── vercel.json                   # Vercel deployment config
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or later)
- **MySQL** (v8 or later)
- **npm** or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/Gopulucky/college-backend-frontend.git
cd college-backend-frontend
```

### 2. Set Up the Database

Create a MySQL database named `college_db`:

```sql
CREATE DATABASE college_db;
```

> Update the credentials in `college-project/college-backend/database/db.js` if your MySQL user/password differs from the defaults.

### 3. Start the Backend

```bash
cd college-project/college-backend
npm install
node server.js
```

The API server starts at **http://localhost:5000**.

### 4. Start the Frontend

```bash
cd college-project/college-frontend
npm install
npm run dev
```

The dev server starts at **http://localhost:5173**.

---

## 🔗 API Endpoints

| Method | Endpoint                    | Description              |
| ------ | --------------------------- | ------------------------ |
| POST   | `/api/admin/login`          | Admin login              |
| GET    | `/api/admin/marks`          | Get all marks (admin)    |
| POST   | `/api/admin/marks`          | Upload marks (admin)     |
| GET    | `/api/admin/classes`        | List classes             |
| POST   | `/api/admin/classes`        | Create a class           |
| GET    | `/api/enquiry`              | List enquiries           |
| POST   | `/api/enquiry`              | Submit an enquiry        |
| POST   | `/api/class/login`          | Student login            |
| GET    | `/api/class/marks`          | Get marks (student)      |

---

## 🌍 Deployment

### Frontend (Vercel)

The project includes a `vercel.json` configured to deploy the React frontend:

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel will auto-detect the config and deploy

> **Note:** The `vercel.json` is set to build the frontend from `college-project/college-frontend/`. All routes are rewritten to `index.html` for SPA client-side routing.

### Backend

The backend requires a **MySQL database** and should be deployed to a server that supports Node.js (e.g., Railway, Render, or a VPS). It cannot run on Vercel's serverless platform as-is because it relies on persistent MySQL connections.

---

## 📄 License

This project is for **educational purposes**.

---

## 👥 Authors

- **Gopulucky** — [GitHub](https://github.com/Gopulucky)
