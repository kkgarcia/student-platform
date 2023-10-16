import { Router } from 'express'
import * as moduleController from '../controllers/moduleController'
import * as commentController from '../controllers/commentController'
import * as assignmentController from '../controllers/assignmentController'

const router = Router()

// POST for creating Module
router.post('/create', moduleController.create)

// POST for creating Comment for Module
router.post('/:moduleId/comment/create', commentController.create)

// PUT for updating Comment in Module
router.put('/:moduleId/comment/:commentId/update', commentController.update)

// DELETE for deleting Commet from Module
router.delete('/:moduleId/comment/:commentId/delete', commentController.remove)

// POST for creating Assignment for Module
router.post('/:moduleId/assignment/create', assignmentController.create)

// PUT for updating Assignment in Module
router.put(
  '/:moduleId/assignment/:assignmentId/update',
  assignmentController.update
)

// DELETE for deleting Assignment from Module
router.delete(
  '/:moduleId/assingment/:assignmentId/delete',
  assignmentController.remove
)

// PUT for updating Module
router.put('/:moduleId/update', moduleController.update)

// DELETE for deleigin Module
router.delete('/:moduleId/delete', moduleController.deleteOne)

// GET for specific Module
router.get('/:moduleId', moduleController.getOne)

export default router
