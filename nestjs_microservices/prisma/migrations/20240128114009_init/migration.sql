/*
  Warnings:

  - The required column `id` was added to the `Finance` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Finance_userId_key";

-- AlterTable
ALTER TABLE "Finance" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Finance_pkey" PRIMARY KEY ("id");
