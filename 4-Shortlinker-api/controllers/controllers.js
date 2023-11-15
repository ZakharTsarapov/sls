import db from "../db.js"
import shortid from "shortid"
import url from "url"
import "dotenv/config"

const urlController = async (req, res) => {
    try {
        const { longUrl } = req.body
        const query = await db.query(`SELECT * from urls WHERE long_url = $1`, [longUrl])
        const createdUrl = query.rows[0]
        
        if(createdUrl) {
            throw new Error(`Url already exist: ${createShortUrl(createdUrl.shortUrl)}`)
        }
        shortUrl = shortid.generate()

        await db.query(`INSERT INTO urls (longUrl, shortUrl) VALUES ($1, $2) RETURNING *`, [longUrl, shortUrl])

        res.status(200).json({
            success: true,
            data: {
                shortUrl: createShortUrl(shortUrl)
            }
        })
    } catch(e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

const showUrl = async (req, res) => {
    try {
        const { shortUrl} = req.params
        const query = await db.query(`SELECT * FROM urls WHERE shortUrl = $1`, [shortUrl])
        const createdUrl = query.rows[0]

        if(createdUrl) {
            return res.status(200).redirect(createdUrl.longUrl)
        }
        res.status(400).json({
            error: "not found"
        })
    } catch(e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

const createUrl = (shortUrl) => {
    return url.format({
        protocol: process.env.PROTOCOL,
        hostname: process.env.DB_HOST,
        port: process.env.DB_PORT,
        pathname: shortUrl
    })
}

export default {
    urlController,
    showUrl,
}