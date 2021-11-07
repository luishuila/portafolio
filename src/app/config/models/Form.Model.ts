export interface FormModelsInt {
     name:string;
     email:string;
     descripcion:string  ;
     phone:number;
}
export class FormModels implements FormModelsInt{
    private _name:string;
    private _email:string;
    public _descripcion:string  ;
    public _phone:number;
  
   
    constructor(name:string,  email:string,phone:number,descripcion:string   ){
        this._name = name,
        this._email = email,
        this._phone = phone
        this._descripcion = descripcion
       } 
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get phone(): number {
        return this._phone;
    }
    set phone(value: number) {
        this._phone = value;
    }
    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }
    get descripcion(): string {
        return this._descripcion;
    }
    set descripcion(value: string) {
        this._descripcion = value;
    }
     
}