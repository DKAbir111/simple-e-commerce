import { useEffect, useState } from "react";

export default function OrderedItem() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5001/additem") // Replace with your backend API
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">Admin Panel - Orders</h1>
            {loading ? (
                <p>Loading orders...</p>
            ) : orders.length === 0 ? (
                <p>No orders available.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Photo</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{order.name}</td>
                                    <td>${order.price}</td>
                                    <td>
                                        <img
                                            src={order.photo}
                                            alt={order.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                    </td>
                                    <td>{order.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
