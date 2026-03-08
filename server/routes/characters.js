import express from 'express'
import path from 'path'
import charactersController from '../contollers/characters.js';

import { fileURLToPath } from 'url'
import characterData from '../data/characterData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router();

router.get('/', charactersController.getAllCharacters)

router.get('/:id', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/character.html'));
})

export default router; 