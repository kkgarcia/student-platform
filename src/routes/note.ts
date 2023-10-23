import { Router } from 'express'
import { passport } from '../lib/passport'
import * as noteController from '../controllers/noteController'

const router = Router()

// POST for creating Note
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  noteController.create
)

// PUT for updating Note
router.put(
  '/:noteId/update',
  passport.authenticate('jwt', { session: false }),
  noteController.update
)

// DELETE for deleting Note
router.delete(
  '/:noteId/delete',
  passport.authenticate('jwt', { session: false }),
  noteController.deleteOne
)

export default router
