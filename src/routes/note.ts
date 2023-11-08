import { Router } from 'express'
import { passport } from '../lib/passport'
import { validate } from '../middleware/validateRequest'
import { noteDTO } from '../modules/Note/noteDTO'
import * as noteController from '../controllers/noteController'

const router = Router()

// POST for creating Note
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  validate(noteDTO),
  noteController.create
)

// PUT for updating Note
router.put(
  '/:noteId/update',
  passport.authenticate('jwt', { session: false }),
  validate(noteDTO),
  noteController.update
)

// DELETE for deleting Note
router.delete(
  '/:noteId/delete',
  passport.authenticate('jwt', { session: false }),
  noteController.deleteOne
)

export default router
