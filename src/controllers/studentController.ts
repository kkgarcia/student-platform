import * as StudentService from '../modules/Student/studentService'

export const register = StudentService.register

export const login = StudentService.login

export const isAuthenticated = StudentService.checkIfAuthorized
