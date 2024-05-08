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
    const { name, email, role, password, created_at, updated_at } = body;
    const SQLQuery = `
        INSERT INTO user (name, email, role, password, created_at, updated_at) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [ name, email, role, password, created_at, updated_at ];
    return dbPool.execute(SQLQuery, values);
}

const updateUser = (body, id) => {
    const { name, email, role, password, created_at, updated_at } = body;
    const SQLQuery = `
        UPDATE user 
        SET name = ?, email = ?, role = ?, password = ?, created_at = ?, updated_at = ? WHERE id = ?
    `;
    const values =  [ name, email, role, password, created_at, updated_at, id ];
    return dbPool.execute(SQLQuery, values);
}

const getUserByName = async(name) => {
    try {
        const [ hasil ] = await dbPool.query(`SELECT * FROM user WHERE name = ?`, [name])
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