# Expense Tracker

## Overview
A full-stack web application for tracking personal expenses with user authentication, data visualization, and category-based expense management. Built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features
- User Authentication
  - Secure login and registration
  - JWT-based authentication
  - Protected routes
- Expense Management
  - Add new expenses with details (amount, category, date, notes)
  - Edit existing expenses
  - Delete expenses
  - Categorize expenses
- Data Visualization
  - Pie chart for expense distribution by category
  - Total expense summary
  - Category-wise breakdown
- Responsive Design
  - Mobile-friendly interface
  - Material-UI components
  - Clean and modern UI

## Tech Stack
### Frontend
- React.js
- Material-UI (MUI)
- Recharts for data visualization
- Axios for API calls
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing

## Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/expense-tracker.git
    ```

2. Navigate to the project directory:
    ```bash
    cd expense-tracker
    ```

3. Install backend dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory with the following variables:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    COOKIE_KEY=your_cookie_secret
    PORT=4000
    ```

5. Navigate to the client directory and install frontend dependencies:
    ```bash
    cd client
    npm install
    ```

## Usage

1. Start the backend server (from root directory):
    ```bash
    npm run dev
    ```

2. In a separate terminal, start the frontend development server:
    ```bash
    cd client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile

### Expenses
- `GET /api/expenses` - Get all expenses for logged-in user
- `POST /api/expenses` - Create new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

### User Profile
- `GET /api/users/me` - Get user profile
- `PUT /api/users/me` - Update user profile
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

