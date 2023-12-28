/*
  Warnings:

  - You are about to alter the column `created_by_id` on the `Account` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `updated_by_id` on the `Account` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `created_by_id` on the `Company` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `updated_by_id` on the `Company` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `created_by_id` on the `Notification` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `updated_by_id` on the `Notification` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `created_by_id` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `updated_by_id` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `created_by_id` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `updated_by_id` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `created_by_id` on the `Request` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `updated_by_id` on the `Request` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `created_by_id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `updated_by_id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "created_by_id" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "updated_by_id" SET DATA TYPE VARCHAR(200);

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "created_by_id" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "updated_by_id" SET DATA TYPE VARCHAR(200);

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "created_by_id" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "updated_by_id" SET DATA TYPE VARCHAR(200);

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "created_by_id" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "updated_by_id" SET DATA TYPE VARCHAR(200);

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "created_by_id" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "updated_by_id" SET DATA TYPE VARCHAR(200);

-- AlterTable
ALTER TABLE "Request" ALTER COLUMN "created_by_id" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "updated_by_id" SET DATA TYPE VARCHAR(200);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "created_by_id" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "updated_by_id" SET DATA TYPE VARCHAR(200);
