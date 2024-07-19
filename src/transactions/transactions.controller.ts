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

  @Delete('delete-transaction/:id')
  async deleteTransaction(@Param('id') id: string) {
    return await this.transactionService.deleteTransaction(id);
  }
}
