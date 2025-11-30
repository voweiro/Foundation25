import transporter from '../config/email.js'

export async function sendBookingConfirmation(userEmail, reservation) {
  const subject = `Your SkyStay booking: ${reservation.hotelName}`
  const text = `Reservation ID: ${reservation.id}\nHotel: ${reservation.hotelName}\nCheck-in: ${new Date(reservation.checkIn).toDateString()}\nCheck-out: ${new Date(reservation.checkOut).toDateString()}`
  const html = `<p><strong>Reservation ID:</strong> ${reservation.id}</p>
<p><strong>Hotel:</strong> ${reservation.hotelName}</p>
<p><strong>Check-in:</strong> ${new Date(reservation.checkIn).toDateString()}</p>
<p><strong>Check-out:</strong> ${new Date(reservation.checkOut).toDateString()}</p>`

  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject,
    text,
    html,
  })
  return info
}