import express, {request, response} from "express";
import dbt from '../services/teachersService.js'
import { validationResult } from "express-validator";

const router = express.Router();

router.post('/', [], async (request, response) => {

    const {Name_Teachers, Name_Spare} = request.body;

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(400).json({message: errors.array()});
    }

    try{
        await dbt.InsertTeachers(Name_Teachers, Name_Spare)
        response.status(201).json()
    }catch(err){
        response.status(500).json({message: `Encontramos um erro ${err}`})
    }
})

router.get('/', async (request, response) => {

    try{
    const results = await dbt.GetTeachers();
  
    if (results.length == 0){
      response.status(204).end();
    }else{
      response.status(200).json(results);
    }
  
    }catch(err){
  
     response.status(500).json({message: `Encontramos um erro: ${err}`});
     
    }
  
  });

export default router;