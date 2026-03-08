import { pool } from '../config/database.js';

const getAllCharacters = async (req, res) => {
    try {
        const character = await pool.query('SELECT * FROM characters ORDER BY id ASC');
        res.status(200).json(character.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default {
    getAllCharacters
}
