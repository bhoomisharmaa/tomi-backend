import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TransactionsController } from './transactions/transactions.controller';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsModule } from './transactions/transactions.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [DatabaseModule, TransactionsModule],
  controllers: [AppController, TransactionsController],
  providers: [AppService, TransactionsService, DatabaseService],
})
export class AppModule {}
