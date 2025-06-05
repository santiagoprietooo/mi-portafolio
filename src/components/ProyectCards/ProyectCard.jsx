import { useRef } from "react";
import clickOutsideHandler from "../../hooks/clickOutsideHandler";

const ProyectCard = ({id, titulo, descripcion, logo, link, tecnologias, fuente}) => {
    const dialogRef = useRef(null);
    const dialogDivRef = useRef(null);

    const handleOpenModal = () => {
        dialogRef.current.showModal();
    }

    const handleCloseModal = () => {
        dialogRef.current.close();
    }

    clickOutsideHandler(dialogDivRef, () => {
        handleCloseModal();
    }, []);

    const getIndexOfTecnologia = (tecnologias, index) => {
        if (index === tecnologias.length - 2) {
            return ' y ';
        } else if (index === tecnologias.length - 1) {
            return '.';
        } else {
            return ', ';
        }
    }

    return (
        <>
            <article key={id} className="flex flex-col items-start rounded-xl transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-black/25">
                <header className="flex items-center w-full">
                    <figure className="flex items-center justify-center min-h-15 py-2 px-4 bg-white/15 rounded-ss-xl">
                        <img src={logo} alt={`Logo de ${titulo}`} className="w-12"/>
                    </figure>

                    <a href={link} target="_blank" className="flex items-center min-h-15 w-full p-3 text-lg bg-gray-300/75 font-medium border-black/45 rounded-se-xl transition-all ease-in-out duration-300 hover:bg-gray-400/50">
                        <h3 className={fuente}>{titulo}</h3>
                    </a>
                </header>

                <div className="flex flex-col items-start gap-2 p-4 bg-gray-300/20">
                    <h4 className="font-medium">Tecnologías utilizadas:</h4>

                    <ul className="grid grid-cols-6 max-[1300px]:grid-cols-4 max-[1300px]:grid-rows-2 max-[500px]:grid-cols-3 gap-2">
                        {tecnologias.map((tecnologia, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-center p-2 bg-white rounded-lg"
                            >
                                <img src={tecnologia.img_src} alt={`Logo de ${tecnologia.tecnologia}`} className="flex items-center justify-center w-full max-[500px]:w-1/2" />
                                <span className="sr-only">{tecnologia.tecnologia}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <footer className="flex flex-col items-end p-4 bg-gray-300/75 w-full rounded-es-xl rounded-ee-xl">
                    <button
                        type="button"
                        className="flex items-center justify-center bg-transparent text-blue-700 font-medium cursor-pointer hover:underline"
                        onClick={handleOpenModal}
                    >
                        Ver más
                    </button>
                </footer>
            </article>

            <dialog
                key={`${id}-modal`}
                ref={dialogRef}
                className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-xl bg-white rounded-xl p-0 border-none backdrop:bg-black/25 backdrop:backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2"
            >
                <div ref={dialogDivRef} className="flex flex-col items-start gap-4 p-6">
                    <header>
                        <h3 className={`${fuente} font-semibold`}>{titulo}</h3>
                        <a href={link} target="_blank" className="text-blue-700 hover:underline">{link}</a>
                    </header>

                    <p className="p-2 bg-gray-300/50 rounded-lg">{descripcion}</p>

                    <div>
                        <h4 className="font-medium">Tecnologías utilizadas:</h4>
                        <p>
                            {tecnologias.map((tecnologia, index) => (
                                tecnologia.tecnologia + getIndexOfTecnologia(tecnologias, index)
                            ))}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleCloseModal}
                        className="self-end mt-8 px-4 py-2 bg-blue-700 text-white rounded-md shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-blue-800 active:bg-blue-500"
                    >
                        Cerrar
                    </button>
                </div>
            </dialog>
        </>
    );
}

export default ProyectCard;