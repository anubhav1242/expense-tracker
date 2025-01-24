const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = (req, res, next) => {
  try {
    // First try passport authentication
    passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err) {
        console.error('Passport auth error:', err);
        return res.status(401).json({ message: 'Authentication failed' });
      }

      if (user) {
        req.userId = user._id;
        return next();
      }

      // Fallback to manual JWT check
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
      next();
    })(req, res, next);
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}; 