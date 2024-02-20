/*
  Warnings:

  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Finance" (
    "anualIncome" INTEGER NOT NULL,
    "type" BOOLEAN NOT NULL,
    "category" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Finance_userId_key" ON "Finance"("userId");

-- AddForeignKey
ALTER TABLE "Finance" ADD CONSTRAINT "Finance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
