/*
  Warnings:

  - You are about to drop the column `expires_on` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `address_2` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `companies_worked_at` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `current_ctc` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "expires_on";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "address",
DROP COLUMN "address_2",
DROP COLUMN "companies_worked_at",
DROP COLUMN "current_ctc";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_onboarding_completed" BOOLEAN NOT NULL DEFAULT false;
