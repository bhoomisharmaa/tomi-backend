import { Injectable } from '@nestjs/common';
import { $Enums, Prisma } from '@prisma/client';
import { error } from 'console';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TransactionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createTransaction(data: Prisma.TransactionCreateInput) {
    try {
      const transaction = this.databaseService.user.update({
        where: {
          id: 'clyj1wmmh0000izpo07lh36gt',
          AND: [{ firstName: 'Bhoomi' }],
        },

        data: {
          transactions: {
            create: {
              description: 'Flight booking',
              amount: 1000,
              type: 'EXPENSE',
              expenseCategory: 'TRANSPORT',
            },
          },
        },
      });
      console.log(transaction);
      return transaction;
    } catch (error) {
      console.log('Error making your transaction', error);
    } finally {
      await this.databaseService.$disconnect();
    }
  }

  async getAllTransactions() {
    try {
      const transactions = this.databaseService.transaction.findMany({
        where: {
          userId: 'clyj1wmmh0000izpo07lh36gt',
        },
        orderBy: {
          date: 'desc',
        },
      });
      console.log(transactions);
      return transactions;
    } catch (error) {
      console.log('Error fetching transactions', error);
    } finally {
      this.databaseService.$disconnect();
    }
  }

  async getIncomeOrExpenseTransactions(
    transactionType: $Enums.TransactionType,
  ) {
    try {
      const transactions = this.databaseService.transaction.findMany({
        where: {
          userId: 'clyj1wmmh0000izpo07lh36gt',
          type: transactionType,
        },
        orderBy: {
          date: 'desc',
        },
      });
      console.log(transactions);
      return transactions;
    } catch (error) {
      console.log('Error getting transaction', error);
    } finally {
      await this.databaseService.$disconnect();
    }
  }

  async deleteTransaction(id: string) {
    try {
      await this.databaseService.transaction.delete({
        where: {
          userId: 'clyj1wmmh0000izpo07lh36gt',
          id,
        },
      });
    } catch (error) {
      console.log('Error deleting transaction', error);
    } finally {
      await this.databaseService.$disconnect();
    }
  }
}