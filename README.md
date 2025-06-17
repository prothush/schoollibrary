# 📚 Library Management System

A full-stack Library Management System built for a school. The system allows users to browse, add, borrow, and manage books with role-based access. It features Firebase authentication, JWT protection, and MongoDB for backend data storage.

## 🔗 Live Website

[Live Site URL](https://schoollibrary.netlify.app/)  


---

## 🚀 Project Purpose

This web application streamlines the school’s library operations by enabling:
- Categorization and management of books
- Secure user registration and login
- Borrowing and returning books with live quantity updates
- Protected and personalized user experiences

---

## 🌟 Key Features

### 🔒 Authentication & Security
- Firebase email/password login
- Google social login
- JWT token-based route protection
- Environment variables to secure Firebase and MongoDB credentials

### 📚 Book Management
- Add, update, delete books (admin/user role-based)
- View all books with card/table toggle view
- Filter available books only
- Book rating display using `react-rating-stars-component`

### 📖 Borrowing System
- Borrow books with return date
- Auto-decrease/increase book quantity
- Prevent multiple borrowing of the same book at once
- View and return borrowed books

### 💻 UI & UX
- Fully responsive design (mobile/tablet/desktop)
- Eye-catching layout with meaningful content
- Smooth navigation with React Router DOM
- Dynamic document titles per route
- Animations with Framer Motion
- SweetAlerts & Toasts for UX feedback

### 🔄 Optional Enhancements (Implemented)
- ✅ Maximum 3 books per user borrow limit
- ✅ Swiper JS for homepage slider
- ✅ Axios interceptors for request/response control
- ✅ React Hook Form for robust form handling

---

## 🧪 Tech Stack

### Frontend
- React.js
- Tailwind CSS / DaisyUI
- Firebase Auth
- React Router DOM
- React Rating Stars Component
- React Hook Form
- Swiper JS
- Framer Motion
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (jsonwebtoken)
- CORS, dotenv

---
