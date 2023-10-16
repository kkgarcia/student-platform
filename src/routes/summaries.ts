import { Router } from 'express'
import * as summaryController from '../controllers/summaryController'

const router = Router()

// GET for getting all Summaries
router.get('/', summaryController.getAll)

export default router
