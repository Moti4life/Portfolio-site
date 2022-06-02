import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, x: 0, y: 200, transition: { duration: 0.15 }, },
};

const Layout = ({ children }) => {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      style={{ overflowX: "hidden" }}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
