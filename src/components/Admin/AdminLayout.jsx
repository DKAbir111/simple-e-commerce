import { Outlet } from "react-router-dom";
import Aside from "./Aside";


export default function AdminLayout() {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-3 container mx-auto gap-10">
                <section className="col-span-1 min-h-screen bg-base-200 shadow-md rounde-lg p-5">
                    <Aside />
                </section>
                <section className="col-span-2 shadow-md rounded-lg bg-base-200 min-h-screen p-5">
                    <Outlet />
                </section>
            </div>
        </div>
    )
}
