import { actualizarPelicula, obtenerPelicula } from "./Promesas.js";

window.addEventListener("load",()=>{
    alert("LLegue")
    //Recuperar los parametros
    //Material a revisar> https://concamilo.com/como-obtener-los-parametros-de-la-url-con-javascript/
    let valores = window.location.search;
    console.log(valores)
    //Creamos la instancia
    const urlParams = new URLSearchParams(valores);
    //Accedemos a los valores
    var id = urlParams.get('id');
    console.log(id);
    //Ir a la base de datos a recuperar el objeto asociado al id
    obtenerPelicula(id).then((p)=>{
        console.log(p);
        
        //Cargar los datos en el formulario
        //Recuperar elementos
        let nombre = document.getElementById("nombre");
        let director = document.getElementById("director");
        let anio = document.getElementById("anio");
        let valoracion = document.getElementById("valoracion");
        let genero = document.getElementById("genero");
        let mayorEdad = document.getElementById("mayorEdad");
        //Cargar el valor actual
        nombre.value = p.nombre;
        director.value = p.director;
        anio.value = p.anio;
        valoracion.value = p.valoracion;
        genero.value = p.genero;
        if(p.mayorEdad){
            mayorEdad.checked = true;
        }
    })
    //Asignar accion al boton actualizar
    let btnActualizar = document.getElementById("btnActualizar");
    btnActualizar.addEventListener("click",()=>{
        //Recupero los elementos del formulario
        let eNombre = document.getElementById("nombre");
        let eDirector = document.getElementById("director");
        let eAnio = document.getElementById("anio");
        let eValoracion = document.getElementById("valoracion");
        let eGenero = document.getElementById("genero");
        let eMayorEdad = document.getElementById("mayorEdad");
        //Recupero el contenido de los elementos del formulario
        let vNombre = eNombre.value;
        let vDirector = eDirector.value;
        let vAnio = eAnio.value;
        let vValoracion = eValoracion.value;
        let vGenero = eGenero.value;
        //Radios y checkbox no se recupera valor, se recupera si esta chequeado
        let vMayorEdad = eMayorEdad.checked; 
        console.log(vNombre);
        console.log(vDirector);
        console.log(vAnio);
        console.log(vValoracion);
        console.log(vGenero);
        console.log(vMayorEdad);
        let pelicula = {
            'nombre':vNombre,
            'director':vDirector,
            'anio':vAnio,
            'valoracion':vValoracion,
            'genero':vGenero,
            'mayorEdad':vMayorEdad
        };
        actualizarPelicula(id,pelicula).then(()=>{
            alert("Se actualiza con exito");
        }).catch((e)=>{
            console.log(e)
        }).finally(()=>{
          //Detener el tiempo unos 5 segundo y luego redireccionar  
            //window.location.href = "/peliculas.html";
        })
        
    })



})