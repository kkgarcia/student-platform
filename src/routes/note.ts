import { Router } from 'express'
import * as noteController from '../controllers/noteController'

const router = Router()

// POST for creating Note
router.post('/create', noteController.create)

// PUT for updating Note
router.put('/:noteId/update', noteController.update)

// DELETE for deleting Note
router.delete('/:noteId/delete', noteController.deleteOne)

export default router
