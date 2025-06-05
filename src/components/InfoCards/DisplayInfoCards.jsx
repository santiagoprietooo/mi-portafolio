import { useEffect, useMemo, useState } from "react";
import { Code2, ScanHeartIcon, Brain, ChevronLeft, ChevronRight } from "lucide-react";
import InfoCard from "./InfoCard";
import NextCardBtn from "./NextCardBtn";

const DisplayInfoCards = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [sideClicked, setSideClicked] = useState("center");
    const information = [
        {
            id: 1,
            icon: <Code2 className="svg-style" aria-description='ícono de la tarjeta "Desarrollador"' />,
            title: "Desarrollador",
            desc: <p className="text-black/75">Soy un apasionado del desarrollo <b>front-end</b>. Mis conocimientos se centran en <b>HTML, CSS, JavaScript, Tailwind, React y Vue.js</b>. Disfruto crear interfaces funcionales y atractivas, y complementar lo visual con herramientas como <b>Figma, Photoshop e Illustrator</b>.</p>
        },
        {
            id: 2,
            icon: <ScanHeartIcon className="svg-style" aria-description='ícono de la tarjeta "Pasión"' />,
            title: "Pasión",
            desc: <p className="text-black/75">La programación se volvió un <b>estilo de vida</b> para mi. Aprovecho todos los días para <b>seguir practicando</b>, ya sea realizando proyectos personales o mirando videos en YouTube, con lo que <b>aprendo y mejoro mis habilidades</b> de manera constante.</p>
        },
        {
            id: 3,
            icon: <Brain className="svg-style" aria-description='ícono de la tarjeta "Aprendizaje"' />,
            title: "Aprendizaje",
            desc: <p className="text-black/75"><b>No tengo miedo de cometer errores</b>, son parte del aprendizaje. Sé que en el lugar que me encuentre no solo voy a estar para <b>brindar mi ayuda y mis conocimientos</b>, sino que voy con el propósito de <b>seguir creciendo, aprendiendo y mejorando</b>.</p>
        },
    ];

    const currentCard = useMemo(() => {
        const selectedCard = information.find(info => info.id === currentIndex);

        if (!selectedCard) {
            return (
                <InfoCard
                    icon="Cargando..."
                    title="Cargando..."
                    desc="Cargando..."
                    animateSide={sideClicked}
                />
            );
        }

        return (
            <InfoCard
                key={selectedCard.id}
                icon={selectedCard.icon}
                title={selectedCard.title}
                desc={selectedCard.desc}
                animateSide={sideClicked}
            />
        );
    }, [currentIndex, sideClicked]);


    useEffect(() => {
        if (currentIndex > 3) {
            return setCurrentIndex(1);
        } else if (currentIndex < 1) {
            return setCurrentIndex(3);
        }
    }, [currentIndex]);

    return (
        <>
            <div className="relative flex items-center max-md:justify-center w-full p-x-responsive">
                <div className="max-md:flex hidden items-center justify-center responsive-w-card">
                    {!currentIndex ? (
                        <InfoCard
                            icon="Cargando..."
                            title="Cargando..."
                            desc="Cargando..."
                            animateSide={sideClicked}
                        />
                    ) : (
                        currentCard
                    )}
                </div>

                <NextCardBtn
                    direction="left"
                    onClick={() => {setCurrentIndex((prev) => --prev); setSideClicked("left")}}
                />
                <NextCardBtn
                    direction="right"
                    onClick={() => {setCurrentIndex((prev) => ++prev); setSideClicked("right")}}
                />

                <div className="min-md:grid hidden max-lg:grid-cols-2 grid-cols-3 justify-items-center gap-4 w-full">
                    {information.map((info) => (
                        <InfoCard
                            key={info.id}
                            icon={info.icon}
                            title={info.title}
                            desc={info.desc}
                            animateSide={sideClicked}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default DisplayInfoCards;