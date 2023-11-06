import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import db from '../db.js'
import { v4 as uuidv4 } from 'uuid';

const singUpService = async (email, password) => {
    const query = await db.query()
}