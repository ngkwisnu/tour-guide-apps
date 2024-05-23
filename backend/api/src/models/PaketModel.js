const dbPool = require('../config/database')

const getAllPaket = () => {
    const SQLQuery = 'SELECT * FROM paket'
    return dbPool.execute(SQLQuery)
}

const getPaketById = async(id) => {
    try {
        const result = await dbPool.query('SELECT * FROM paket WHERE id = ?', [id]);
        return result[0];
    } catch (error) {
        console.error('Error in getPaketById:', error);
        throw error;
    }
}

const addPaket = (body) => {
    const { nama, promo, jenis_paket, rating, harga, note_harga, deskripsi, gambar1, gambar2, gambar3, gambar4, informasi_paket, paket_termasuk, paket_tidak_termasuk, jenis_kendaraan, created_at, updated_at } = body;
    console.log(body);
    const SQLQuery = `
        INSERT INTO paket (nama, promo, jenis_paket, rating, harga, note_harga, deskripsi, gambar1, gambar2, gambar3, gambar4, informasi_paket, paket_termasuk, paket_tidak_termasuk, jenis_kendaraan, created_at, updated_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [ nama, promo, jenis_paket, rating, harga, note_harga, deskripsi, gambar1, gambar2, gambar3, gambar4, informasi_paket, paket_termasuk, paket_tidak_termasuk, jenis_kendaraan, created_at, updated_at ];
    return dbPool.execute(SQLQuery, values);
}

const updatePaket = (body, id) => {
    const { nama, promo, jenis_paket, rating, harga, note_harga, deskripsi, gambar1, gambar2, gambar3, gambar4, informasi_paket, paket_termasuk, paket_tidak_termasuk, jenis_kendaraan, created_at, updated_at } = body;
    const SQLQuery = `
        UPDATE paket 
        SET nama = ?, promo = ?, jenis_paket = ?, rating = ?, harga = ?, note_harga = ?, deskripsi = ?, gambar1 = ?, gambar2 = ?, gambar3 = ?, gambar4 = ?, informasi_paket = ?, paket_termasuk = ?, paket_tidak_termasuk = ?, jenis_kendaraan = ?, created_at = ?, updated_at = ? 
        WHERE id = ?
    `;
    const values =  [ nama, promo, jenis_paket, rating, harga, note_harga, deskripsi, gambar1, gambar2, gambar3, gambar4, informasi_paket, paket_termasuk, paket_tidak_termasuk, jenis_kendaraan, created_at, updated_at, id ];
    return dbPool.execute(SQLQuery, values);
}

const getPaketByName = async(nama) => {
    try {
        const [ hasil ] = await dbPool.query(`SELECT * FROM paket WHERE nama = ?`, [nama])
        return hasil
    } catch (error) {
        console.error('Error in getPaketByName ', error)
        throw error
    }
}

const deletePaket = async(id) => {
    try {
        await dbPool.query('DELETE FROM paket WHERE id = ?', [id]);
    } catch (error) {
        console.error('Error in deletePaket:', error);
        throw error;
    }
}

module.exports = {
    deletePaket,
    getAllPaket,
    addPaket,
    getPaketByName,
    updatePaket,
    getPaketById
}