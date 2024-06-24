const express = require("express");
const KeranjangController = require("../controllers/KeranjangController");

const router = express.Router();

// Menampilkan semua data pesanan
router.get("/", KeranjangController.getAllKeranjang);
// Menampilkan pesanan sesuai dengan id
router.get("/:id", KeranjangController.getKeranjangByIdUser);
// Menambahkan data pesanan
router.post("/", KeranjangController.addKeranjang);
// Delete data pesanan
router.delete("/:id", KeranjangController.deleteKeranjang);

module.exports = router;
