import http from 'node:http'
import express from 'express'
import cors from 'cors'
import { passport } from './lib/passport.ts'
import dotenv from 'dotenv'

import { errorHandler } from './middleware/errorHandler.ts'

import registerRouter from './routes/register.ts'
import authRouter from './routes/auth.ts'
import loginRouter from './routes/logIn.ts'
import adminRouter from './routes/admin.ts'
import noteRouter from './routes/note.ts'
import notesRouter from './routes/notes.ts'
import moduleRouter from './routes/module.ts'
import modulesRouter from './routes/modules.ts'
import summaryRouter from './routes/summary.ts'
import summariesRouter from './routes/summaries.ts'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3300

app.use(cors())
app.use(express.json())
app.use(passport.initialize())

app.use('/register', registerRouter)
app.use('/log-in', loginRouter)
app.use('/auth', authRouter)
app.use('/admin', adminRouter)
app.use('/note', noteRouter)
app.use('/notes', notesRouter)
app.use('/summary', summaryRouter)
app.use('/summaries', summariesRouter)
app.use('/module', moduleRouter)
app.use('/modules', modulesRouter)

app.use((_, res) => {
  const message = http.STATUS_CODES['404']
  res.status(404).json({ error: message })
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
