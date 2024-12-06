-- AlterTable
ALTER TABLE "News" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "reporter_name" DROP NOT NULL,
ALTER COLUMN "updated_by_id" DROP NOT NULL;
