const dbPool = require('../config/database')

const getAllTourGuide = () => {
    const SQLQuery = 'SELECT * FROM tour_guide'
    return dbPool.execute(SQLQuery)
}

const getTourGuideById = async(id) => {
    try {
        const result = await dbPool.query('SELECT * FROM tour_guide WHERE id = ?', [id]);
        return result[0];
    } catch (error) {
        console.error('Error in getTourGuideById:', error);
        throw error;
    }
}

const addTourGuide = (body) => {
    const { name, email, phone, description, price_of_day, operational_area, created_by, created_at, approved_by, approved_at } = body;
    const SQLQuery = `
        INSERT INTO tour_guide (name, email, phone, description, price_of_day, operational_area, created_by, created_at, approved_by, approved_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [ name, email, phone, description, price_of_day, operational_area, created_by, created_at, approved_by, approved_at ];
    return dbPool.execute(SQLQuery, values);
}

const updateTourGuide = (body, id) => {
    const { name, email, phone, description, price_of_day, operational_area, created_by, created_at, approved_by, approved_at } = body;
    const SQLQuery = `
        UPDATE tour_guide 
        SET name = ?, email = ?, phone = ?, description = ?, price_of_day = ?, operational_area = ?, created_by = ?, created_at = ?, approved_by = ?, approved_at = ? WHERE id = ?
    `;
    const values =  [ name, email, phone, description, price_of_day, operational_area, created_by, created_at, approved_by, approved_at, id ];
    return dbPool.execute(SQLQuery, values);
}

const getTourGuideByName = async(name) => {
    try {
        const [ hasil ] = await dbPool.query(`SELECT * FROM tour_guide WHERE name = ?`, [name])
        return hasil
    } catch (error) {
        console.error('Error in getTourGuideByName ', error)
        throw error
    }
}

const deleteTourGuide = async(id) => {
    try {
        await dbPool.query('DELETE FROM tour_guide WHERE id = ?', [id]);
    } catch (error) {
        console.error('Error in deleteTourGuide:', error);
        throw error;
    }
}

module.exports = {
    getAllTourGuide,
    getTourGuideById,
    addTourGuide,
    getTourGuideByName,
    updateTourGuide,
    deleteTourGuide
}