
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
