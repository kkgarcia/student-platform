import { Router } from 'express'
import { passport } from '../lib/passport.ts'
import { validate } from '../middleware/validateRequest.ts'
import { userDTO } from '../modules/User/userDTO.ts'
import * as UserController from '../controllers/userController.ts'

const router = Router()

// GET for retrieving User
router.get(
  '/user',
  passport.authenticate('jwt', { session: false }),
  UserController.getUser
)

// POST for loggin in User
router.post('/log-in', validate(userDTO), UserController.login)

// POST for register User
router.post('/register', validate(userDTO), UserController.register)

export default router
