"use server";

import { prisma } from "@/lib/db";

export async function createListing(id: string, gameDate: Date, price: number) {
  const listing = await prisma.sportsPass.create({
    data: {
      gameDate,
      price,
      sellerId: id,
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

export async function updateAccount(userID: string, ownsPass: boolean, userClass: "SENIOR" | "JUNIOR" | "SOPHOMORE" | "FRESHMAN" | null) {
  const user = await prisma.user.update({
    where: {
      id: userID,
    },
    data: {
      seller: ownsPass,
      classification: userClass,
    }
  });
}
