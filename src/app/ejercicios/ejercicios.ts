import { Categoria } from "./categoria";

export interface Ejercicios {
    id: number,
    titulo: string,
    colaboradores: string,
    descripcion: string,
    participantes: number,
    estadoejercicios: string,
    createDate:Date,
    modifyDate:Date,
    user_id: number,
    categoria:any
    
}