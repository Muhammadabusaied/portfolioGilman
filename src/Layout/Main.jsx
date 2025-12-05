
import { Outlet } from 'react-router-dom';
import Footer from './../Components/Footer/Footer';
import Header from './../Components/Header/Header';

const Main = () => {
    return (
        <div className='min-h-screen bg-base-100 font-sans text-slate-300'>
            <Header></Header>
            <div className="pt-20">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;