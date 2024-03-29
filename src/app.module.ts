import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MultilingualModule } from './multilingual/multilingual.module';
import { TranslateService } from 'pim-multilingual';
@Module({
  imports: [MultilingualModule],
  controllers: [AppController],
  providers: [AppService, TranslateService],
})
export class AppModule {}
