/*
  Warnings:

  - You are about to drop the column `reviewPlatform` on the `ReviewLink` table. All the data in the column will be lost.
  - You are about to drop the column `reviewUrl` on the `ReviewLink` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ReviewLink" DROP COLUMN "reviewPlatform",
DROP COLUMN "reviewUrl";

-- CreateTable
CREATE TABLE "ReviewDestination" (
    "id" TEXT NOT NULL,
    "reviewLinkId" TEXT NOT NULL,
    "platformKey" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "reviewUrl" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ReviewDestination_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ReviewDestination_reviewLinkId_sortOrder_idx" ON "ReviewDestination"("reviewLinkId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "ReviewDestination_reviewLinkId_platformKey_key" ON "ReviewDestination"("reviewLinkId", "platformKey");

-- AddForeignKey
ALTER TABLE "ReviewDestination" ADD CONSTRAINT "ReviewDestination_reviewLinkId_fkey" FOREIGN KEY ("reviewLinkId") REFERENCES "ReviewLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
