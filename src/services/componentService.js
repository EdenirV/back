import database from '../repository/connection.js';

// Inserindo dados de componente curricular no banco
async function InsertComponent(Name_component, Hour_Start, Hour_End, Block_){
    const conn = await database.connect();
    const sql = 'INSERT INTO Curricular_Component_tbl(Name_component, Hour_Start, Hour_End, Block_) VALUES (?,?,?,?)';
    const Component = [Name_component, Hour_Start, Hour_End, Block_];
    await conn.query(sql, Component);
    conn.end();
}

//Pegando dados do banco
async function GetComponent(){
    const conn = await database.connect();
    const sql = 'SELECT * FROM Curricular_Component_tbl';
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
  }

export default {InsertComponent, GetComponent};