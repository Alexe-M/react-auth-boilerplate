# React Frontend - Authentication Boilerplate

## 🚀 Overview
This is a **React.js** frontend project built as part of a training program to demonstrate user authentication with a **Rails API**. It includes features such as signup, login, logout, and password recovery using JWT authentication.

## 🛠 Tech Stack
- **React.js (Vite)**
- **React Router** (Navigation)
- **Axios** (API Requests)

## 📌 Features
- User authentication (Signup, Login, Logout)
- JWT Token-based authentication
- Password recovery (Request reset & update password)
- Protected routes for authenticated users

## 📂 Project Setup

To run the project locally:
```sh
$ pnpm install
$ pnpm dev
```

Ensure the backend API is running and accessible at the configured URL.

## 🔑 Authentication Flow

### ➤ **User Signup**
- Fills out the signup form
- Sends request to `/users`
- Stores the JWT token in `localStorage`

### ➤ **User Login**
- Sends credentials to `/users/sign_in`
- Stores received JWT token
- Redirects user to the home page

### ➤ **User Logout**
- Calls `/users/sign_out`
- Removes JWT token from `localStorage`
- Redirects user to login page

### ➤ **Password Recovery**
- Requests password reset link via `/users/password`
- Updates password through a form