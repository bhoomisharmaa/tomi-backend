/*
  Warnings:

  - You are about to drop the column `expenseCategory` on the `Transaction` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('SHOPPING', 'FOOD_AND_DRINKS', 'STATIONERY', 'TRANSPORT');

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "expenseCategory",
ADD COLUMN     "transactionCategory" "TransactionCategory";

-- DropEnum
DROP TYPE "ExpenseCategory";
