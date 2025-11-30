import { searchHotelsByCity, fetchHotelById } from '../services/hotelService.js'

export async function searchHotels(req, res) {
  try {
    const { city } = req.query
    if (!city) return res.status(400).json({ message: 'city is required' })
    const hotels = await searchHotelsByCity(city)
    res.json(hotels)
  } catch (err) {
    res.status(500).json({ message: err.message || 'Failed to fetch hotels' })
  }
}

export async function getHotelById(req, res) {
  try {
    const { id } = req.params
    const hotel = await fetchHotelById(id)
    res.json(hotel)
  } catch (err) {
    res.status(500).json({ message: err.message || 'Failed to fetch hotel' })
  }
}