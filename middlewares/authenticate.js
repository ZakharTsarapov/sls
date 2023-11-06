import 'dotenv/config';
import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
    try {
        const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer') {
        throw HttpError(401, 'Not authorized');
      }

      const auth = jwt.verify(token, process.env.JWT_SECRET);
      req.userInfo = auth;
      next();
    } catch(error) {
        return res.status(403).json({
            success: false,
            error: 'invalid token',
        })
    }
}

export default authenticate;