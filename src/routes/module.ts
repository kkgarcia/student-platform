import { Router } from 'express'
import { passport } from '../lib/passport'
import * as moduleController from '../controllers/moduleController'
import * as commentController from '../controllers/commentController'
import * as assignmentController from '../controllers/assignmentController'

const router = Router()

// POST for creating Module
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  moduleController.create
)

// POST for creating Comment for Module
router.post(
  '/:moduleId/comment/create',
  passport.authenticate('jwt', { session: false }),
  commentController.create
)

// PUT for updating Comment in Module
router.put(
  '/:moduleId/comment/:commentId/update',
  passport.authenticate('jwt', { session: false }),
  commentController.update
)

// DELETE for deleting Commet from Module
router.delete(
  '/:moduleId/comment/:commentId/delete',
  passport.authenticate('jwt', { session: false }),
  commentController.remove
)

// POST for creating Assignment for Module
router.post(
  '/:moduleId/assignment/create',
  passport.authenticate('jwt', { session: false }),
  assignmentController.create
)

// PUT for updating Assignment in Module
router.put(
  '/:moduleId/assignment/:assignmentId/update',
  passport.authenticate('jwt', { session: false }),
  assignmentController.update
)

// DELETE for deleting Assignment from Module
router.delete(
  '/:moduleId/assingment/:assignmentId/delete',
  passport.authenticate('jwt', { session: false }),
  assignmentController.remove
)

// PUT for updating Module
router.put(
  '/:moduleId/update',
  passport.authenticate('jwt', { session: false }),
  moduleController.update
)

// DELETE for deleigin Module
router.delete(
  '/:moduleId/delete',
  passport.authenticate('jwt', { session: false }),
  moduleController.deleteOne
)

// GET for specific Module
router.get(
  '/:moduleId',
  passport.authenticate('jwt', { session: false }),
  moduleController.getOne
)

export default router
