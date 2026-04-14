-- AlterTable
ALTER TABLE "category" ADD COLUMN "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN "isPreset" BOOLEAN NOT NULL DEFAULT false;

-- Mark seeded app defaults as presets so they can be enabled/disabled,
-- but not permanently deleted from a user's category library.
UPDATE "category"
SET "isPreset" = true
WHERE "slug" IN (
    'personal',
    'work',
    'club',
    'church',
    'education',
    'event',
    'marketing',
    'health',
    'finance',
    'travel',
    'entertainment',
    'technology',
    'food',
    'non_profit',
    'other'
);
