import express, {request, response} from "express";
import db from '../services/userService.js';
import {validationResult } from "express-validator";

const router = express.Router();

// O Request é o que o front-end envia para o backend
// O Response é o que o backend envia para o fron-end

router.post('/', [], async (request, response) => {

    const {Email_User,Name_User, User_Password} = request.body;

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(400).json({message: errors.array()});
    }

    try{
        await db.InsertUser(Email_User, Name_User, User_Password)
        response.status(201).json({message: 'Usuário cadastrado com sucesso'});
    }catch(err){
        response.status(500).json({message: `Encontramos um erro: ${err}`})
    }
})

export default router;