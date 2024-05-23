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
    const { nama, telepon, alamat, foto, id_akun } = body;
    console.log(body);
    const SQLQuery = `
        INSERT INTO user (nama, telepon, alamat, foto, id_akun) 
        VALUES (?, ?, ?, ?, ?)
    `;
    const values = [ nama, telepon, alamat, foto, id_akun ];
    return dbPool.execute(SQLQuery, values);
}

const updateUser = (body, id) => {
    const { nama, telepon, alamat, foto, id_akun } = body;
    const SQLQuery = `
        UPDATE user 
        SET nama = ?, telepon = ?, alamat = ?, foto = ?, id_akun = ? 
        WHERE id = ?
    `;
    const values = [ nama, telepon, alamat, foto, id_akun, id ];
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