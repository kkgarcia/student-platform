import { Router } from 'express'
import * as studentController from '../controllers/studentController'

const router = Router()

// POST for register Student
router.post('/', studentController.register)

export default router
