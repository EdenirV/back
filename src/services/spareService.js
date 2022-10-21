import database from '../repository/connection.js'

//Inserindo dados de reposição no banco
async function InsertSpare(Date_Spare, Date_Fill, Type_Spare, Reason, Course, Semester, Period ){
    const conn = await database.connect();
    const sql = 'INSERT INTO Spare_tbl (Date_Spare, Date_Fill, Type_Spare, Reason, Course, Semester, Period) VALUES (?,?,?,?,?,?,?)';
    const Spare = [Date_Spare, Date_Fill,Type_Spare, Reason, Course, Semester, Period];
    await conn.query(sql, Spare);
    conn.end(); 
}

//Pegando dados do banco
async function GetSpare(){
    const conn = await database.connect();
    const sql = 'SELECT * FROM Spare_tbl';
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}


export default {InsertSpare, GetSpare}