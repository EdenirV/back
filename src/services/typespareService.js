import database from '../repository/connection.js'

//Pegando dados do banco da tabela de tipo de reposição
async function GetTypeSpare(){
    const conn = await database.connect();
    const sql = 'SELECT * FROM TypeSpare_tbl';
    const [rows] = await conn.query(sql);
    conn.end();
    return rows
}

export default {GetTypeSpare};