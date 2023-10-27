import { Router } from 'express'
import { validate } from '../middleware/validateRequest'
import { studentDTO } from '../modules/Student/studentDTO'
import * as studentController from '../controllers/studentController'

const router = Router()

// POST for register Student
router.post('/', validate(studentDTO), studentController.register)

export default router
