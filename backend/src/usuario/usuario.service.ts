import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { Usuario } from './entities/usuario.entity.js';

@Injectable()
export class UsuarioService {
  
  constructor(@InjectModel("Usuario") private readonly usuarioModel: Model<Usuario>) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioModel.create(createUsuarioDto);
  }

  findAll() {
    return this.usuarioModel.find().exec();
  }

  findOne(id: number) {
    return this.usuarioModel.findById(id).exec();
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto, { new: true }).exec();
  }

  remove(id: number) {
    return this.usuarioModel.findByIdAndDelete(id).exec();
  }
}
