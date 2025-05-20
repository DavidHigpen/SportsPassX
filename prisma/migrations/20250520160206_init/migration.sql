-- CreateEnum
CREATE TYPE "Class" AS ENUM ('FRESHMAN', 'SOPHOMORE', 'JUNIOR', 'SENIOR');

-- CreateTable
CREATE TABLE "Games" (
    "date" TIMESTAMP(3) NOT NULL,
    "opponent" TEXT NOT NULL,
    "guestPrice" INTEGER NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("date")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "seller" BOOLEAN DEFAULT false,
    "classification" "Class",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SportsPass" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "gameDate" TIMESTAMP(3) NOT NULL,
    "sellerId" TEXT NOT NULL,
    "buyerId" TEXT,

    CONSTRAINT "SportsPass_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "SportsPass" ADD CONSTRAINT "SportsPass_gameDate_fkey" FOREIGN KEY ("gameDate") REFERENCES "Games"("date") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportsPass" ADD CONSTRAINT "SportsPass_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportsPass" ADD CONSTRAINT "SportsPass_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
