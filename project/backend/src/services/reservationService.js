import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUserReservation({ userId, hotelId, hotelName, checkIn, checkOut }) {
  return prisma.reservation.create({
    data: {
      userId,
      hotelId,
      hotelName,
      checkIn,
      checkOut,
    },
  })
}

export async function listUserReservations(userId) {
  return prisma.reservation.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  })
}