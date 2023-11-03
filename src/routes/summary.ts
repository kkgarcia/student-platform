import { Router } from 'express'
import { passport } from '../lib/passport'
import { validate } from '../middleware/validateRequest'
import { summaryDTO } from '../modules/Summary/summaryDTO'
import * as summaryController from '../controllers/summaryController'

const router = Router()

// POST for creating Summary
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  validate(summaryDTO),
  summaryController.create
)

// PUT for updating Summary
router.put(
  '/:summaryId/update',
  passport.authenticate('jwt', { session: false }),
  validate(summaryDTO),
  summaryController.update
)

// DELETE for deleting Summary
router.delete(
  '/:summaryId/delete',
  passport.authenticate('jwt', { session: false }),
  summaryController.remove
)

export default router
