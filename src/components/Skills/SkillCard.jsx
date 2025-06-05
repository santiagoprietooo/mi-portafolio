import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const colorMap = {
    bg : {
        orange:         "bg-orange-300/50",
        orangered:      "bg-orange-600/10",
        brown:          "bg-orange-800/20",
        lightskyblue:   "bg-blue-300/15",
        blue:           "bg-blue-300/30",
        deepskyblue:    "bg-blue-500/25",
        lightsteelblue: "bg-blue-700/10",
        lightgrey:      "bg-gray-400/50",
        black:          "bg-gray-500/25",
        yellow:         "bg-yellow-300/25",
        yellowgreen:    "bg-green-400/10",
        green:          "bg-green-400/15",
        greenyellow:    "bg-green-400/25",
        lightcoral:     "bg-red-200/50",
        slateblue:      "bg-violet-400/35",
        violet:         "bg-violet-500/20"
    },
    darkerBg : {
        orange:         "bg-orange-300",
        orangered:      "bg-orange-600 text-white",
        brown:          "bg-orange-800 text-white",
        lightskyblue:   "bg-blue-300",
        blue:           "bg-blue-300",
        deepskyblue:    "bg-blue-500 text-white",
        lightsteelblue: "bg-violet-600 text-white",
        lightgrey:      "bg-gray-400",
        black:          "bg-gray-500 text-white",
        yellow:         "bg-yellow-300",
        yellowgreen:    "bg-green-400",
        green:          "bg-green-400",
        greenyellow:    "bg-green-400",
        lightcoral:     "bg-red-200",
        slateblue:      "bg-violet-400 text-white",
        violet:         "bg-violet-500 text-white"
    },
    hover : {
        orange:         "hover:bg-orange-300/50",
        orangered:      "hover:bg-orange-600/10",
        brown:          "hover:bg-orange-800/20",
        lightskyblue:   "hover:bg-blue-300/15",
        blue:           "hover:bg-blue-300/30",
        lightsteelblue: "hover:bg-blue-700/10",
        deepskyblue:    "hover:bg-blue-500/25",
        lightgrey:      "hover:bg-gray-400/50",
        black:          "hover:bg-gray-500/25",
        yellow:         "hover:bg-yellow-300/25",
        yellowgreen:    "hover:bg-green-400/10",
        green:          "hover:bg-green-400/15",
        greenyellow:    "hover:bg-green-400/25",
        lightcoral:     "hover:bg-red-200/50",
        slateblue:      "hover:bg-violet-400/35",
        violet:         "hover:bg-violet-500/20"
    },
    border : {
        orange:         "border-orange-300/50",
        orangered:      "border-orange-600/10",
        brown:          "border-orange-800/20",
        lightskyblue:   "border-blue-300/15",
        blue:           "border-blue-300/30",
        lightsteelblue: "border-blue-700/10",
        deepskyblue:    "border-blue-500/25",
        lightgrey:      "border-gray-400/50",
        black:          "border-gray-500/25",
        yellow:         "border-yellow-300/25",
        yellowgreen:    "border-green-400/10",
        green:          "border-green-400/15",
        greenyellow:    "border-green-400/25",
        lightcoral:     "border-red-200/50",
        slateblue:      "border-violet-400/35",
        violet:         "border-violet-500/20"
    }
}

