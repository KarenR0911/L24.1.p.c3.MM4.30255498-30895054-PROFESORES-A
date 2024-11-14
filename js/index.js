let categoria=["Instructor", "Asistente", 
    "Agregado","Asociado", "Titular"];
let profesores=[
    {categoria:1, cedula:111, nombre:"Manuel", sexo: "M"},
    {categoria:5, cedula:555, nombre:"Karla", sexo: "F"},
    {categoria:3, cedula:333, nombre:"Pancracio", sexo: "M"},
    {categoria:4, cedula:888, nombre:"Elizabeth", sexo: "F"},
    {categoria:2, cedula:222, nombre:"Rafael", sexo: "M"},
    {categoria:5, cedula:666, nombre:"Juan", sexo: "M"},
    {categoria:1, cedula:444, nombre:"Laura", sexo: "F"},
    {categoria:4, cedula:777, nombre:"Mario", sexo: "M"},
    {categoria:3, cedula:999, nombre:"Eduardo", sexo: "M"},
    {categoria:2, cedula:100, nombre:"Simón", sexo: "M"},
];

let profesoresCategoria= (profesores, categoria) => {
    let profesoresFiltrados= [];
    profesores.forEach((profesor) => {
        if(profesor.categoria==categoria) profesoresFiltrados.push(profesor);
    });
    return profesoresFiltrados;
};

let salida= document.getElementById("salida");
let profesores1= profesoresCategoria(profesores, 1);
salida.innerHTML= `Profesores de la categoria ${categoria[0]}: <br><br>`
profesores1.forEach((profesor)=>{
    salida.innerHTML+=`Cedula:${profesor.cedula} <br>Nombre: ${profesor.nombre}<br> Sexo: ${profesor.sexo}<br><br>`;
})