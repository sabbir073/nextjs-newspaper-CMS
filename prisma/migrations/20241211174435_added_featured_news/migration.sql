-- CreateTable
CREATE TABLE "FeaturedSection" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "news_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeaturedSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeaturedSection" ADD CONSTRAINT "FeaturedSection_news_id_fkey" FOREIGN KEY ("news_id") REFERENCES "News"("id") ON DELETE SET NULL ON UPDATE CASCADE;
