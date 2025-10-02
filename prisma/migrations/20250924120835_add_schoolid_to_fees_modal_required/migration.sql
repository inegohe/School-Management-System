/*
  Warnings:

  - Made the column `schoolId` on table `FeesPayment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FeesPayment" ALTER COLUMN "schoolId" SET NOT NULL;
