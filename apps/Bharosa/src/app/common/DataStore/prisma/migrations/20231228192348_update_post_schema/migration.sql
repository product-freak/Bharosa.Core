-- DropIndex
DROP INDEX "Post_department_idx";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "image_url" VARCHAR(200),
ADD COLUMN     "search_code" VARCHAR;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "languages_known" VARCHAR[];

-- CreateIndex
CREATE INDEX "Post_department_search_code_idx" ON "Post"("department", "search_code");
