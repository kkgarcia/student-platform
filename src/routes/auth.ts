import { Router } from 'express'
import * as studentController from '../controllers/studentController'
import * as adminController from '../controllers/adminController.ts'

const router = Router()

// GET for chekcing if Student authenticated
router.get('/student', studentController.isAuthenticated)

// GET for chekcing if User is Admin
router.get('/admin', adminController.isAuthorized)

export default router
