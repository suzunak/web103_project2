import dotenv from 'dotenv';

dotenv.config( {path: '../.env'} );

const fetchData = async () => {
    `SELECT * FROM characters;`
}

const sendGifts = async () => {
    try {
        const character_data = await pool.query(fetchData);
        console.log('Fetched data: ', data);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

sendGifts();