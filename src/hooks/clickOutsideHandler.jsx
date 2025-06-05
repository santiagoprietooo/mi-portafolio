import { useEffect } from "react";

const clickOutsideHandler = (ref, onClose, exceptions = []) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target) && !exceptions.some((exc) => exc.current?.contains(event.target))) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, onClose, exceptions]);
}

export default clickOutsideHandler;