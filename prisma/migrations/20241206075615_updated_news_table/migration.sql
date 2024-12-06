-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_updated_by_id_fkey";

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_updated_by_id_fkey" FOREIGN KEY ("updated_by_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
