import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

/**
 * Se suscribe a los cambios en la colección "proyects".
 */
export default async function getProyects() {
    const col = collection(db, "proyects");
    const snapshot = await getDocs(col);

    const proyects = snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            logo: doc.data().logo,
            titulo: doc.data().titulo,
            descripcion: doc.data().descripcion,
            link: doc.data().link,
            tecnologias: doc.data().tecnologias,
            fuente: doc.data().fuente,
            orden: doc.data().orden
        }
    });

    return proyects;
}