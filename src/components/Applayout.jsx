import { Outlet } from "react-router-dom"
import Footer from "./layout/footer"
import Header from "./layout/Header"
const Applayout = () => {

    console.log("Applayout rendered");


    return (
        <div className="layout">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};


export default Applayout
