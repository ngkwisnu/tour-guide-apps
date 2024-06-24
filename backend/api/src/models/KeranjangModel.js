const dbPool = require("../config/database");

const getAllKeranjang = () => {
  const SQLQuery = "SELECT * FROM keranjang";
  return dbPool.execute(SQLQuery);
};

const getKeranjangByIdUser = async (id) => {
  try {
    const result = await dbPool.query(
      "SELECT * FROM keranjang WHERE id_user = ?",
      [id]
    );
    return result[0];
  } catch (error) {
    console.error("Error in getKeranjangByIdUser:", error);
    throw error;
  }
};

const getKeranjangById = async (id) => {
  try {
    const result = await dbPool.query("SELECT * FROM keranjang WHERE id = ?", [
      id,
    ]);
    return result[0];
  } catch (error) {
    console.error("Error in getKeranjangById:", error);
    throw error;
  }
};

const addKeranjang = (body) => {
  const { id_user, id_wisata } = body;
  const SQLQuery = `
        INSERT INTO keranjang (id_user, id_wisata)
        VALUES (?, ?)
    `;
  const values = [id_user, id_wisata];
  return dbPool.execute(SQLQuery, values);
};

const deleteKeranjang = async (id) => {
  try {
    await dbPool.query("DELETE FROM keranjang WHERE id = ?", [id]);
  } catch (error) {
    console.error("Error in deleteKeranjang:", error);
    throw error;
  }
};

module.exports = {
  getAllKeranjang,
  getKeranjangById,
  addKeranjang,
  deleteKeranjang,
  getKeranjangByIdUser,
};
