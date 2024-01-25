/*
  Warnings:

  - You are about to drop the column `breed` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the column `characteristics` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - Added the required column `description` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level_of_independence` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "breed",
DROP COLUMN "characteristics",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "energy" INTEGER NOT NULL,
ADD COLUMN     "level_of_independence" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "password";
