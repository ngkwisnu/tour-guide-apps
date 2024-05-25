const dbPool = require('../config/database')

const getAllUser = () => {
    const SQLQuery = 'SELECT * FROM user'
    return dbPool.execute(SQLQuery)
}

const getUserById = async(id) => {
    try {
        const result = await dbPool.query('SELECT * FROM user WHERE id = ?', [id]);
        return result[0];
    } catch (error) {
        console.error('Error in getUserById:', error);
        throw error;
    }
}

const addUser = (body) => {
    const { email, username, password, role, created_at, updated_at, nama, telepon, alamat, foto } = body;
    console.log(body);
    const SQLQuery = `
        INSERT INTO user (email, username, password, role, created_at, updated_at, nama, telepon, alamat, foto) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [ email, username, password, role, created_at, updated_at, nama, telepon, alamat, foto ];
    return dbPool.execute(SQLQuery, values);
}

const updateUser = (body, id) => {
    const { email, username, password, role, created_at, updated_at, nama, telepon, alamat, foto } = body;
    const SQLQuery = `
        UPDATE user 
        SET email = ?, username = ?, password = ?, role = ?, created_at = ?, updated_at = ?. nama = ?, telepon = ?, alamat = ?, foto = ?
        WHERE id = ?
    `;
    const values = [ email, username, password, role, created_at, updated_at, nama, telepon, alamat, foto, id ];
    return dbPool.execute(SQLQuery, values);
}

const getUserByName = async(nama) => {
    try {
        const [ hasil ] = await dbPool.query(`SELECT * FROM user WHERE nama = ?`, [nama])
        return hasil
    } catch (error) {
        console.error('Error in getUserByName ', error)
        throw error
    }
}

const deleteUser = async(id) => {
    try {
        await dbPool.query('DELETE FROM user WHERE id = ?', [id]);
    } catch (error) {
        console.error('Error in deleteUser:', error);
        throw error;
    }
}

module.exports = {
    getAllUser,
    getUserById,
    addUser,
    getUserByName,
    updateUser,
    deleteUser
}