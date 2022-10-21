import database from '../repository/connection.js';

async function Login(Name_User, User_Password){
    const conn = await database.connect();
    const sql = 'SELECT * FROM User_tbl WHERE Name_User = ? and User_Password = ?';
    const datalogin = [Name_User, User_Password];
    const [rows] = await conn.query(sql, datalogin);
    conn.end();
    return rows;
}

export default {Login};