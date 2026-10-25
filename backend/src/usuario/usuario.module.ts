import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioService } from './usuario.service.js';
import { UsuarioController } from './usuario.controller.js';
import { Usuario, UsuarioSchema } from './entities/usuario.entity.js';


@Module({
  imports: [MongooseModule.forFeature([{ name: "Usuario", schema: UsuarioSchema }])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
