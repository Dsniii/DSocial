import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module.js';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.CONNECTION_STRING!),
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
  