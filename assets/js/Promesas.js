import { db } from "./Firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 
export let agregarPelicula = async(pelicula)=>{
    //Algo que agregar
    const docRef = await addDoc(collection(db, "pelicula"),pelicula);
}

export let obtenerPeliculas = async()=>{
    const querySnapshot = await getDocs(collection(db, "pelicula"));
    var peliculas = []
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let pelicula = {
    'id':doc.id,
    'nombre':doc.data().nombre,
    'director':doc.data().director,
    'anio':doc.data().anio,
    'valoracion':doc.data().valoracion,
    'genero':doc.data().genero,
    'mayorEdad':doc.data().mayorEdad
  }
  peliculas.push(pelicula)
  console.log(doc.id, " => ", doc.data());
});
    return peliculas; 
}