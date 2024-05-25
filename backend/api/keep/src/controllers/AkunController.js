const akunModel = require('../models/AkunModel')

const getAllAkun = async(req, res) => {
    try {
        const [ data ] = await akunModel.getAllAkun()
        res.json({
            message: 'GET all akun success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const getAkunById = async(req, res) => {
    const id = req.params.id

    try {
        const akun = await akunModel.getAkunById(id)

        if (akun.length > 0) {
            res.json({
                message: `Data akun Dengan ID:${id} Berhasil Diambil!`,
                data: akun,
            });
        } else {
            res.status(404).json({
                message: `Data akun Dengan ID:${id} tidak ditemukan, tolong masukkan data dengan benar!`,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error.message || 'Internal server error.',
        })
    }
}

const addAkun = async (req, res) => {
    const { body } = req;

    // Periksa apakah semua properti yang diperlukan ada dalam objek body
    if (!body.email || !body.username || !body.password || !body.role || !body.created_at || !body.updated_at) {
        return res.status(400).json({
            message: 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        });
    }

    try {
        // Cek apakah data dengan email yang sama sudah ada
        const dataAlreadyExists = await akunModel.getAkunByEmail(body.email);
        if (dataAlreadyExists.length > 0) {
            return res.status(400).json({
                message: `Akun dengan Email: ${body.email} sudah ada, silahkan masukkan Email yang lain!`
            });
        }

        // Tambahkan data akun
        await akunModel.addAkun(body);

        // Kirim respons berhasil
        res.status(201).json({
            message: 'Tambah data Akun berhasil!',
            data: body
        });
    } catch (error) {
        // Tangani kesalahan server
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        });
    }
}

const updateAkun = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    // Periksa apakah semua properti yang diperlukan ada dalam objek body
    if (!body.email || !body.username || !body.password || !body.role || !body.created_at || !body.updated_at) {
        return res.status(400).json({
            message: 'Data yang dikirim tidak lengkap atau tidak sesuai format.',
            data: null
        });
    }

    try {
        // Cek apakah data dengan email yang sama sudah ada
        const dataAlreadyExists = await akunModel.getAkunByEmail(body.email);
        if (dataAlreadyExists.length > 1) {
            return res.status(400).json({
                message: `Akun dengan Email: ${body.email} sudah ada, silahkan masukkan Email yang lain!`
            });
        }

        // Lakukan pembaruan data akun
        await akunModel.updateAkun(body, id);

        // Kirim respons berhasil
        res.status(201).json({
            message: `UPDATE akun dengan ID:${id} berhasil!`,
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

const deleteAkun = async(req, res) => {
    const { id } = req.params
    try {
        const dataAlreadyExists = await akunModel.getAkunById(id)
        if(dataAlreadyExists.length == 0){
            return res.status(400).json({
                message: `Deleted failed! Akun dengan ID:${id} tidak ditemukan!`
            })
        } 
        await akunModel.deleteAkun(id)
        res.json({
            message : `Deleted Akun dengan ID:${id} sukses!`,
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
    getAllAkun,
    getAkunById,
    addAkun,
    updateAkun,
    deleteAkun
}