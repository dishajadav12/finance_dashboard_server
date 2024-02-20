/*
  Warnings:

  - You are about to drop the column `anualIncome` on the `Finance` table. All the data in the column will be lost.
  - Added the required column `anualIncome` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Finance" DROP COLUMN "anualIncome";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "anualIncome" INTEGER NOT NULL;
