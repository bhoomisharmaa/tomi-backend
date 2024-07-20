import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { $Enums, Prisma } from '@prisma/client';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Post('create-transaction')
  async createTransaction(@Body() data: Prisma.TransactionCreateInput) {
    return await this.transactionService.createTransaction(data);
  }

  @Get('get-transactions/all')
  async getAllTransactions() {
    return await this.transactionService.getAllTransactions();
  }

  @Get('get-transactions/:transactionType')
  async getIncomeOrExpenseTransactions(
    @Param('transactionType') transactionType: string,
  ) {
    return await this.transactionService.getIncomeOrExpenseTransactions(
      $Enums.TransactionType[
        transactionType as keyof typeof $Enums.TransactionType
      ],
    );
  }

  @Get('get-transactions/:transactionType/:startDate/:endDate')
  async getTransactionInRange(
    @Param('transactionType') transactionType: string,
    @Param('startDate') startDate: string,
    @Param('endDate') endDate: string,
  ) {
    try {
      const parsedStartDate = new Date(startDate);
      const parsedEndDate = new Date(endDate);

      // Ensure dates are valid
      if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
        throw new Error('Invalid date format');
      }

      const transactions = await this.transactionService.getTransactionsInRange(
        $Enums.TransactionType[
          transactionType as keyof typeof $Enums.TransactionType
        ],
        parsedStartDate,
        parsedEndDate,
      );

      return transactions;
    } catch (error) {
      console.error('Error in getTransactionInRange:', error);
      throw error;
    }
  }

  @Delete('delete-transaction/:id')
  async deleteTransaction(@Param('id') id: string) {
    return await this.transactionService.deleteTransaction(id);
  }
}
