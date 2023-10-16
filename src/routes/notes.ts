import { Router } from 'express'
import * as noteController from '../controllers/noteController'

const router = Router()

// GET all Notes
router.get('/', noteController.getAll)

export default router
