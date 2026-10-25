import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module.js';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://maticraft49_db_user:Pq8JlWxr3QlG9Cuc@dsocial.gcssjqx.mongodb.net/'),
    //MongooseModule.forRoot(process.env.CONNECTION_STRING!),
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
  