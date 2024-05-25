const express = require('express')
const AkunController = require('../controllers/AkunController')

const router = express.Router()

// Menampilkan semua data akun
router.get('/', AkunController.getAllAkun)
// Menampilkan akun sesuai dengan id
router.get('/:id', AkunController.getAkunById)
// Menambahkan data akun
router.post('/', AkunController.addAkun)
// Update data akun
router.put('/:id', AkunController.updateAkun)
// Delete data akun
router.delete('/:id', AkunController.deleteAkun)

module.exports = router