import { Router } from 'express'
import { passport } from '../lib/passport'
import * as summaryController from '../controllers/summaryController'

const router = Router()

// POST for creating Summary
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  summaryController.create
)

// PUT for updating Summary
router.put(
  '/:summaryId/update',
  passport.authenticate('jwt', { session: false }),
  summaryController.update
)

// DELETE for deleting Summary
router.delete(
  '/:summaryId/delete',
  passport.authenticate('jwt', { session: false }),
  summaryController.remove
)

export default router
