import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NextCardBtn = ({ direction, onClick }) => {
    const left = direction === "left";

    return (
        <button
            type="button"
            onClick={onClick}
            className={clsx(
                `absolute max-md:flex hidden items-center justify-center p-2 bg-gray-400 rounded-full cursor-pointer`,
                `${left ? "left-0 rounded-s-none" : "right-0 rounded-e-none"}`
            )}
            aria-label={`Botón para ${left ? "retroceder" : "avanzar"} a la tarjeta ${left ? "anterior" : "siguiente"}`}
        >
            {left ? <ChevronLeft aria-description="Ícono de flecha hacia la izquierda" /> : <ChevronRight aria-description="Ícono de flecha hacia la derecha" />}
        </button>
    );
}

export default NextCardBtn;