/*
  Warnings:

  - You are about to drop the column `dob` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profile_image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "dob",
DROP COLUMN "email",
DROP COLUMN "firstname",
DROP COLUMN "lastname",
DROP COLUMN "location",
DROP COLUMN "phone_number",
DROP COLUMN "profile_image";
