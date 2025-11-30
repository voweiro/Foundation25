import axios from 'axios'

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST
const BASE_URL = `https://${RAPIDAPI_HOST}`

function mapHotel(h) {
  return {
    id: h.id || h.hotel_id || String(h.id || ''),
    name: h.name || h.hotel_name || '',
    price: h.price?.amount || h.price || h.rate || null,
    rating: h.rating || h.stars || null,
    address: h.address || h.location?.address || '',
    description: h.description || '',
    images: h.images || h.photos || [],
    amenities: h.amenities || h.facilities || [],
  }
}

export async function searchHotelsByCity(city) {
  const url = `${BASE_URL}/hotels/search`
  const { data } = await axios.get(url, {
    params: { city },
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': RAPIDAPI_HOST,
    },
  })
  const items = data?.hotels || data?.results || data?.data || []
  return items.map(mapHotel)
}

export async function fetchHotelById(id) {
  const url = `${BASE_URL}/hotels/${id}`
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': RAPIDAPI_HOST,
    },
  })
  const h = data?.hotel || data || {}
  return mapHotel(h)
}