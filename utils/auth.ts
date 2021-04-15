const jswt = require("jsonwebtoken");
exports.createJWT = (email, userId, duration) => {
    const payload = {
        email,
        userId,
        duration
    };
    return jswt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: duration,
    });
};