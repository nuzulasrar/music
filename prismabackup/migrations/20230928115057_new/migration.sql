/*
  Warnings:

  - You are about to drop the `toll_type_of_damage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `toll_type_of_damage`;

-- CreateTable
CREATE TABLE `Toll_list_type_of_damage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
