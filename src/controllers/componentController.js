import express, {request, response} from 'express';
import { validationResult } from 'express-validator';
import dbc from '../services/componentService.js';

const router = express.Router();

router.post('/', [], async (request, response) => {

    const {Name_component, Hour_Start, Hour_End, Block_} = request.body;

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(400).json({message: errors.array()})
    }

    try{
        await dbc.InsertComponent(Name_component, Hour_Start, Hour_End, Block_)
        response.status(201).json();
    }catch(err){
        response.status(500).json({message: `Encontramos um erro ${err}`})

    }
})

router.get('/', async (request, response) => {

    try{
    const results = await dbc.GetComponent();
  
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