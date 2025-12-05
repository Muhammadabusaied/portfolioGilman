import { Outlet, useLocation } from 'react-router-dom';
import Footer from './../Components/Footer/Footer';
import Header from './../Components/Header/Header';
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
    const location = useLocation();

    return (
        <div className='min-h-screen bg-base-100 font-sans text-slate-300'>
            <Header></Header>
            <div className="pt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;