const transactionModel = require('../models/TransactionModel')

const getAllTransaction = async(req, res) => {
    try {
        const [ data ] = await transactionModel.getAllTransaction()
        res.json({
            message: 'GET all transaction success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const getTransactionById = async(req, res) => {
    const id = req.params.id

    try {
        const transaction = await transactionModel.getTransactionById(id)

        if (transaction.length > 0) {
            res.json({
                message: `Data transaction Dengan ID:${id} Berhasil Diambil!`,
                data: transaction,
            });
        } else {
            res.status(404).json({
                message: `Data transaction Dengan ID:${id} tidak ditemukan, tolong masukkan data dengan benar!`,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error.message || 'Internal server error.',
        })
    }
}

const addTransaction = async(req, res) => {
    const { body } = req
    if(!body.start_date || !body.total_day || !body.price_of_day || !body.payment_proof || !body.total || !body.status || !body.status || !body.tour_guide_id || !body.user_id) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
    }
    try {
        await transactionModel.addTransaction(body)
        res.status(201).json({
            message : 'Tambah data transaction berhasil!',
            data : body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const updateTransaction = async(req, res) => {
    const { id } = req.params
    const { body } = req
    if(!body.start_date || !body.total_day || !body.price_of_day || !body.payment_proof || !body.total || !body.status || !body.status || !body.tour_guide_id || !body.user_id) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
    }
    try {
        await transactionModel.updateTransaction(body, id)
        res.status(201).json({
            message : `UPDATE transaction dengan ID:${id} berhasil!`,
            data : {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const deleteTransaction = async(req, res) => {
    const { id } = req.params
    try {
        await transactionModel.deleteTransaction(id)
        res.json({
            message : `Deleted transaction dengan ID:${id} sukses!`,
            data : null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

module.exports = {
    getAllTransaction,
    getTransactionById,
    addTransaction,
    updateTransaction,
    deleteTransaction
}