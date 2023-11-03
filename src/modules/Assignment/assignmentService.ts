import * as AssignmentRepo from '../../repos/AssignmentRepo'
import { Assignment, AssignmentUpdateOptions } from '@/repos/AssignmentRepo'

export const create = async (assignment: Assignment) => {
  return await AssignmentRepo.create({
    title: assignment.title,
    text: assignment.text,
    moduleId: assignment.moduleId,
  })
}

export const update = async (options: AssignmentUpdateOptions) => {
  return await AssignmentRepo.update({
    id: options.id,
    moduleId: options.moduleId,
    title: options.title,
    text: options.text,
  })
}

export const remove = async (assigmentId: number, moduleId: number) => {
  return await AssignmentRepo.deleteOne(assigmentId, moduleId)
}
