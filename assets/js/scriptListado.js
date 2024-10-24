import { obtenerPeliculas } from "./Promesas.js"

window.addEventListener("load",()=>{
    var peliculas = obtenerPeliculas()
    console.log(peliculas)
    var eTBody = document.getElementById("cuerpoTabla");
    //eTBody.innerHTML = "<tr><td>hola</td></tr>"
    peliculas.then((listado)=>{

        let filas = ""
        listado.forEach((p)=>{
            filas += "<tr>"
            filas += "<td>"+p.nombre+"</td>"
            filas += "<td>"+p.director+"</td>"
            filas += "<td>"+p.anio+"</td>"
            filas += "<td>"+p.valoracion+"</td>"
            filas += "<td>"+p.genero+"</td>"
            filas += "<td>"+p.esMayor+"</td>"
            filas += "</tr>"
        })
        console.log(filas)
        eTBody.innerHTML = filas;
        
        
    })
})