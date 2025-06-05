import { AnimatePresence, motion } from "framer-motion";

const InfoCard = ({icon, title, desc, animateSide}) => {
    const sideClicked = (side) => {
        switch (side) {
            case "center":
                return <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.1 }}
                    className="info-card-style"
                >
                    <span>{ icon }</span>
                    <h3 className="text-2xl font-bold">{ title }</h3>
                    { desc }
                </motion.div>

            case "left":
                return <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: -0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.1 }}
                    className="info-card-style"
                >
                    <span>{ icon }</span>
                    <h3 className="text-2xl font-bold">{ title }</h3>
                    { desc }
                </motion.div>

            case "right":
                return <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.1 }}
                    className="info-card-style"
                >
                    <span>{ icon }</span>
                    <h3 className="text-2xl font-bold">{ title }</h3>
                    { desc }
                </motion.div>
        }
    }

    return (
        <AnimatePresence>
            {sideClicked(animateSide)}
        </AnimatePresence>
    )
}

export default InfoCard;