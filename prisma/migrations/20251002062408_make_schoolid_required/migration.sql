/*
  Warnings:

  - Made the column `schoolId` on table `ClassTermFee` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ClassTermFee" DROP CONSTRAINT "ClassTermFee_schoolId_fkey";

-- AlterTable
ALTER TABLE "ClassTermFee" ALTER COLUMN "schoolId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ClassTermFee" ADD CONSTRAINT "ClassTermFee_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
