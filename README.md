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

## Project Structure

expense-tracker/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── contexts/      # Context providers
│       ├── api.js         # API integration
│       └── App.js         # Main application
├── config/                # Backend configuration
├── middleware/           # Express middleware
├── models/              # Mongoose models
├── routes/              # API routes
└── index.js            # Backend entry point
```


## Docker Setup

1. Make sure you have Docker and Docker Compose installed on your system.

2. Clone the repository:
    ```bash
    git clone https://github.com/anubhav1242/expense-tracker.git
    ```

3. Navigate to the project directory:
    ```bash
    cd expense-tracker
    ```

4. Build and run the containers:
    ```bash
    docker-compose up --build
    ```

5. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000
   - MongoDB: mongodb://localhost:27017

6. To stop the containers:
    ```bash
    docker-compose down
    ```

### Docker Commands

- Build and start containers:
  ```bash
  docker-compose up --build
  ```

- Start containers in detached mode:
  ```bash
  docker-compose up -d
  ```

- Stop containers:
  ```bash
  docker-compose down
  ```

- View container logs:
  ```bash
  docker-compose logs
  ```

- View logs for a specific service:
  ```bash
  docker-compose logs [service_name]
  ```

- Remove all containers and volumes:
  ```bash
  docker-compose down -v
  ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.