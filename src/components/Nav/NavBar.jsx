import { useState, useRef } from "react";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import NavIDLink from "./NavIDLink";
import clickOutsideHandler from "../../hooks/clickOutsideHandler";

function NavBar({ scrolled }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const menuRef = useRef(null);
    const headerRef = useRef(null);

    const toggleMenu = () => {
        setIsOpened((prev) => !prev);
    }

    clickOutsideHandler(menuRef, () => {
        setIsOpened(false);
    }, [headerRef]);

    const routes = [
        { name: "Presentación", id: "presentation" },
        { name: "Sobre mi",     id: "about-me" },
        { name: "Proyectos",    id: "proyects" },
        { name: "Contacto",     id: "contact" }
    ]

    return(
        <>
            <header
                ref={headerRef}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                className={clsx(
                    `fixed z-50 top-0 flex items-center justify-evenly p-2 min-h-16 w-full bg-white transition-all duration-300 max-md:justify-between max-md:shadow-md max-md:drop-shadow-md`,
                    `${scrolled ?
                        isHovered || isOpened ?
                            "min-md:opacity-100 min-md:drop-shadow-md" : "min-md:opacity-55" 
                        : "min-md:opacity-100 min-md:drop-shadow-md"
                    }`
                )}
                id="site-header"
            >
                <div className="flex items-center justify-center">
                    <h1 className="sr-only">Santiago Prieto | Portafolio</h1>
                    <img
                        src="/src/assets/IMG/icons/logo_portafolio.png"
                        alt="Logo de mi portafolio"
                        className="h-14 w-14"
                    />
                </div>

                <button
                    type="button"
                    className="hidden p-1 bg-blue-200/40 rounded-lg cursor-pointer transition ease-in-out duration-300 focus:bg-blue-200/75 max-md:block"
                    onClick={toggleMenu}
                    aria-label="Botón que abre y cierra el menú"
                >
                    <Menu
                        className={`size-10 text-blue-700 transition ease-in-out duration-300 ${isOpened ? 'rotate-90' : 'rotate-0'}`}
                        aria-description="Ícono de menú"
                    />
                </button>

                <nav className="hidden min-md:flex min-md:items-center min-md:justify-center">
                    <ul className="flex items-center gap-5">
                        {routes.map((route) => (
                            <NavIDLink key={route.id} id={route.id} title={route.name} />
                        ))}
                    </ul>
                </nav>
            </header>

            <AnimatePresence>
                <motion.aside
                    initial={{ opacity: 0 }}
                    animate={isOpened ? { opacity: 1 } : { opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={clsx(
                        `fixed top-0 bottom-0 min-h-screen w-full bg-black/50 min-md:hidden`,
                        `${!isOpened ? "-z-10" : "z-40"}`
                    )}
                >
                    <motion.nav
                        initial={{ opacity: 0, x: 100 }}
                        animate={isOpened ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        ref={menuRef}
                        className={clsx(
                            `fixed top-[72px] bottom-0 right-0 flex flex-col items-start min-h-screen w-max bg-white shadow-lg shadow-black min-md:hidden`, `${!isOpened ? "-z-10" : "z-20"}`
                        )}
                    >
                        <ul className="flex-col items-start">
                            {routes.map((route) => (
                                <NavIDLink key={route.id} id={route.id} title={route.name} onClickCustom={toggleMenu} opened={isOpened} />
                            ))}
                        </ul>
                    </motion.nav>
                </motion.aside>
            </AnimatePresence>
        </>
    );
}

export default NavBar;