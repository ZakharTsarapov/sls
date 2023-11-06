import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { HttpError } from '../helpers/index.js';

const signUp = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { user, access_token, refresh_token } = await signUpService(email, password);

        return res.status(201).json({
            success: true,
            data: {
                id: user.id,
                accessToken: access_token,
                refreshToken: refresh_token,
            },
        });
    } catch (e) {
        res.status(502).json({ success: false, message: e.message });
    }
}