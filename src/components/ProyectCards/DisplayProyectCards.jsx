import { useEffect, useState } from "react";
import getProyects from "../../services/proyects";
import ProyectCard from "./ProyectCard";

const DisplayProyectCards = () => {
    const [proyects, setProyects] = useState([]);

    useEffect(() => {
        const fetchProyects = async () => {
            try {
                const data = await getProyects();
                const sortProyects = data.sort((a, b) => a.orden - b.orden);

                setProyects(sortProyects);
            } catch (error) {
                console.error("Error fetching proyects:", error);
            }
        };

        fetchProyects();
    }, []);

    return (
        <div className="grid grid-cols-4 max-[640px]:grid-cols-2 max-[900px]:grid-cols-3 max-[500px]:grid-cols-1 gap-4">
            {proyects.length > 0 ?
                proyects.map((proyect) => (
                    <ProyectCard
                        id={proyect.id}
                        key={proyect.id}
                        titulo={proyect.titulo}
                        descripcion={proyect.descripcion}
                        logo={proyect.logo}
                        link={proyect.link}
                        tecnologias={proyect.tecnologias}
                        fuente={proyect.fuente}
                    />
                ))
            :
                <p>Cargando...</p>
            }
        </div>
    );
}

export default DisplayProyectCards;