
# 🔗 **URL Shortener Platform**

> **"Shorten, share, and track your links with ease!"** 🚀

[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Enabled-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🎯 **Why This Project?**

A modern, full-stack URL shortener that lets you create, manage, and track short links with analytics, QR codes, and user authentication. Built for speed, security, and scalability.

---

## 🚀 **Project Highlights**

| Feature | Description |
|---------|-------------|
| 🌐 **Live Deployment** | Production app deployed on Vercel at [url-shortner-sigma-ten.vercel.app](https://url-shortner-sigma-ten.vercel.app/) |
| 🔗 **Shorten URLs** | Instantly create short links for any URL |
| 👤 **User Auth** | Sign up, log in, and manage your links securely (Supabase Auth) |
| 📊 **Analytics** | Track clicks, device, and location stats for each link |
| 📱 **QR Codes** | Generate QR codes for every short link |
| 🗑️ **Link Management** | Edit, delete, and organize your links |
| 🌐 **SPA Routing** | Seamless navigation with React Router |
| 🎨 **Modern UI** | Responsive, accessible, and beautiful design |
| ☁️ **Cloud Hosted** | Deployed on Vercel for global reach |

---

## 🏗️ **Architecture Overview**
---

## 🎨 **Tech Stack**

- **Frontend:** React 19, Vite, Tailwind CSS, React Router
- **Backend:** Supabase (Database, Auth, Storage)
- **QR Codes:** react-qr-code, react-qrcode-logo
- **Analytics:** Custom click tracking, device & location stats
- **Deployment:** Vercel

---

## 📁 **Project Structure**

```
url-shortner-main/
├── public/                # Static assets
├── src/
│   ├── components/        # UI & feature components
│   ├── db/                # Supabase client & API wrappers
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # App layout components
│   ├── lib/               # Utility functions
│   ├── pages/             # Route-based pages
│   ├── App.jsx            # Main app entry
│   ├── main.jsx           # Vite entry point
│   └── ...
├── .env                   # Environment variables
├── package.json           # Dependencies & scripts
├── tailwind.config.js     # Tailwind CSS config
├── vercel.json            # Vercel SPA routing config
└── README.md              # Project documentation
```

---

## 🚦 **Quick Start Guide**

### **Prerequisites**
- Node.js (v18+ recommended)
- npm or yarn
- Supabase account & project

### **Setup**

```bash
# 1. Clone the repository
git clone https://github.com/Tushar6394/URL-SHORTNER.git
cd URL-SHORTNER

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env with your Supabase credentials:
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_KEY=your_supabase_anon_key
# REACT_APP_CLIENT_URL=http://localhost:5173

# 4. Start the development server
npm run dev
```

**App will be live at:** `http://localhost:5173`

---

## 🔑 **Environment Variables**

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
REACT_APP_CLIENT_URL=http://localhost:5173
```

---

## 🗄️ **Supabase Database Schema**

```sql
-- URLs Table
create table urls (
	id uuid primary key default uuid_generate_v4(),
	user_id uuid references auth.users(id),
	title text,
	original_url text not null,
	short_url text unique not null,
	custom_url text unique,
	qr text,
	created_at timestamp default now()
);

-- Clicks Table
create table clicks (
	id uuid primary key default uuid_generate_v4(),
	url_id uuid references urls(id),
	city text,
	country text,
	device text,
	created_at timestamp default now()
);
```

---

## 🌐 **Deployment (Vercel)**


1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com), import your repo, and set these environment variables in the dashboard:
	- `VITE_SUPABASE_URL`
	- `VITE_SUPABASE_KEY`
	- `REACT_APP_CLIENT_URL`
3. Deploy!

### **Live Production URL**
🌐 **https://url-shortner-sigma-ten.vercel.app/**

---

## 🤝 **Contributing**

We welcome contributions! To contribute:

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/your-feature
# 3. Make your changes and commit
git commit -m "feat: your feature"
# 4. Push and create a PR
git push origin feature/your-feature
```

- Follow best practices
- Add error handling
- Test thoroughly
- Update documentation

---

## 👨‍💻 **About the Developer**

**Tushar** - Full Stack Developer

**Mission:** Making link management simple, fast, and insightful for everyone.

---

## 📄 **License**

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 💭 **Future Roadmap**

### **Phase 1: Core Platform** ✅
- [x] User authentication (Supabase)
- [x] URL shortening
- [x] QR code generation
- [x] Click analytics

### **Phase 2: Enhanced Features** 🚧
- [ ] Custom short URLs
- [ ] Advanced analytics dashboard
- [ ] Bulk link management
- [ ] Team/collaborator support

### **Phase 3: Integrations & Scale** 🎯
- [ ] API for developers
- [ ] Mobile app
- [ ] Multi-language support
- [ ] More integrations (Slack, Zapier, etc.)

---

<div align="center">

### **Built with ❤️ by Tushar**

*"Every short link is a step toward a more connected web!"*

🔗🚀

</div>

```
┌──────────────────────────────────────────────┐
│                FRONTEND (Vite + React)      │
│  • User Auth (Supabase)                     │
│  • Link creation & management               │
│  • Analytics dashboard                      │
│  • QR code generation                       │
│  • Responsive UI (Tailwind CSS)             │
└──────────────────────────────────────────────┘
				↕ REST (Supabase JS)
┌──────────────────────────────────────────────┐
│                BACKEND (Supabase)           │
│  • Database: URLs, Clicks, Users            │
│  • Auth: Email/password, session mgmt       │
│  • Storage: QR code images                  │
└──────────────────────────────────────────────┘
				↕
┌──────────────────────────────────────────────┐
│                DEPLOYMENT (Vercel)          │
│  • CI/CD, hosting, env vars                 │
└──────────────────────────────────────────────┘
```
