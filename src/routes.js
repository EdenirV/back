import express from "express";
import user from './controllers/userController.js';
import teacher from './controllers/teachersController.js';
import spare from './controllers/spareController.js';
import component from './controllers/componentController.js';
import course from './controllers/courseController.js';
import typespare from './controllers/typespareController.js';
import classes from './controllers/classesController.js';
import reason from './controllers/reasonController.js';
import period from './controllers/periodController.js';
import block from './controllers/blockController.js';
import log from './controllers/loginController.js';


const router = express.Router();

router.use('/user', user);
router.use('/teacher', teacher);
router.use('/spare', spare); 
router.use('/component', component); 
router.use('/course', course); 
router.use('/typespare', typespare);
router.use('/classes', classes);
router.use('/reasonSE', reason);
router.use('/period', period);
router.use('/block', block);
router.use('/log', log)


export default router;