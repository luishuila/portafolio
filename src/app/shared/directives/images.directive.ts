import { Directive, HostListener, EventEmitter, Input, Output } from '@angular/core';
import { FileItem } from './../../config/models/file-item';

@Directive({
  selector: '[appImages]'
})
export class ImagesDirective {

  @Input() files: FileItem[] = [];
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  @HostListener('dragover', ['$event'])


  onDropEntre(event: any) {
    this.mouseOver.emit(true)
    this._prevene(event)
  }

  @HostListener('dragleave', ['$event'])
  onDropLeand(event: any) {
    this.mouseOver.emit(false)
    this._prevene(event)
  }


  @HostListener('drop', ['$event'])
  onDrop(event: any) {

    const trans = this._getTraferencie(event)
    if(!trans){
      return
    }


    this._extraerArchivos(trans.files)

    this._prevene(event)
    this.mouseOver.emit(false)
  }

  private _getTraferencie(event:any){
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extraerArchivos( archivosLista: FileList ) {

    for ( const propiedad in Object.getOwnPropertyNames( archivosLista ) ) {
      const archivoTemporal = archivosLista[propiedad];

      if ( this._siEsvalido( archivoTemporal ) ) {

        const nuevoArchivo = new FileItem( archivoTemporal );
        this.files.push( nuevoArchivo );

      }
    }

  }
  //Validacion

  private _siEsvalido(archivo:File){
    if (!this._archivoDroppeado(archivo.name) && this._imagenes(archivo.type)) {
      return true
    }else{
      return false
    }
  }

  private _prevene(event:any){
    event.preventDefault()
    event.stopPropagation()
  }

  private _archivoDroppeado(nombreArchivo:string):boolean{
      for (const item of this.files) {
        if(item.nombreArchivo == nombreArchivo){

          return true
        }
      }
      return false
  }
  private _imagenes(tipoArchivo:string){
    return (tipoArchivo == '' || tipoArchivo==undefined)? false : tipoArchivo.startsWith('image');
  }

}
