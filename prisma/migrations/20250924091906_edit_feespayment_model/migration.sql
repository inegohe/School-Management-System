/*
  Warnings:

  - Added the required column `paymentMethod` to the `FeesPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FeesPayment" ADD COLUMN     "paymentMethod" TEXT NOT NULL;
