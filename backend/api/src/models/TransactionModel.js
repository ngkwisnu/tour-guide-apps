const dbPool = require('../config/database')

const getAllTransaction = () => {
    const SQLQuery = 'SELECT * FROM transaction'
    return dbPool.execute(SQLQuery)
}

const getTransactionById = async(id) => {
    try {
        const result = await dbPool.query('SELECT * FROM transaction WHERE id = ?', [id]);
        return result[0];
    } catch (error) {
        console.error('Error in getTransactionById:', error);
        throw error;
    }
}

const addTransaction = (body) => {
    const { start_date, total_day, price_of_day, payment_proof, total, status, tour_guide_id, user_id } = body;
    const SQLQuery = `
        INSERT INTO transaction (start_date, total_day, price_of_day, payment_proof, total, status, tour_guide_id, user_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [ start_date, total_day, price_of_day, payment_proof, total, status, tour_guide_id, user_id ];
    return dbPool.execute(SQLQuery, values);
}

const updateTransaction = (body, id) => {
    const { start_date, total_day, price_of_day, payment_proof, total, status, tour_guide_id, user_id } = body;
    const SQLQuery = `
        UPDATE transaction 
        SET start_date = ?, total_day = ?, price_of_day = ?, payment_proof = ?, total = ?, status = ?, tour_guide_id = ?, user_id = ? WHERE id = ?
    `;
    const values =  [ start_date, total_day, price_of_day, payment_proof, total, status, tour_guide_id, user_id, id ];
    return dbPool.execute(SQLQuery, values);
}

const deleteTransaction = async(id) => {
    try {
        await dbPool.query('DELETE FROM transaction WHERE id = ?', [id]);
    } catch (error) {
        console.error('Error in deleteTransaction:', error);
        throw error;
    }
}

module.exports = {
    getAllTransaction,
    getTransactionById,
    addTransaction,
    updateTransaction,
    deleteTransaction
}