import { Body, Controller, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Prisma } from '@prisma/client';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Post('create-transaction')
  async createTransaction(@Body() data: Prisma.TransactionCreateInput) {
    return await this.transactionService.createTransaction(data);
  }
}
