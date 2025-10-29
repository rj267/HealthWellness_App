# 📘 Project Documentation — Health & Wellness App

## 📖 Overview

The **Health & Wellness App** is a MERN Stack-based wellness tracking application designed to promote healthy habits through a mix of modern analytics and traditional Ayurvedic principles.  
Users can identify their **Prakriti (Vata, Pitta, Kapha)**, track their water and sleep cycles, calculate BMI, and relax through meditation exercises.

---

## 🧠 Objective

The primary objective of this project is to create a **digital wellness companion** that:
- Tracks key health parameters (water intake, sleep hours, BMI)
- Identifies Ayurvedic body type for personalized recommendations
- Encourages mindfulness through meditation
- Provides an intuitive and visually engaging interface

---

## 🏗️ System Architecture

      ┌────────────────────────┐
      │        Frontend        │
      │  React + Vite + Tailwind│
      └──────────┬─────────────┘
                 │
       RESTful API Requests (Axios)
                 │
      ┌──────────┴─────────────┐
      │        Backend         │
      │ Node.js + Express.js   │
      └──────────┬─────────────┘
                 │
      ┌──────────┴─────────────┐
      │       Database         │
      │ MongoDB (optional)     │
      └────────────────────────┘

---

## ⚙️ Core Modules

### 🏠 Home Page
- Displays a welcome message and motivational quotes.
- Acts as the entry point to other modules.

### ⚙️ Tools Page
- Includes **BMI Calculator** to assess body mass index.
- Allows **Water Intake** and **Sleep Hours** input.
- Stores and displays user’s daily health data.

### 📊 Tracker Page
- Uses **Recharts (BarChart)** for visualizing water and sleep logs.
- Each entry is recorded by date.
- Displays trends for daily performance and consistency.

### 🌿 Prakriti Page
- Implements Ayurvedic **Dosha Analysis**.
- Displays **Pie Chart** using Recharts to visualize percentages of **Vata, Pitta, Kapha**.
- Helps users understand their body constitution for lifestyle alignment.

### 🧘 Meditation Page
- Provides **guided breathing exercise** (Inhale – Hold – Exhale).
- Encourages relaxation and stress reduction.

### 📬 Contact Page
- Submits user messages to backend using `/api/contact`.
- Backend stores them temporarily (in-memory for demo).

---

## 🔗 Backend API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/articles` | Returns list of wellness articles |
| `POST` | `/api/contact` | Accepts contact form data from frontend |

📌 **Example Contact Payload:**
```json
{
  "name": "Rijin Johnson",
  "email": "rijin@example.com",
  "message": "Loving this wellness app!"
}
| Layer               | Technologies                            |
| ------------------- | --------------------------------------- |
| **Frontend**        | React.js (Vite), Tailwind CSS, Recharts |
| **Backend**         | Node.js, Express.js                     |
| **Database**        | MongoDB (Future Implementation)         |
| **Language**        | JavaScript (ES6+)                       |
| **Version Control** | Git + GitHub                            |
| **Deployment**      | Netlify (Frontend) + Render (Backend)   |
[User Input] 
     ↓
[React Frontend] 
     ↓ API call
[Express Backend] 
     ↓
[Data Visualization → Recharts]
🧮 Sample Data Structures
🌊 Water & Sleep Tracker
{
  "date": "2025-10-28",
  "water": 8,
  "sleep": 7
}
🌿 Prakriti Result
{
  "Vata": 30,
  "Pitta": 40,
  "Kapha": 30
}
🚀 Future Enhancements

🔒 User authentication using JWT

☁️ MongoDB integration for persistent data storage

🤖 AI-based daily health suggestions

🔔 Notification system for hydration and sleep reminders

📱 Mobile app version using React Native

🧾 References

IBM MERN Stack Documentation (2024)

Ayurvedic Wellness Research Council (2022)

Recharts Official Docs (2023)

Express.js and Node.js Documentation

TailwindCSS Official Docs

👨‍💻 Author & Credits

Developed by: Rijin Johnson
Institution: Asha M. Tarsadia Institute of Computer Science and Technology
University: Uka Tarsadia University