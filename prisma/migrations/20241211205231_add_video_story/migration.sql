-- CreateTable
CREATE TABLE "VideoStory" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "video_url" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VideoStory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VideoStory_title_key" ON "VideoStory"("title");
