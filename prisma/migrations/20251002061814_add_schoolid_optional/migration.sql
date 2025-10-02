/*
  Warnings:

  - A unique constraint covering the columns `[className,term,schoolId]` on the table `ClassTermFee` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ClassTermFee_className_term_key";

-- AlterTable
ALTER TABLE "ClassTermFee" ADD COLUMN     "schoolId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ClassTermFee_className_term_schoolId_key" ON "ClassTermFee"("className", "term", "schoolId");

-- AddForeignKey
ALTER TABLE "ClassTermFee" ADD CONSTRAINT "ClassTermFee_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;
