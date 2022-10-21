import database from '../repository/connection.js';

async function GetPeriod(){
    const conn = await database.connect();
    const sql = 'SELECT * FROM Period_tbl';
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
  }


export default {GetPeriod}