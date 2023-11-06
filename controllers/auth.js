import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { signUpService } from '../services/authService.js'

const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { user, accessToken, refreshToken } = await signUpService(email, password);

        return res.status(201).json({
            success: true,
            data: {
                id: user.id,
                accessToken: accessToken,
                refreshToken: refreshToken,
            },
        });
    } catch (e) {
        res.status(502).json({ success: false, message: e.message });
    }
}

export default {
    singup
}