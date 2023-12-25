/*
  Warnings:

  - You are about to drop the column `countryCode` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `otpSentToMobile` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userType` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SkillTypeEnum" AS ENUM ('VEGETABLE_CUTTING', 'COOKING', 'CLEANING', 'HEAD_CHEF', 'SERVERS');

-- CreateEnum
CREATE TYPE "EmploymentTypeEnum" AS ENUM ('FULL_TIME', 'PART_TIME');

-- CreateEnum
CREATE TYPE "StatusTypeEnum" AS ENUM ('DRAFT', 'SUBMITTED');

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "countryCode",
DROP COLUMN "otpSentToMobile",
DROP COLUMN "phoneNumber",
ADD COLUMN     "country_code" VARCHAR(20),
ADD COLUMN     "otp_sent_to_mobile" VARCHAR(20),
ADD COLUMN     "phone_number" VARCHAR(20);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "phoneNumber",
DROP COLUMN "userType",
ADD COLUMN     "phone_number" VARCHAR(20),
ADD COLUMN     "user_type" "UserTypeEnum";

-- CreateTable
CREATE TABLE "Company" (
    "id" UUID NOT NULL,
    "created_at_utc" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "user_id" VARCHAR(200),
    "company_name" VARCHAR(100) NOT NULL,
    "gst_number" VARCHAR(20),
    "founded_at_utc" TIMESTAMP(3),
    "address" VARCHAR(200) NOT NULL,
    "address_2" VARCHAR(200),
    "pincode" VARCHAR(10),
    "city" VARCHAR(200),
    "state" VARCHAR(100),
    "country" VARCHAR(100),

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" UUID NOT NULL,
    "created_at_utc" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "user_id" VARCHAR(200),
    "firstname" VARCHAR(200),
    "lastname" VARCHAR(200),
    "phone_number" VARCHAR(20),
    "country_code" VARCHAR(20),
    "email" VARCHAR(200),
    "gender" VARCHAR(20),
    "aadhar_number" VARCHAR(100),
    "pan_number" VARCHAR(50),
    "dob" TIMESTAMP(3),
    "experience_years" INTEGER,
    "experience_months" INTEGER,
    "companies_worked_at" VARCHAR[],
    "current_ctc" INTEGER,
    "skills" "SkillTypeEnum"[],
    "education" TEXT,
    "profile_image" VARCHAR(200),
    "locations" VARCHAR[],
    "currently_working_in" VARCHAR(200),
    "address" VARCHAR(200) NOT NULL,
    "address_2" VARCHAR(200),
    "pincode" VARCHAR(10),
    "city" VARCHAR(200),
    "state" VARCHAR(100),
    "country" VARCHAR(100),
    "search_code" VARCHAR,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" UUID NOT NULL,
    "created_at_utc" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "user_id" VARCHAR(200),
    "company_name" VARCHAR(100) NOT NULL,
    "company_id" VARCHAR(200),
    "title" VARCHAR(200) NOT NULL,
    "description" VARCHAR NOT NULL,
    "post_by_id" VARCHAR(200),
    "location" VARCHAR(200),
    "rating" INTEGER,
    "department" "UserTypeEnum",
    "skills" "SkillTypeEnum"[],
    "experience" VARCHAR(200),
    "employment_type" "EmploymentTypeEnum",
    "education" VARCHAR(200),
    "salary" INTEGER,
    "status" "StatusTypeEnum",
    "no_of_vacancies" VARCHAR(200),

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" UUID NOT NULL,
    "created_at_utc" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "user_id" VARCHAR(200),
    "sent_by_id" VARCHAR(200),
    "post_id" VARCHAR(200),
    "expires_on" TIMESTAMP(3),
    "scheduled_at" TIMESTAMP(3),
    "search_code" VARCHAR,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Request" (
    "id" UUID NOT NULL,
    "created_at_utc" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "requested_by_id" VARCHAR(200),
    "requested_to" VARCHAR(200),
    "post_id" VARCHAR(200),

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Company_user_id_company_name_idx" ON "Company"("user_id", "company_name");

-- CreateIndex
CREATE INDEX "Profile_user_id_search_code_idx" ON "Profile"("user_id", "search_code");

-- CreateIndex
CREATE INDEX "Post_department_idx" ON "Post"("department");

-- CreateIndex
CREATE INDEX "Notification_search_code_idx" ON "Notification"("search_code");

-- CreateIndex
CREATE INDEX "Request_requested_to_idx" ON "Request"("requested_to");

-- CreateIndex
CREATE INDEX "Account_username_phone_number_idx" ON "Account"("username", "phone_number");
