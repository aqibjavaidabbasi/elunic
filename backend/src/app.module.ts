import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: false,
    }),
    SequelizeModule.forFeature([UserMessage])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}


// here all dbn and model condigs are definedd
