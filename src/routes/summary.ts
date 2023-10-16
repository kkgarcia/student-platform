import { Router } from 'express'
import * as summaryController from '../controllers/summaryController'

const router = Router()

// POST for creating Summary
router.post('/create', summaryController.create)

// PUT for updating Summary
router.put('/:summaryId/update', summaryController.update)

// DELETE for deleting Summary
router.delete('/:summaryId/delete', summaryController.remove)

export default router
