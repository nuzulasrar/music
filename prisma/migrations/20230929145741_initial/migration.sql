/*
  Warnings:

  - You are about to drop the `form_bridge` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `form_bridge`;

-- CreateTable
CREATE TABLE `Bridge_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `span_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
