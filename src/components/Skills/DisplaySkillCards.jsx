import { useState, useEffect, useRef } from "react";
import getSkills from "../../services/skills";
import ShowSkillCard, { SkillCard } from "./SkillCard";

const DisplaySkillCards = () => {
    const [skills, setSkills] = useState([]);
    const [skillID, setSkillID] = useState(null);

    const sectionRef = useRef(null);

    const getSkillInfo = (id) => {
        if(skills.length <= 0 && !id) return;
        setSkillID(id);
    }

    const levels = {
        "Junior" : 1,
        "Inicial" : 2,
        "Básico" : 3
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getSkills();
            const sortByLevel = data.sort((a, b) => {
                return levels[a.nivel] - levels[b.nivel];
            });

            setSkills(sortByLevel);
        }

        getData();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting && window.innerWidth <= 768) {
                setSkillID(null);
            }
        }, {
            root: null, threshold: 0.7
        });

        const sectionEl = sectionRef.current;
        if (sectionEl && window.innerWidth <= 768) observer.observe(sectionEl);

        return () => {
            if (sectionEl && window.innerWidth <= 768) observer.unobserve(sectionEl);
        }
    }, []);

    return(
        <>
            <div ref={sectionRef} className="grid grid-cols-2 place-items-start gap-8 w-full py-4 p-x-responsive max-md:flex max-md:flex-col max-md:items-start">
                <article className="flex flex-col items-start gap-8 w-full">
                    <header>
                        <h3 className="text-xl font-bold">Habilidades y tecnologías</h3>
                        <p className="w-full text-black/35 font-semibold">
                            Hacé click en los logos para ver mis conocimientos en cada tecnología <span aria-description="Cara sonriente">:)</span>
                        </p>
                    </header>

                    {skills.length > 0 ?
                        <div className="grid grid-cols-5 w-full max-md:grid-cols-4 max-md:place-items-center">
                            {skills.map((skill) => (
                                <SkillCard
                                    key={skill.id}
                                    id={skill.id}
                                    habilidad={skill.habilidad}
                                    img_src={skill.img_src}
                                    color={skill.color}
                                    onSkillCardClick={() => getSkillInfo(skill.id)}
                                    focusedSkill={skillID}
                                />
                            ))}
                        </div>
                    :
                        <p>Cargando...</p>
                    }
                </article>

                {skillID ? (
                    (() => {
                        const selectedSkill = skills.find((skill) => skill.id === skillID);
                        return selectedSkill ? (
                            <ShowSkillCard
                                key={selectedSkill.id}
                                habilidad={selectedSkill.habilidad}
                                img_src={selectedSkill.img_src}
                                nivel={selectedSkill.nivel}
                                color={selectedSkill.color}
                                conocimientos={selectedSkill.conocimientos}
                            />
                        ) : (
                            <p>No hay skill...</p>
                        );
                    })()
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default DisplaySkillCards;