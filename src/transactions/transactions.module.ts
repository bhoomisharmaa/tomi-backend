import { Module } from '@nestjs/common';
import { UserController } from 'src/user/user.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class TransactionsModule {}
