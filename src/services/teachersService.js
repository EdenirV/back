import database from '../repository/connection.js';

//Inserindo dados de Professor no banco
async function InsertTeachers(Name_Teachers,Name_Spare){
    const conn = await database.connect();
    const sql = 'INSERT INTO Teachers_tbl (Name_Teachers, Name_Spare) VALUES (?,?)';
    const Teachers = [Name_Teachers,Name_Spare];
    await conn.query(sql, Teachers);
    conn.end()
}

//Pegando dados do banco
async function GetTeachers(){
    const conn = await database.connect();
    const sql = 'SELECT * FROM Teachers_tbl';
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
  }

export default {InsertTeachers, GetTeachers};