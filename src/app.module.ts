import { Module } from '@nestjs/common'
import { UsersService } from './users/users.service'
import { UsersController } from './users/users.controller'
import { UsersModule } from './users/users.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [UsersModule, PrismaModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class AppModule {}
