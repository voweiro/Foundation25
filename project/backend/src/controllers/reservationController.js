import { createUserReservation, listUserReservations } from '../services/reservationService.js'
import { sendBookingConfirmation } from '../services/emailService.js'

export async function createReservation(req, res) {
  try {
    const userId = req.user?.id
    const { hotelId, hotelName, checkIn, checkOut } = req.body
    if (!hotelId || !hotelName || !checkIn || !checkOut) {
      return res.status(400).json({ message: 'Missing reservation fields' })
    }
    const reservation = await createUserReservation({
      userId,
      hotelId,
      hotelName,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
    })

    if (req.user?.email) {
      try {
        await sendBookingConfirmation(req.user.email, reservation)
      } catch {}
    }

    res.status(201).json(reservation)
  } catch (err) {
    res.status(500).json({ message: err.message || 'Failed to create reservation' })
  }
}

export async function getMyReservations(req, res) {
  try {
    const userId = req.user?.id
    const reservations = await listUserReservations(userId)
    res.json(reservations)
  } catch (err) {
    res.status(500).json({ message: err.message || 'Failed to fetch reservations' })
  }
}