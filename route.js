import {Router} from 'express';
import {getUser, logout} from './controller.js'


const router = Router();

router.get('/login/:nombre/:email',getUser)
router.get('/logout',logout)


export default router;