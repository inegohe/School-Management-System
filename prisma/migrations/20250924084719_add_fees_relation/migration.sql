-- CreateTable
CREATE TABLE "FeesPayment" (
    "id" SERIAL NOT NULL,
    "studentId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paidAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "term" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "FeesPayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeesPayment" ADD CONSTRAINT "FeesPayment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
