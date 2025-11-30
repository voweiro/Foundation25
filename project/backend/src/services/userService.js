import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUserById(id) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) {
    const err = new Error('User not found')
    err.status = 404
    throw err
  }
  return { id: user.id, username: user.username, email: user.email, firstName: user.firstName, lastName: user.lastName, phone: user.phone }
}

export async function updateUser(id, { username, email, firstName, lastName, phone }) {
  const data = {}
  if (typeof username !== 'undefined') data.username = username
  if (typeof email !== 'undefined') data.email = email
  if (typeof firstName !== 'undefined') data.firstName = firstName
  if (typeof lastName !== 'undefined') data.lastName = lastName
  if (typeof phone !== 'undefined') data.phone = phone

  try {
    const user = await prisma.user.update({ where: { id }, data })
    return { id: user.id, username: user.username, email: user.email, firstName: user.firstName, lastName: user.lastName, phone: user.phone }
  } catch (e) {
    const err = new Error(e?.code === 'P2002' ? 'Email already in use' : 'Failed to update profile')
    err.status = 400
    throw err
  }
}

export async function changePassword(id, currentPassword, newPassword) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) {
    const err = new Error('User not found')
    err.status = 404
    throw err
  }
  const valid = await bcrypt.compare(currentPassword, user.password)
  if (!valid) {
    const err = new Error('Current password is incorrect')
    err.status = 400
    throw err
  }
  const hashed = await bcrypt.hash(newPassword, 10)
  await prisma.user.update({ where: { id }, data: { password: hashed } })
  return { ok: true }
}

