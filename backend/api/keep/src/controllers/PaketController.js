const paketModel = require('../models/PaketModel')

const getAllPaket = async(req, res) => {
    try {
        const [ data ] = await paketModel.getAllPaket()
        res.json({
            message: 'GET all paket success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const getPaketById = async(req, res) => {
    const id = req.params.id

    try {
        const paket = await paketModel.getPaketById(id)

        if (paket.length > 0) {
            res.json({
                message: `Data paket Dengan ID:${id} Berhasil Diambil!`,
                data: paket,
            });
        } else {
            res.status(404).json({
                message: `Data paket Dengan ID:${id} tidak ditemukan, tolong masukkan data dengan benar!`,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error.message || 'Internal server error.',
        })
    }
}

const addPaket = async (req, res) => {
    let { body } = req;
    console.log(body);
    const requiredFields = ['nama', 'promo', 'jenis_paket', 'rating', 'harga', 'note_harga', 'deskripsi', 'gambar1', 'gambar2', 'gambar3', 'gambar4', 'informasi_paket', 'paket_termasuk', 'paket_tidak_termasuk', 'jenis_kendaraan', 'created_at', 'updated_at'];

    if (!requiredFields.every(field => body)) {
        return res.status(400).json({
            message: 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        });
    }
    try {
        const dataAlreadyExists = await paketModel.getPaketByName(body.nama);
        if (dataAlreadyExists.length > 0) {
            return res.status(400).json({
                message: `Paket dengan Nama: ${body.nama} sudah ada, silahkan masukkan nama paket yang lain!`
            });
        }
        await paketModel.addPaket(body);
        res.status(201).json({
            message: 'Tambah data paket berhasil!',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        });
    }
}

const updatePaket = async (req, res) => {
    const { id } = req.params;
    let { body } = req;
    console.log(body);
    const requiredFields = ['nama', 'promo', 'jenis_paket', 'rating', 'harga', 'note_harga', 'deskripsi', 'gambar1', 'gambar2', 'gambar3', 'gambar4', 'informasi_paket', 'paket_termasuk', 'paket_tidak_termasuk', 'jenis_kendaraan', 'created_at', 'updated_at'];

    if (!requiredFields.every(field => body)) {
        return res.status(400).json({
            message: 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        });
    }

    try {
        // Cek apakah data dengan nama yang sama sudah ada
        const dataAlreadyExists = await paketModel.getPaketByName(body.nama);
        if (dataAlreadyExists.length > 1) {
            return res.status(400).json({
                message: `Paket dengan Nama: ${body.nama} sudah ada, silahkan masukkan nama paket yang lain!`
            });
        }

        // Lakukan pembaruan data
        await paketModel.updatePaket(body, id);

        // Kirim respons berhasil
        res.status(201).json({
            message: `UPDATE paket dengan ID:${id} berhasil!`,
            data: {
                id: id,
                ...body
            }
        });
    } catch (error) {
        // Tangani kesalahan server
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        });
    }
}

const deletePaket = async(req, res) => {
    const { id } = req.params
    try {
        const dataAlreadyExists = await paketModel.getPaketById(id)
        if(dataAlreadyExists.length == 0){
            return res.status(400).json({
                message: `Deleted failed! paket dengan ID:${id} tidak ditemukan!`
            })
        } 
        await paketModel.deletePaket(id)
        res.json({
            message : `Deleted paket dengan ID:${id} sukses!`,
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
    getAllPaket,
    getPaketById,
    addPaket,
    updatePaket,
    deletePaket
}