import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductCard({ product, handleDelete }) {

    return (
        <div className="bg-base-100 shadow-xl w-full flex rounded-lg gap-5 p-3">
            <figure>
                <img
                    src={product.photo}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="font-bold text-lg text-gray-800">${product.price}</p>
                <div className="card-actions justify-end mt-4">
                    <Link to={`/admin/updateproduct/${product._id}`}
                        className="btn btn-primary btn-sm"

                    >
                        Edit
                    </Link>
                    <button
                        className="btn btn-error btn-sm"
                        onClick={() => handleDelete(product._id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
