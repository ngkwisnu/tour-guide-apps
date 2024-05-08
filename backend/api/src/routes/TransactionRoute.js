const express = require('express')
const TransactionController = require('../controllers/TransactionController')

const router = express.Router()

// Menampilkan semua data transaksi
router.get('/', TransactionController.getAllTransaction)
// Menampilkan transaksi sesuai dengan id
router.get('/:id', TransactionController.getTransactionById)
// Menambahkan data transaksi
router.post('/', TransactionController.addTransaction)
// Update data transaksi
router.put('/:id', TransactionController.updateTransaction)
// Delete data transaksi
router.delete('/:id', TransactionController.deleteTransaction)

module.exports = router