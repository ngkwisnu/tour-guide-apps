const dbPool = require('../config/database')

const getAllAkun = () => {
    const SQLQuery = 'SELECT * FROM akun'
    return dbPool.execute(SQLQuery)
}

const getAkunById = async(id) => {
    try {
        const result = await dbPool.query('SELECT * FROM akun WHERE id = ?', [id]);
        return result[0];
    } catch (error) {
        console.error('Error in getAkunById:', error);
        throw error;
    }
}

const addAkun = (body) => {
    const { email, username, password, role, created_at, updated_at } = body;
    console.log(body);
    const SQLQuery = `
        INSERT INTO akun (email, username, password, role, created_at, updated_at) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [ email, username, password, role, created_at, updated_at ];
    return dbPool.execute(SQLQuery, values);
}

const updateAkun = (body, id) => {
    const { email, username, password, role, created_at, updated_at } = body;
    const SQLQuery = `
        UPDATE akun 
        SET email = ?, username = ?, password = ?, role = ?, created_at = ?, updated_at = ?
        WHERE id = ?
    `;
    const values = [ email, username, password, role, created_at, updated_at, id ];
    return dbPool.execute(SQLQuery, values);
}

const getAkunByEmail = async(email) => {
    try {
        const [ hasil ] = await dbPool.query(`SELECT * FROM akun WHERE email = ?`, [email])
        return hasil
    } catch (error) {
        console.error('Error in getAkunByEmail ', error)
        throw error
    }
}

const deleteAkun = async(id) => {
    try {
        await dbPool.query('DELETE FROM akun WHERE id = ?', [id]);
    } catch (error) {
        console.error('Error in deleteAkun:', error);
        throw error;
    }
}

module.exports = {
    getAllAkun,
    getAkunById,
    addAkun,
    getAkunByEmail,
    updateAkun,
    deleteAkun
}