/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `FeaturedSection` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FeaturedSection_title_key" ON "FeaturedSection"("title");
