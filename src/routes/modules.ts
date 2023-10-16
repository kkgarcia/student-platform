import { Router } from 'express'
import * as moduleController from '../controllers/moduleController'

const router = Router()

// GET for creating Module
router.get('/', moduleController.getAll)

export default router
