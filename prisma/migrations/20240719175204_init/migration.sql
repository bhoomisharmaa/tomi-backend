-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "date" SET DEFAULT get_end_time();
