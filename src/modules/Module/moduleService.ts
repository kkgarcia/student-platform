import { Module } from '../../repos/ModuleRepo'
import * as ModuleRepo from '../../repos/ModuleRepo'

export const create = async (module: Module) => {
  return await ModuleRepo.create({
    title: module.title,
    subject: module.subject,
    text: module.text,
  })
}

export const update = async (moduleId: number, options: Module) => {
  return await ModuleRepo.update(moduleId, options)
}

export const getAll = async () => {
  return await ModuleRepo.getAllModules()
}

export const getOne = async (moduleId: number) => {
  return await ModuleRepo.getOne(moduleId)
}

export const deleteOne = async (moduleId: number) => {
  return await ModuleRepo.deleteOne(moduleId)
}
