import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Root() {
    return (
        <div>
            <ToastContainer />
            <Navbar />
            <Outlet />
        </div>
    )
}
