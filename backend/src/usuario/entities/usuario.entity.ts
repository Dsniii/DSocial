
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
    @Prop({ required: true, message: 'El nombre es obligatorio' })
    nombre: string;

    @Prop({ required: true, message: 'El apellido es obligatorio' })
    apellido: string;

    @Prop({ required: true, message: 'El nombre de usuario es obligatorio' })
    nombreUsuario: string;

    @Prop({ required: true, message: 'La contraseña es obligatoria' })
    contraseña: string;

    @Prop({ required: true, message: 'La fecha de nacimiento es obligatoria' })
    fechaNacimiento: Date;

    @Prop({ required: true, message: 'La descripción es obligatoria' })
    descripcion: string;

    @Prop({ required: true, message: 'El email es obligatorio' })
    email: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);