const jwt = require("jsonwebtoken");
const blacklistedTokens = new Set();

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Extract token

    if (!token) return res.status(401).json({ message: "Access Denied: No Token Provided" });

    if (blacklistedTokens.has(token)) {
        return res.status(403).json({ message: "Token is invalidated (logged out)" });
    }

    jwt.verify(token, process.env.SECURE_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid Token" });

        req.user = user; // Attach user payload to request object
        next();
    });
};

module.exports = authenticateToken;
