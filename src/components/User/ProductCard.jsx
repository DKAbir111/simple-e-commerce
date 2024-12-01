/* eslint-disable react/prop-types */

import { useContext } from "react"
import { AddItemContext } from "./Context/AddContext"



export default function ProductCard({ product }) {
    const { addToCart } = useContext(AddItemContext)
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img
                    src={product.photo}
                    alt={product.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
