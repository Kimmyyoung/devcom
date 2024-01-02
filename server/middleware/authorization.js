const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;  

const authorization = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if(!token) {
      return res.sendStatus(401);
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    req.decoded = decoded;
    next();
  } catch (err) {
    res.sendStatus(401);
  }
}

module.export= authorization;
