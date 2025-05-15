# AI Background Removal App 🧠🖼️

An AI-powered full-stack SaaS application that allows users to remove image backgrounds effortlessly using the ClipDrop API. Built with **Vite + React** (frontend), **Node.js + Express** (backend), **MongoDB Atlas** (database), and **Clerk** (authentication).

> 🟢 **Completed on:** May 15, 2025

---

## 🚀 Features

- 🔐 Secure authentication via **Clerk**
- 🖼️ Upload images and remove backgrounds using **ClipDrop API**
- 📥 Download processed images directly
- 💳 Purchase credit plans (payment placeholder setup)
- 📊 Real-time credit balance tracking
- 🎨 Fully responsive UI with Tailwind CSS
- 📦 Backend deployed on Render, frontend on Vercel

---

## 🛠️ Tech Stack

**Frontend:**
- Vite + React
- React Router DOM
- Tailwind CSS
- React Toastify
- Clerk (authentication)

**Backend:**
- Node.js + Express
- MongoDB Atlas
- Mongoose
- Multer (image upload)
- Axios + FormData
- ClipDrop API
- Clerk Webhooks
- Hosted on Render

---

## 📂 Project Structure
```
bg-removal/
├── client/ # Frontend (Vite + React)
├── server/ # Backend (Node + Express)
├── .env # Environment variables
```

---

## 🔑 Environment Variables

**Frontend (\`.env\`):**


VITE_BACKEND_URL=https://your-backend-url.vercel.app

VITE_CLERK_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxx



**Backend (\`.env\`):**

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bg-removal

CLERK_WEBHOOK_SECRET=whsec_...

CLIPDROP_API=your_clipdrop_key

PORT=4000

---

## 🖼️ Screenshots

<img width="1511" alt="Screenshot 2025-05-15 at 1 12 00 PM" src="https://github.com/user-attachments/assets/331dd969-805d-4a51-880f-852f2408edac" />

<img width="1512" alt="Screenshot 2025-05-15 at 1 14 26 PM" src="https://github.com/user-attachments/assets/294f8359-0428-44b9-bf82-b54376c03192" />

<img width="1512" alt="Screenshot 2025-05-15 at 1 14 45 PM" src="https://github.com/user-attachments/assets/dd1d083a-5327-4d3b-9a2e-aa59d270f9c4" />

<img width="1512" alt="Screenshot 2025-05-15 at 1 15 02 PM" src="https://github.com/user-attachments/assets/06bef081-b940-4b4c-a3e6-dda0eec0c074" />

<img width="1512" alt="Screenshot 2025-05-15 at 1 16 08 PM" src="https://github.com/user-attachments/assets/57f9493b-f8e9-4df9-ad2c-556fb9a96a52" />

<img width="1512" alt="Screenshot 2025-05-15 at 1 16 29 PM" src="https://github.com/user-attachments/assets/9f08660c-24f7-4efc-b62d-c74ce6b1229f" />


---

## 🔗 Live Demo

- **Frontend (Vercel):** https://noorbuilds-bgremoval.vercel.app/
- **Backend (Render):** https://noorbuilds-bg-removal.vercel.app/

---

## 🤝 Acknowledgements

- [ClipDrop API](https://clipdrop.co/apis)
- [Clerk](https://clerk.dev)
- [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 📌 Future Improvements

- 🔄 Integrate Stripe or Razorpay for credit purchases
- 🧠 Add image history and preview

