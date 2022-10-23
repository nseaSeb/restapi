import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiSchema } from './api.schema';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.URL_MONGO, {
      useNewUrlParser: true,
      dbName: 'apinode',
    }),
    MongooseModule.forFeature([{ name: 'api', schema: ApiSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
