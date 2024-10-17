import { db } from "./Firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 
export let agregarPelicula = async(pelicula)=>{
    //Algo que agregar
    const docRef = await addDoc(collection(db, "pelicula"),pelicula);
}