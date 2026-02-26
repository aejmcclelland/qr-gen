-- CreateTable
CREATE TABLE "keepalive" (
    "id" BIGSERIAL NOT NULL,
    "ranAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" TEXT NOT NULL,

    CONSTRAINT "keepalive_pkey" PRIMARY KEY ("id")
);
