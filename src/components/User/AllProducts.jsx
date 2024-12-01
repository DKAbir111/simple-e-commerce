import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";


export default function AllProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/allproducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div className="grid p-5 gap-5 grid-cols-3">
            {
                products.map(product => <ProductCard key={product._id} product={product} />)
            }
        </div>
    )
}
