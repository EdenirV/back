import database from '../repository/connection.js'

//Pegando dados do banco
async function Getblock(){
    const conn = await database.connect();
    const sql = 'SELECT * FROM Block_tbl';
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}


export default {Getblock}