/*
  Warnings:

  - You are about to drop the column `type` on the `Finance` table. All the data in the column will be lost.
  - Added the required column `fType` to the `Finance` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `anualIncome` on the `Finance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `transaction` on the `Finance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Finance" DROP COLUMN "type",
ADD COLUMN     "fType" TEXT NOT NULL,
DROP COLUMN "anualIncome",
ADD COLUMN     "anualIncome" INTEGER NOT NULL,
DROP COLUMN "transaction",
ADD COLUMN     "transaction" INTEGER NOT NULL;
