import dotenv from 'dotenv'
dotenv.config()

const SECRET = process.env.SECRET
const ENVIRONMENT = process.env.ENVIRONMENT

export { SECRET, ENVIRONMENT }
