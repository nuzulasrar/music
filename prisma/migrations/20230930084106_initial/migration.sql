/*
  Warnings:

  - Added the required column `project_type` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `project` ADD COLUMN `project_type` TEXT NOT NULL;
