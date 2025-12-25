-- AlterTable
ALTER TABLE "user" ADD COLUMN     "avatarUploadCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "lastAvatarUpdatedAt" TIMESTAMP(3);
