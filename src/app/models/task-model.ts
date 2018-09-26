export class TaskModel {

    public titulo: string;
    public descripcion: string;
    public prioridad: number;
    public fecha: Date;
    public realizada: boolean;

    public constructor(titulo: string, descripcion: string, prioridad: number, fecha: Date, realizada?: boolean){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.fecha = fecha;
        this.realizada = realizada;
    }

}
