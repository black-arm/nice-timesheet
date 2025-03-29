import { Module } from '@nestjs/common';
import { UserManagerModule } from './user-manager/user.module';
import { DebugModule } from './app-manager/debug.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserManagerModule,
    DebugModule,
    DatabaseModule
  ],
})
export class AppModule {
}
