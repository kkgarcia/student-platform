import { Router } from 'express'
import { validate } from '../middleware/validateRequest'
import { studentDTO } from '../modules/Student/studentDTO'
import * as studentController from '../controllers/studentController'

const router = Router()

// POST for loggin in Student
router.post('/', validate(studentDTO), studentController.login)

export default router
