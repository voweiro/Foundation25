import jwt from 'jsonwebtoken'

export default function authMiddleware(req, res, next) {
  const header = req.headers['authorization'] || ''
  const parts = header.split(' ')
  const token = parts.length === 2 && parts[0] === 'Bearer' ? parts[1] : null

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { id: decoded.id, email: decoded.email }
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}