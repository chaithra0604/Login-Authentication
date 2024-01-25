const jwt = require('jsonwebtoken');

function verifiedToken(req,res,next){
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({ error : "access denied"});
    }
    try {
        const decoded = jwt.verify(token,'secret key');
        req.userId=decoded.userId;
        next();
    } catch (error) {
        //console.log(error);
        res.status(401).json({ error : "invalid token"});
    }
}

module.exports = verifiedToken;