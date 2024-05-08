const wisataModel = require('../models/WisataModel')

const getAllWisata = async(req, res) => {
    try {
        const [ data ] = await wisataModel.getAllWisata()
        res.json({
            message: 'GET all jurusan success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const getWisataById = async(req, res) => {
    const id = req.params.id

    try {
        const wisata = await wisataModel.getWisataById(id)

        if (wisata.length > 0) {
            res.json({
                message: `Data wisata Dengan ID:${id} Berhasil Diambil!`,
                data: wisata,
            });
        } else {
            res.status(404).json({
                message: `Data wisata Dengan ID:${id} tidak ditemukan, tolong masukkan data dengan benar!`,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error.message || 'Internal server error.',
        })
    }
}

const addWisata = async(req, res) => {
    const { body } = req
    if(!body.user_id || !body.name || !body.latitude || !body.longitude || !body.description || !body.address || !body.price_ticket || !body.image || !body.opening_hours) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
    }
    try {
        const dataAlreadyExists = await wisataModel.getWisataByName(body.name)
        if(dataAlreadyExists.length > 0){
            return res.status(400).json({
                message: `Wisata dengan Nama: ${body.name} sudah ada, silahkan masukkan nama wisata yang lain!`
            })
        }
        await wisataModel.addWisata(body)
        res.status(201).json({
            message : 'Tambah data wisata berhasil!',
            data : body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const updateWisata = async(req, res) => {
    const { id } = req.params
    const { body } = req
    if(!body.user_id || !body.name || !body.latitude || !body.longitude || !body.description || !body.address || !body.price_ticket || !body.image || !body.opening_hours) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.',
            data : null
        })
    }
    try {
        const dataAlreadyExists = await wisataModel.getWisataByName(body.name)
        if(dataAlreadyExists.length > 0){
            return res.status(400).json({
                message: `Wisata dengan Nama: ${body.name} sudah ada, silahkan masukkan nama wisata yang lain!`
            })
        }
        await wisataModel.updateWisata(body, id)
        res.status(201).json({
            message : `UPDATE jurusan dengan ID:${id} berhasil!`,
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

const deleteWisata = async(req, res) => {
    const { id } = req.params
    try {
        const dataAlreadyExists = await wisataModel.getWisataById(id)
        if(dataAlreadyExists.length == 0){
            return res.status(400).json({
                message: `Deleted failed! wisata dengan ID:${id} tidak ditemukan!`
            })
        } 
        await wisataModel.deleteWisata(id)
        res.json({
            message : `Deleted wisata dengan ID:${id} sukses!`,
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
    getAllWisata,
    getWisataById,
    addWisata,
    updateWisata,
    deleteWisata
}