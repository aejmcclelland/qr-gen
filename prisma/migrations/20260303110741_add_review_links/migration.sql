/*
  Warnings:

  - You are about to drop the column `googleReviewUrl` on the `ReviewLink` table. All the data in the column will be lost.
  - Added the required column `reviewPlatform` to the `ReviewLink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviewUrl` to the `ReviewLink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReviewLink" DROP COLUMN "googleReviewUrl",
ADD COLUMN     "reviewPlatform" TEXT NOT NULL,
ADD COLUMN     "reviewUrl" TEXT NOT NULL;
