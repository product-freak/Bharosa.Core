-- CreateEnum
CREATE TYPE "RoleTypeEnum" AS ENUM ('ADMIN', 'GENERAL_ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "UserTypeEnum" AS ENUM ('KITCHEN_STAFF', 'PLUMBER', 'CARPENTER', 'ELECTRICIAN', 'GENERAL_ADMIN');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "role" "RoleTypeEnum";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "location" TEXT,
ADD COLUMN     "profile_image" VARCHAR,
ADD COLUMN     "userType" "UserTypeEnum";
