import { Link } from "react-scroll";

function NavIDLink({id, title, onClickCustom, opened}) {
    if(window.innerWidth < 768) {
        return (
            <li className="font-semibold cursor-pointer">
                <Link
                    to={id}
                    smooth={true}
                    duration={500}
                    offset={0}
                    spy={true}
                    activeClass="text-blue-700 max-md:bg-blue-700/15"
                    className="block p-4 w-[280px] transition-colors duration-300 hover:text-blue-700"
                    onClick={() => onClickCustom(opened = !opened)}
                >
                    {title}
                </Link>
            </li>
        )
    } else {
        return (
            <li className="font-semibold cursor-pointer">
                <Link
                    to={id}
                    smooth={true}
                    duration={500}
                    offset={0}
                    spy={true}
                    activeClass="text-blue-700"
                    className="transition-colors duration-300 hover:text-blue-700"
                >
                    {title}
                </Link>
            </li>
        )
    }
}

export default NavIDLink;