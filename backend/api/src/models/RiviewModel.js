const dbPool = require('../config/database')

const getAllRiview = () => {
    const SQLQuery = 'SELECT * FROM review'
    return dbPool.execute(SQLQuery)
}

const getRiviewById = async(id) => {
    try {
        const result = await dbPool.query('SELECT * FROM review WHERE id = ?', [id]);
        return result[0];
    } catch (error) {
        console.error('Error in getRiviewById:', error);
        throw error;
    }
}

const addRiview = (body) => {
    const { rate, description, tour_guide_id, user_id } = body;
    const SQLQuery = `
        INSERT INTO review (rate, description, tour_guide_id, user_id) 
        VALUES (?, ?, ?, ?)
    `;
    const values = [ rate, description, tour_guide_id, user_id ];
    return dbPool.execute(SQLQuery, values);
}

const updateRiview = (body, id) => {
    const { rate, description, tour_guide_id, user_id } = body;
    const SQLQuery = `
        UPDATE review 
        SET rate = ?, description = ?, tour_guide_id = ?, user_id = ? WHERE id = ?
    `;
    const values =  [ rate, description, tour_guide_id, user_id, id ];
    return dbPool.execute(SQLQuery, values);
}

const deleteRiview = async(id) => {
    try {
        await dbPool.query('DELETE FROM review WHERE id = ?', [id]);
    } catch (error) {
        console.error('Error in deleteRiview:', error);
        throw error;
    }
}

module.exports = {
    getAllRiview,
    getRiviewById,
    addRiview,
    updateRiview,
    deleteRiview
}