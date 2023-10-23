import * as AdminService from '../modules/Admin/adminService.ts'

export const register = AdminService.register

export const login = AdminService.login

export const isAdmin = AdminService.checkIfAuthorized