export const SkillCard = ({ id, habilidad, img_src, color, onSkillCardClick, focusedSkill }) => {
    const [seeSkill, setSeeSkill] = useState(false);
    const bg = colorMap.bg[color];
    const bgColor = colorMap.darkerBg[color];
    const hoverClass = colorMap.hover[color];

    return (
        <div
            key={id}
            className={clsx(
                "relative flex items-center justify-center size-20 max-md:size-24 rounded-full transition-all duration-300 cursor-pointer",
                `${hoverClass} ${focusedSkill === id ? `${bg}` : ""}`
            )}
            onClick={() => onSkillCardClick(id)}
            onMouseOver={() => setSeeSkill(true)}
            onMouseLeave={() => setSeeSkill(false)}
        >
            <img
                src={img_src}
                alt={`Ícono de ${habilidad}`}
                className={`p-5 w-full transition-all duration-300 grayscale hover:grayscale-0 ${focusedSkill === id ? "grayscale-0" : "grayscale-100"}`}
            />

            <AnimatePresence>
                {seeSkill ?
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute z-10 -bottom-10 p-2 text-sm font-semibold max-md:hidden flex items-center justify-center min-w-max rounded-md shadow-md shadow-black/35 ${bgColor}`}
                    >
                        {habilidad}
                    </motion.span>
                :
                    <></>
                }
            </AnimatePresence>
        </div>
    );
};

const ShowSkillCard = ({ habilidad, img_src, nivel, conocimientos, color }) => {
    const [showKnowledge, setShowKnowledge] = useState(false);
    const bgColor = colorMap.bg[color];
    const borderColor = colorMap.border[color];

    useEffect(() => {
        const siteHeader = document.getElementById("site-header");

        if (siteHeader) {
            if (showKnowledge && window.innerWidth <= 768) {
                document.body.classList.add("overflow-hidden");
                siteHeader.classList.remove("z-50");
                siteHeader.classList.add("z-20");
            } else {
                document.body.classList.remove("overflow-hidden");
                siteHeader.classList.remove("z-20");
                siteHeader.classList.add("z-50");
            }
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
            if (siteHeader) {
                siteHeader.classList.remove("z-20");
                siteHeader.classList.add("z-50");
            }
        };
    }, [showKnowledge]);

    return(
        <>
            {!habilidad || !img_src || !nivel ?
                <p>Cargando... </p>
            :
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className={`max-md:fixed max-md:z-30 max-md:bottom-0 max-md:left-0 flex flex-col items-start max-md:items-center max-md:gap-4 max-md:py-4 w-full max-md:bg-gray-200 max-md:shadow-2xl max-md:shadow-black ${showKnowledge ? "max-md:h-screen" : ""}`}
                    >
                        <header className={`flex items-center justify-between max-md:gap-2 w-full max-md:w-11/12 px-2 ${bgColor} rounded-full shadow-md shadow-black/35`}>
                            <figure className={`flex items-center justify-center min-w-[88px] p-2 bg-gray-200 border-2 ${borderColor} rounded-full`}>
                                <img src={img_src} alt={`Ícono de ${habilidad}`} className="p-2 size-16" />
                            </figure>

                            <h4 className="flex items-center justify-center min-h-24 w-full max-md:text-center text-[1.20rem] font-medium border-4 border-transparent rounded-full"
                            >
                                <span className="max-md:sr-only">Mi experiencia con: {habilidad}</span>
                                <span className="min-md:hidden">{habilidad}</span>
                            </h4>

                            <button
                                type="button"
                                onClick={() => setShowKnowledge(!showKnowledge)}
                                className="relative z-10 flex items-center justify-center p-2 rounded-full hover:bg-black/10 transition-all duration-300 cursor-pointer"
                                aria-label={`${showKnowledge ? "Ocultar conocimientos" : "Mostrar conocimientos"}`}
                            >
                                <span aria-description={`ícono de flecha para ${showKnowledge ? "arriba" : "abajo"}`}>
                                    <ChevronDown className={`transition-all duration-300 ${showKnowledge ? "rotate-180" : "rotate-0"}`} />
                                </span>
                            </button>
                        </header>

                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={showKnowledge ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6 }}
                            className={`relative ${showKnowledge ? "max-md:flex transform translate-y-0" : "max-md:hidden"} min-md:flex flex-col items-start gap-4 w-full p-4 max-md:px-8 max-md:overflow-y-scroll`}
                        >
                            <p className={`relative ${showKnowledge ? "z-0" : "-z-10"}`}>
                                Tengo un nivel <span className="font-medium">{nivel}</span> con <span className="font-medium">{habilidad}</span>, y mis habilidades con esta tecnología incluyen:
                            </p>

                            <ul className="w-full rounded-lg">
                                {conocimientos.map((conocimiento, index) => (
                                    <motion.li
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={showKnowledge ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        key={index}
                                        className={`relative py-1 px-2 odd:bg-gray-300/75 even:bg-gray-400/50 ${!showKnowledge ? "-z-10" : "z-0"} first-of-type:rounded-ss-lg first-of-type:rounded-se-lg last-of-type:rounded-es-lg last-of-type:rounded-ee-lg`}
                                    >
                                        {conocimiento}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            }
        </>
    )
}

export default ShowSkillCard;