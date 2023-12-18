-- CreateTable
CREATE TABLE "Account" (
    "id" UUID NOT NULL,
    "created_at_utc" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "username" VARCHAR(200),
    "password" VARCHAR(100),
    "phoneNumber" VARCHAR(20),
    "otpSentToMobile" VARCHAR(20),
    "countryCode" VARCHAR(20),

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "created_at_utc" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "account_id" VARCHAR(100) NOT NULL,
    "firstname" VARCHAR(200) NOT NULL,
    "lastname" VARCHAR(200),
    "email" VARCHAR(200) NOT NULL,
    "phoneNumber" VARCHAR(20),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
