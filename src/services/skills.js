import { db } from "./firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

/**
 * Se suscribe a los cambios en la colección "skills".
 */
export default async function getSkills() {
    try {
        const col = collection(db, "skills");
        const snapshot = await getDocs(col);
        const skills = snapshot.docs.map(doc => ({
            id: doc.id,
            habilidad: doc.data().habilidad,
            nivel: doc.data().nivel,
            img_src: doc.data().img_src,
            conocimientos: doc.data().conocimientos,
            color: doc.data().color
        }));

        return skills;
    } catch (error) {
        console.error("Error en los docs: ", error);
        throw error;
    }
}

async function add(id, {habilidad, nivel, img_src}) {
    const col = doc(db, `/skills/${String(id)}`);
    await setDoc(col, { habilidad, nivel, img_src });
}

// add(20, {habilidad: "Mongoose", nivel: "Básico", img_src: "/src/assets/IMG/icons/tecnologies/expressjs.png"});