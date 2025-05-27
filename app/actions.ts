'use server'

import { prisma } from "@/lib/db";

export async function createListing(gameDate: Date, price: number) {
  const listing = await prisma.sportsPass.create({
    data: {
      gameDate,
      price,
      sellerId: 'cmaxd2agf000017sn3z55k9f5',
    },
  });
  return listing;
}

export async function createAdmin() {
    const admin = await prisma.user.create({
        data: {
            name: "Admin",
            seller: true,
            classification: "SENIOR",
        },
    });
    return admin;
}