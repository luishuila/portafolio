

export interface DatosItem {
    nombreImages:any,
    trabajos:String,
    descripcion:string,
    selecion:string,
    url:string,
    nombreArchivo:string,
    id:string
}
export class FileItem{
    public archivo:File;
    public nombreArchivo:string;
    public url:any  ;
    public estasubliendo:boolean;
    public progreso:any;
    
    constructor(archivo:File){
        this.archivo = archivo
        this.nombreArchivo = archivo.name
        this.estasubliendo = false
      
       } 

     
}