import { Link } from "react-router-dom";


export default function Aside() {
    return (
        <aside className="flex flex-col gap-3">
            <Link to={'/admin/createproducts'} className="btn w-full text-white btn-primary">Create Products</Link>
            <Link to={'/admin'} className="btn w-full text-white btn-primary">All Prodcuts</Link>
        </aside>
    )
}
