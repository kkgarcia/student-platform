import { Router } from 'express'
import * as adminController from '../controllers/adminController.ts'

const router = Router()

// POST for register Student
router.post('/register', adminController.register)

// POST for login Student
router.post('/log-in', adminController.login)

export default router
