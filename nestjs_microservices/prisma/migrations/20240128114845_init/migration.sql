/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Finance` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Finance_id_key" ON "Finance"("id");
