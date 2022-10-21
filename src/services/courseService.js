import database from '../repository/connection.js';

async function GetCourse(){
    const conn = await database.connect();
    const sql = 'SELECT * FROM Courses_tbl';
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
  }


export default {GetCourse}
  