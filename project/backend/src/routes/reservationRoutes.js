import { Router } from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { createReservation, getMyReservations } from '../controllers/reservationController.js'

const router = Router()

router.post('/', authMiddleware, createReservation)
router.get('/me', authMiddleware, getMyReservations)

export default router