/*
  Warnings:

  - Added the required column `gps_latitude` to the `Toll_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gps_longitude` to the `Toll_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highway_code` to the `Toll_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highway_name` to the `Toll_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no_of_toll_lanes` to the `Toll_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plaza_toll_name` to the `Toll_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_for_year` to the `Toll_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `section` to the `Toll_form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `project` MODIFY `project_name` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `toll_form` ADD COLUMN `gps_latitude` TEXT NOT NULL,
    ADD COLUMN `gps_longitude` TEXT NOT NULL,
    ADD COLUMN `highway_code` TEXT NOT NULL,
    ADD COLUMN `highway_name` TEXT NOT NULL,
    ADD COLUMN `no_of_toll_lanes` TEXT NOT NULL,
    ADD COLUMN `plaza_toll_name` TEXT NOT NULL,
    ADD COLUMN `report_for_year` TEXT NOT NULL,
    ADD COLUMN `section` TEXT NOT NULL;
