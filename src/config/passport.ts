import passport from 'passport'
import { Strategy as JwtStrategy, type StrategyOptions } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import * as StudentRepo from '../repos/StudentRepo.ts'
import * as AdminRepo from '../repos/AdminRepo.ts'
import dotenv from 'dotenv'
dotenv.config()

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
}

passport.use(
  new JwtStrategy(options, async function (payload, done) {
    try {
      let user

      switch (payload.role) {
        case 'STUDENT': {
          user = await StudentRepo.getStudentById(payload.sub)
          break
        }

        case 'ADMIN': {
          user = await AdminRepo.getAdminById(payload.sub)
          break
        }
      }

      if (!user) {
        return done(null, false)
      }

      return done(null, user)
    } catch (error) {
      return done(error, false)
    }
  })
)

export default passport
