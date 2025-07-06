# 📚 Minimal Library Management System

A modern, responsive, and feature-rich library management system built with **React**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**. This application allows users to manage a library of books—create, view, edit, and track borrowed books—with an intuitive and minimal UI.

> ✅ **Live Demo**: [cozy-lolly-358a4e.netlify.app](https://cozy-lolly-358a4e.netlify.app/)  
> 🚀 **Backend API Repo**: [b5a3-Library-Management-System](https://github.com/AyeshaSareen-Dev/b5a3-Library-Management-System-AyeshaSareen-Dev)  
> 🌐 **API Live URL**: [b5a3-library-management-system-ayes.vercel.app](https://b5a3-library-management-system-ayes.vercel.app/)

---

## ✨ Features

- 📖 Book CRUD operations
- 📦 Borrow management & summary view
- 🔍 Book filtering and pagination
- 🧾 Form validation with `zod` and `react-hook-form`
- 🧱 Modular UI components
- 🍞 Toast notifications with `react-toastify`
- ⚙️ API powered by ExpressJS (hosted separately)

---

## 📁 Project Structure

```
src/
├── api/                 # API controllers and RTK Query slices
├── assets/              # Static assets like images and Lottie animations
├── components/          # Reusable and feature-specific React components
│   ├── features/        # Books and borrow-related UI
│   ├── layout/          # Layouts like root and error pages
│   └── ui/              # Core UI primitives (button, select, dialog, etc.)
├── lib/                 # Schemas, validators, and utility functions
├── pages/               # Route pages (home, book pages, etc.)
├── providers/           # Context and wrapper providers
├── routes/              # Route configuration and metadata
├── store/               # Redux store configuration
├── App.tsx              # Root component
└── main.tsx             # Vite entry file
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19 + TypeScript**
- **Redux Toolkit** for state management
- **React Router v7** for routing
- **Tailwind CSS** with `daisyUI` for UI design
- **Radix UI** for accessible components
- **Lottie** animations
- **React Hook Form + Zod** for form handling & validation

### Backend
- **ExpressJS** (separate repo)
- Hosted on **Vercel** for the API and **Netlify** for the frontend

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/AyeshaSareen-Dev/b5a4-minimal-library-management-system.git
cd b5a4-minimal-library-management-system
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

> The app will be running on `http://localhost:5173`

---

## 🔗 API Integration

This frontend is connected to an ExpressJS backend hosted at:

```
https://b5a3-library-management-system-ayes.vercel.app/
```

You can find the API source code here:  
👉 [Backend Repository](https://github.com/AyeshaSareen-Dev/b5a3-Library-Management-System-AyeshaSareen-Dev)

---

## 📑 Scripts

| Command         | Description                   |
|----------------|-------------------------------|
| `npm run dev`  | Start local dev server        |
| `npm run build`| Build the project             |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks             |

---

## 🧪 Validation & Linting

- Strong typing via **TypeScript**
- Validation via **Zod**
- Linting powered by **ESLint** and **typescript-eslint**

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

If you find any bugs or have suggestions for improvement, feel free to [open an issue](https://github.com/AyeshaSareen-Dev/b5a4-minimal-library-management-system/issues) or submit a pull request.

---

## 👩‍💻 Author

Developed by [Ayesha Sareen](https://github.com/AyeshaSareen-Dev)