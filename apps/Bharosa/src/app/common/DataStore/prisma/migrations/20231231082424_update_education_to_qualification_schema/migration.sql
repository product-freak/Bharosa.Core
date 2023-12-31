/*
  Warnings:

  - You are about to drop the column `education` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "education",
ADD COLUMN     "qualification" VARCHAR(200);

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "education",
ADD COLUMN     "qualification" TEXT;
