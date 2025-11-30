import { Router } from 'express'
import { searchHotels, getHotelById } from '../controllers/hotelController.js'

const router = Router()

router.get('/search', searchHotels)
router.get('/:id', getHotelById)

export default router