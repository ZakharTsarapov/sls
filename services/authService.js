import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import db from '../db.js'
import { v4 as uuidv4 } from 'uuid';

const singUpService = async (email, password) => {
    const query = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
    const user = query.rows[0];    
    if (user) {
        throw new Error('Email already in use');
    }

    const dbId = uuidv4();
    const hashPassword = await bcrypt.hash(password, 10);

    const payload = { id: dbId, email: email}
    const accesstoken = jwt.sing(payload, process.env.JWT_SECRET, {expiresIn: '60m'})
    const refreshToken = jwt.sing(payload, process.env.JWT_REFRESH)

    const newUser = {
        id: dbId,
        email,
        hashPassword,
        refreshToken
    }

    await db.query(`INSERT INTO users(id, email, hashPassword, refreshToken) VALUES ($1, $2, $3, $4) RETURNING *`, [
        newUser.id,
        newUser.email,
        newUser.hashPassword,
        newUser.refreshToken,
    ])
    return { user: newUser, accesstoken, refreshToken }
}

export default {
    singUpService
}