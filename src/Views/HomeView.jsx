import { useState } from "react";
import useScrolledFromTop from "../hooks/useScrolledFromTop";
import NavBar from "../components/Nav/NavBar";
import DisplayInfoCards from "../components/InfoCards/DisplayInfoCards";
import DisplaySkillCards from "../components/Skills/DisplaySkillCards";
import DisplayProyectCards from "../components/ProyectCards/DisplayProyectCards";
import FormField from "../components/FormField";
import { Backpack, Mail, Phone } from "lucide-react";

function HomeView() {
    const isScrolledFromTop = useScrolledFromTop(120);

    const [formData, setFormData] = useState({ emailFrom: "", emailMessage: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Enviado:", formData);
    }

    return(
        <>
            <NavBar scrolled={isScrolledFromTop} />

            <main>
                <section id="presentation" className="w-full">
                    <div className="flex max-[485px]:flex-col max-[485px]:items-start items-center justify-center gap-8 min-md:min-h-screen py-32 p-x-responsive">
                        <div className="flex flex-col gap-6 w-full max-[485px]:order-2">
                            <h2 className="text-6xl max-md:text-5xl font-bold uppercase">
                                Santiago <br />
                                <span className="text-blue-700">Prieto</span>
                            </h2>
                            <span className="font-bold max-md:text-sm">Técnico en diseño y programación web.</span>

                            <a
                                href="/src/assets/santiago_prieto-cv.pdf"
                                download
                                className="w-max py-2 px-4 bg-blue-700 text-white rounded-md shadow-md transition duration-300 ease-in-out hover:bg-blue-800 focus:bg-blue-500"
                            >
                                Descargar CV
                            </a>
                        </div>

                        <div className="flex items-center justify-center w-1/3 max-[485px]:w-48 max-[650px]:w-7/12 max-[485px]:order-1">
                            <figure>
                                <img src="/src/assets/IMG/foto_de_perfil.jpg" alt="Foto mía" className="w-full rounded-full" loading="lazy" />
                            </figure>
                        </div>
                    </div>

                    <DisplayInfoCards />
                </section>
            </main>

            <section id="about-me" className="flex flex-col items-center gap-10 py-36 min-h-screen w-full">
                <header className="flex flex-col items-center gap-2 w-full p-x-responsive">
                    <h2 className="header-two">Sobre mi</h2>
                    <p className="text-5xl text-center font-bold leading-15 max-md:leading-10 max-xl:text-4xl">
                        Soy un apasionado de la programación <br />
                        y el uso de tecnologías
                    </p>
                </header>

                <div className="grid grid-cols-2 place-items-start gap-8 py-4 p-x-responsive max-md:flex max-md:flex-col max-md:items-start">
                    <div className="relative flex flex-col gap-4 w-full max-md:order-2 min-xl:grid min-xl:grid-cols-2">
                        <figure className="w-full">
                            <img src="/src/assets/IMG/yo_recibiéndome.jpg" alt="Una foto mía del día que me recibí como Técnico en programación y diseño web" className="rounded-lg" />
                        </figure>

                        <div className="flex items-start max-md:absolute max-md:bottom-4 max-md:left-0">
                            <p className="flex items-center gap-3 bg-blue-700/15 rounded-e-md max-md:bg-gray-200">
                                <span className="flex items-center justify-center p-2 pb-3 pr-0 text-5xl font-bold border-l-4 border-blue-700">
                                    2+
                                </span>
                                <span className="pr-2 font-medium">años desarrollando <br/> y diseñando web</span>
                            </p>
                        </div>
                    </div>

                    <article className="flex flex-col items-start gap-8 w-full">
                        <h3 className="text-xl font-bold">¿En qué me especializo?</h3>
                        <p className="min-xl:text-justify">
                            Soy un diseñador y desarrollador web recientemente recibido con formación en <b>UX/UI</b>, <b>programación</b> y <b>desarrollo de aplicaciones web</b>. Mi enfoque se centra en la <b>creación de experiencias digitales intuitivas</b> y visualmente atractivas, con un fuerte compromiso hacia la <b>atención al detalle</b> y <b>la organización</b>. Estoy listo para aplicar mis conocimientos y <b>seguir aprendiendo</b> en un entorno profesional que valore la innovación y la calidad en el desarrollo web.
                        </p>
                    </article>
                </div>

                <DisplaySkillCards />
            </section>

            <section id="proyects" className="flex flex-col items-center gap-8 p-x-responsive py-36">
                <h2 className="header-two">Proyectos</h2>

                <DisplayProyectCards />
            </section>

            <section id="contact" className="flex flex-col items-start justify-center gap-4 py-36 p-x-responsive">
                <header className="flex items-center justify-center w-full">
                    <h2 className="header-two">Contacto</h2>
                </header>

                <div className="flex items-center justify-between gap-8 w-full max-md:flex-col max-md:items-start">
                    <form action="" className="flex flex-col items-end gap-4 max-md:w-full w-1/2" onSubmit={handleSubmit}>
                        <div className="relative w-full">
                            <p className="w-full p-4 pt-6 bg-gray-300/75 border-2 border-transparent rounded-lg order-2">
                                santiprieto1010@gmail.com
                            </p>
                            <h3 className="absolute left-4 top-2 text-black/50 text-sm">
                                Para:
                            </h3>
                        </div>

                        <fieldset className="flex flex-col items-start w-full gap-4">
                            <legend className="sr-only">Información de contacto del remitente</legend>

                            <FormField
                                key={"emailFrom"}
                                fieldType={"email"}
                                useFor={"emailFrom"}
                                placeholder={"De:"}
                                val={formData.emailFrom}
                                changeVal={handleChange}
                            />

                            <FormField
                                key={"emailMessage"}
                                fieldType={"textarea"}
                                useFor={"emailMessage"}
                                placeholder={"Mensaje:"}
                                val={formData.emailMessage}
                                changeVal={handleChange}
                            />
                        </fieldset>

                        <button
                            type="submit"
                            disabled={!formData.emailFrom || !formData.emailMessage.trim()}
                            className="mt-4 p-2 bg-blue-700 text-white rounded-lg transition duration-300 ease-in-out cursor-pointer hover:bg-blue-800 active:bg-blue-500 disabled:bg-blue-700/30 disabled:cursor-not-allowed"
                        >
                            Enviar mensaje
                        </button>
                    </form>

                    <article className="max-md:flex max-md:flex-col max-md:items-center max-md:gap-4 max-md:pt-16 max-md:w-full">
                        <h3 className="text-lg font-medium text-center min-md:sr-only">Otras formas de contactarme</h3>

                        <ul className="flex flex-col max-md:flex-row max-md:justify-center max-md:p-x-responsive items-center gap-4">
                            <li>
                                <a
                                    className="a-contact-btn"
                                    href="https://www.linkedin.com/in/prieto-santiago-/"
                                    target="_blank"
                                    aria-label="Ir al perfil de LinkedIn de Santiago Prieto"
                                >
                                    <img src="/src/assets/IMG/icons/contact/linkedin.png" alt="Ícono de Linkedin" />
                                </a>
                            </li>

                            <li>
                                <a
                                className="a-contact-btn"
                                    href="mailto:santiprieto1010@gmail.com"
                                    aria-label="Enviar correo a santiprieto1010@gmail.com"
                                >
                                    <span aria-description="Ícono de Mail">
                                        <Mail className="size-8"/>
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    className="a-contact-btn"
                                    href="tel:+5491123314017"
                                    target="_blank"
                                    aria-label="Llamar al número de teléfono +5491123314017"
                                >
                                    <span aria-description="Ícono de Teléfono">
                                        <Phone className="size-8"/>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    );
}

export default HomeView;