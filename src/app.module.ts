import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { TransactionsController } from './transactions/transactions.controller';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsModule } from './transactions/transactions.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [UserModule, DatabaseModule, TransactionsModule],
  controllers: [AppController, UserController, TransactionsController],
  providers: [AppService, TransactionsService, DatabaseService],
})
export class AppModule {}
