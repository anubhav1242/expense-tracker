const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const auth = require('./middleware/auth');

// Load environment variables first
dotenv.config();

// Check required environment variables
const requiredEnvVars = ['MONGO_URI', 'JWT_SECRET', 'COOKIE_KEY'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`${envVar} is not defined in the .env file`);
    process.exit(1);
  }
}

// Require passport after environment variables are loaded
const passport = require('./config/passport');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.COOKIE_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Define the port
const PORT = process.env.PORT || 4000;

// Database connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful DB connection
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process on connection failure
  });

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API');
});

const expenseRoutes = require('./routes/expenseRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Use the expense routes
app.use('/api/expenses', auth, expenseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', auth, userRoutes);
