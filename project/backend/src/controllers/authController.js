import { signupUser, loginUser } from '../services/authService.js'

export async function signup(req, res) {
  try {
    const { username, email, password, firstName, lastName, phone } = req.body
    const result = await signupUser({ username, email, password, firstName, lastName, phone })
    res.status(201).json(result)
  } catch (err) {
    const status = err.status || 400
    res.status(status).json({ message: err.message || 'Signup failed' })
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body
    const result = await loginUser({ email, password })
    res.status(200).json(result)
  } catch (err) {
    const status = err.status || 401
    res.status(status).json({ message: err.message || 'Login failed' })
  }
}