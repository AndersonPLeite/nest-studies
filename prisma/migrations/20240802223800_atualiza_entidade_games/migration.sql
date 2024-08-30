/*
  Warnings:

  - You are about to drop the column `genre` on the `Games` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Games` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoria` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataLancamento` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Games" DROP COLUMN "genre",
DROP COLUMN "title",
ADD COLUMN     "categoria" TEXT NOT NULL,
ADD COLUMN     "dataLancamento" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";
