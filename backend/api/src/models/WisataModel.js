const dbPool = require('../config/database')

const getAllWisata = () => {
    const SQLQuery = 'SELECT * FROM destination'
    return dbPool.execute(SQLQuery)
}

const getWisataById = async(id) => {
    try {
        const result = await dbPool.query('SELECT * FROM destination WHERE id = ?', [id]);
        return result[0];
    } catch (error) {
        console.error('Error in getWisataById:', error);
        throw error;
    }
}

const addWisata = (body) => {
    const { user_id, name, latitude, longitude, description, address, price_ticket, image, opening_hours } = body;
    const SQLQuery = `
        INSERT INTO destination (user_id, name, latitude, longitude, description, address, price_ticket, image, opening_hours) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [ user_id, name, latitude, longitude, description, address, price_ticket, image, opening_hours ];
    return dbPool.execute(SQLQuery, values);
}

const updateWisata = (body, id) => {
    const { user_id, name, latitude, longitude, description, address, price_ticket, image, opening_hours } = body;
    const SQLQuery = `
        UPDATE destination 
        SET user_id = ?, name = ?, latitude = ?, longitude = ?, description = ?, address = ?, price_ticket = ?, image = ?, opening_hours = ? WHERE id = ?
    `;
    const values =  [ user_id, name, latitude, longitude, description, address, price_ticket, image, opening_hours, id ];
    return dbPool.execute(SQLQuery, values);
}

const getWisataByName = async(name) => {
    try {
        const [ hasil ] = await dbPool.query(`SELECT * FROM destination WHERE name = ?`, [name])
        return hasil
    } catch (error) {
        console.error('Error in getWisataByName ', error)
        throw error
    }
}

const deleteWisata = async(id) => {
    try {
        await dbPool.query('DELETE FROM destination WHERE id = ?', [id]);
    } catch (error) {
        console.error('Error in deleteWisata:', error);
        throw error;
    }
}

module.exports = {
    getAllWisata,
    getWisataById,
    addWisata,
    getWisataByName,
    updateWisata,
    deleteWisata
}