import { Router } from 'express'
import * as studentController from '../controllers/studentController'

const router = Router()

// POST for loggin in Student
router.post('/', studentController.login)

export default router
