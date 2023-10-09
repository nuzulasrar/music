/*
  Warnings:

  - You are about to drop the column `prepared_by` on the `toll_form` table. All the data in the column will be lost.
  - Added the required column `prepared_by_name` to the `Toll_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prepared_by_office` to the `Toll_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prepared_by_position` to the `Toll_form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `toll_form` DROP COLUMN `prepared_by`,
    ADD COLUMN `prepared_by_name` TEXT NOT NULL,
    ADD COLUMN `prepared_by_office` TEXT NOT NULL,
    ADD COLUMN `prepared_by_position` TEXT NOT NULL;
