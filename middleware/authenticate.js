const jwt = require('jsonwebtoken');
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status().json({ message: "NO Token is provided" });
    }

    try {

        const decode = jwt.verify(token, process.env.SECURE_KEY);
        req.user = decode;
        next();

    } catch (error) {
        return res.status().json({ message: 'Invalide OR Invalid Token' });
    }

}

module.exports = authenticate;