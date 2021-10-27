const jswt = require("jsonwebtoken");
exports.createJWT = (email, userId, duration) => {
    const payload = {
        email,
        userId,
        duration
    };
    try {
        return jswt.sign(payload, process.env.TOKEN_SECRET, {
            expiresIn: duration,
        });
    }
    catch(e) {
        console.error(e);
        throw e;
    }
};