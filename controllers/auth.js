import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import authService from '../services/authService.js'

const singup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { user, accessToken, refreshToken } = await authService.singUpService(email, password);

        return res.status(201).json({
            success: true,
            data: {
                id: user.id,
                accessToken,
                refreshToken
            },
        });
    } catch (e) {
        res.status(409).json({ success: false, message: e.message });
    }
}

const singin = async (req, res) => {
    const { email, password } = req.body

    try {
        const { user, accessToken, refreshToken } = await authService.singInService(email, password)

        return res.status(200).json({
            success: true,
            data: {
                id: user.id,
                accessToken,
                refreshToken
            }
        })
    } catch(e) {
        res.status(404).json({ success: false, message: e.message})
    }
}

const refresh = async( req, res) => {
    const { refreshToken } = req.body

    try {
        const { id, accessToken } = await authService.refreshService(refreshToken);
        return res.status(200).json({
            success: true, 
            data: {
                id,
                accessToken
            }
        }) 
    } catch(e) {
        res.status(404).json({ success: false, message: e.message})
    }
}

export default {
    singup,
    singin,
    refresh
}