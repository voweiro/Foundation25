import { Router } from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { me, updateMe, changeMyPassword } from '../controllers/userController.js'

const router = Router()

router.get('/me', authMiddleware, me)
router.put('/', authMiddleware, updateMe)
router.post('/password', authMiddleware, changeMyPassword)

export default router

