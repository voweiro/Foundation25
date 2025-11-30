import { getUserById, updateUser, changePassword } from '../services/userService.js'

export async function me(req, res) {
  try {
    const userId = req.user?.id
    const user = await getUserById(userId)
    res.json(user)
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || 'Failed to fetch user' })
  }
}

export async function updateMe(req, res) {
  try {
    const userId = req.user?.id
    const { username, email, firstName, lastName, phone } = req.body
    const user = await updateUser(userId, { username, email, firstName, lastName, phone })
    res.json(user)
  } catch (err) {
    res.status(err.status || 400).json({ message: err.message || 'Failed to update profile' })
  }
}

export async function changeMyPassword(req, res) {
  try {
    const userId = req.user?.id
    const { currentPassword, newPassword } = req.body
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Missing password fields' })
    }
    await changePassword(userId, currentPassword, newPassword)
    res.json({ message: 'Password updated' })
  } catch (err) {
    res.status(err.status || 400).json({ message: err.message || 'Failed to change password' })
  }
}

