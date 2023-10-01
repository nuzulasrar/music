/*
  Warnings:

  - Added the required column `prepared_by` to the `Toll_form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `toll_form` ADD COLUMN `prepared_by` TEXT NOT NULL;
