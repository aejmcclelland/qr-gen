/*
  Warnings:

  - A unique constraint covering the columns `[userId,targetUrl]` on the table `qrcodes` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "qrcodes" ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "qrcodes_userId_targetUrl_key" ON "qrcodes"("userId", "targetUrl");
