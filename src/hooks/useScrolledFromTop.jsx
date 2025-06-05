import { useEffect, useState } from "react";

const useScrolledFromTop = (threshold) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);

        return () => { window.removeEventListener("scroll", handleScroll);}
    }, [threshold]);

    return scrolled;
}

export default useScrolledFromTop;