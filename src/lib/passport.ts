import passport from 'passport'
import { Strategy as JwtStrategy, type StrategyOptions } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import * as UserRepo from '../repos/UserRepo.ts'
import { SECRET } from '../config'

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
}

passport.use(
  new JwtStrategy(options, async function (payload, done) {
    try {
      const user = await UserRepo.getUserById(payload.sub)

      if (!user) {
        return done(null, false)
      }

      return done(null, user)
    } catch (error) {
      return done(error, false)
    }
  })
)

export { passport }
