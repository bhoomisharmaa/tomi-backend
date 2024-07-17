/*
  Warnings:

  - You are about to drop the column `transactionCategory` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "transactionCategory",
ADD COLUMN     "category" "TransactionCategory";
