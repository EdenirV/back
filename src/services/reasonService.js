import database from '../repository/connection.js';

async function GetReason(){
    const conn = await database.connect();
    const sql = 'SELECT * FROM ReasonFault_tbl';
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
  }


export default {GetReason}