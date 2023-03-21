export interface Dato{
    id:number;
    titulo:string;
    rutaimagen:string;
    texto:string;
    link:string;
    numero:number;
    tipodato:tipodato
}
export interface tipodato{
    id:number;
    quetipodato:string;
}

export class tipodato implements tipodato{
    id:number=1;
    quetipodato:string="";

}

export class Dato implements Dato{
    id:number=0;
    titulo:string="";
    rutaimagen:string="";
    texto:string="";
    link:string="";
    numero:number;
    tipodato:tipodato = new tipodato();
}
