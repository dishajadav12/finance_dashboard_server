/*
  Warnings:

  - Added the required column `transaction` to the `Finance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Finance" ADD COLUMN     "transaction" INTEGER NOT NULL,
ALTER COLUMN "type" SET DATA TYPE TEXT;
