import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Swal from "sweetalert2";

export default function AllProducts() {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    // Fetch products on component mount
    useEffect(() => {
        fetch("http://localhost:5001/allproducts")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilterProducts(data);
            })
            .catch((err) => console.error("Failed to fetch products:", err));
    }, []);

    // Handle search input
    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm) {
            const searchProduct = products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm)
            );
            setFilterProducts(searchProduct);
        }
    };
    const handleDelete = (productId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/products/${productId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const updatedProducts = products.filter(
                                (product) => product._id !== productId
                            );
                            setFilterProducts(updatedProducts)
                        }
                    })
            }
        });

    }
    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <label className="input input-bordered flex items-center gap-2 w-1/2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        onChange={handleSearch}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
                <h2 className="text-xl font-semibold">
                    Total Products: {filterProducts.length}
                </h2>
            </div>
            <div className="flex flex-col gap-5">
                {filterProducts.length > 0 ? (
                    filterProducts.map((product) => (
                        <ProductCard key={product._id} product={product} handleDelete={handleDelete} />
                    ))
                ) : (
                    <div className="text-center text-gray-500">
                        No products available
                    </div>
                )}
            </div>
        </div>
    );
}
