# ☕ Coffee Shop App

A full stack mobile application built with **React Native (Expo)**, **Node.js**, and **MongoDB**.
Users can view the full coffee menu, get a random “Surprise Me” item, and interact with a clean, professional UI.

## 🎬 YouTube Demo

Watch the full walkthrough of the Coffee Shop App:

👉 **YouTube Video:** *https://youtube.com/shorts/AqCmowROEa8?si=miRTE_Lup_WusZg9*


## 📱 Download APK

You can install the Coffee Shop App on Android using the link below:

👉 **Download APK:**  
https://expo.dev/accounts/sana-crypto/projects/frontend/builds/f8b859df-2410-4896-9d29-123080ab7af7


## 🚀 Tech Stack

### **Frontend**

* React Native (Expo)
* TypeScript
* Axios

### **Backend**

* Node.js (Express)
* MongoDB (Mongoose + Atlas)

## 📦 Backend Setup

### 1️⃣ Install dependencies

```sh
cd backend
npm install
```

### 2️⃣ Add environment variables

Create file: `backend/.env`

```
MONGO_URI=your_mongodb_atlas_connection_string
```

### 3️⃣ Start backend locally

```sh
node server.js
```

Backend runs at:

```
http://localhost:3000
```

## 📱 Frontend (Expo) Setup

### 1️⃣ Install dependencies

```sh
cd frontend
npm install
```

### 2️⃣ Start development server

```sh
npm start
```

## 📡 API Endpoints

### 🔸 GET `/menu`

Returns complete coffee menu.

**Response:**

```json
{
  "success": true,
  "data": [...]
}
```

### 🔸 GET `/menu/random`

Returns a random in-stock item.

**Response:**

```json
{
  "success": true,
  "data": { ... }
}
```

---

## ✨ Features

* Full menu fetched from MongoDB
* Surprise Me → Random in-stock drink
* Professional UI & dark coffee theme
* Works on web, emulator, and physical phone

## 🧑‍💻 Author

**Sana Batool**
Full Stack / Mobile Developer

## ⭐ Support This Project

If you like this project, please **star ⭐ the repo** it helps me grow!

Just say: **Add banner**, **Add badges**, or **Add screenshots section**!
