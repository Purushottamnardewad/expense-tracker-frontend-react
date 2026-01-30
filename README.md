# Expense Tracker – React Frontend

This is the React version of the Expense Tracker frontend.  
It is built using Vite + React + React Router and communicates with the same Node.js backend using REST APIs.

The frontend allows users to log in, add expenses, view them in a table and see a pie chart showing category-wise spending.

---

## Features

- Login and Signup using JWT authentication
- Add expenses with category, amount, and comments
- View all expenses in a table
- Delete expenses
- Pie chart to visualize expenses by category
- Clean and simple UI

---

## Tech Used

- React
- Vite
- React Router
- Chart.js

---

## How to Run the Frontend

### Prerequisites
- Backend server should be running on port 5001
- Node.js installed

### Steps

From the frontend-react directory, run:
```bash
npm install
npm run dev
```
Then open in browser:
http://localhost:5173

---

## How Authentication Works
1. User logs in or signs up
2. JWT token is stored in localStorage
3. Token is sent with every protected API request
4. If token is missing or invalid, user is redirected to login

---

## Note
If something breaks during testing, clearing browser storage usually helps:
```bash
localStorage.clear()
```

---

## Output

<img width="1439" height="807" alt="Screenshot 2026-01-30 at 19 36 17" src="https://github.com/user-attachments/assets/cd780a18-cac7-47c2-b74e-2cc6bb44b1af" />
<img width="1440" height="809" alt="Screenshot 2026-01-30 at 19 36 45" src="https://github.com/user-attachments/assets/69b8f3cc-6c0f-4bac-af4f-c3b826ff9ca7" />
<img width="1440" height="778" alt="Screenshot 2026-01-30 at 19 38 18" src="https://github.com/user-attachments/assets/78fb89da-eafb-4d70-bdbf-e591e74b7508" />
