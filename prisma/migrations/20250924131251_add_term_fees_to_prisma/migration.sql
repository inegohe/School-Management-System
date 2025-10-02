-- CreateTable
CREATE TABLE "ClassTermFee" (
    "id" SERIAL NOT NULL,
    "className" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "totalFee" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClassTermFee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClassTermFee_className_term_key" ON "ClassTermFee"("className", "term");
