export class TaskModel {

    public titulo: string;
    public descripcion: string;
    public realizada: boolean;

    public constructor(titulo?: string, descripcion?: string, realizada?: boolean){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.realizada = realizada;
    }

    

}
