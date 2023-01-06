export interface About{
    titulo:string;
    texto:string;
    rutaimagen:string;

}
export interface Experiencia{
    id:number;
    titulo:string;
    rutaimagen:string;
    texto:string;
}
export interface Educacion{
    id:number
    titulo:string;
    texto:string;
    rutaimagen:string;
}
export interface Skills{
    id:number;
    titulo:string;
    numero:number;
}
export interface Proyectos{
    id:number,
    titulo:string;
    rutaimagen:string;
    texto:string;
    link:string;
    
}
