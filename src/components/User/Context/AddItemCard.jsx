import { useContext } from "react"
import { toast } from "react-toastify"
import { AddItemContext } from "./AddContext"
import { RxCross2 } from "react-icons/rx";

/* eslint-disable react/prop-types */
export default function AddItemCard({ item }) {
    const { setAdditem, additem } = useContext(AddItemContext)
    const handleClick = (item) => {
        const addedItem = {
            name: item.name,
            price: item.price,
            photo: item.photo,
            description: item.description
        }
        fetch('http://localhost:5001/additem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedItem)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Order Confirmed")
                    const newItem = additem.filter(product => product._id !== item._id)
                    setAdditem(newItem);
                }
            })
    }
    const handleDelete = (id) => {
        const filteredItems = additem.filter(product => product._id !== id);
        setAdditem(filteredItems);
    }
    return (
        <div className="bg-base-100 shadow-xl w-full relative  items-center grid grid-cols-3 rounded-lg gap-5 p-3">
            <div className="absolute -top-2 -right-3 bg-red-500 btn btn-circle btn-sm" onClick={() => handleDelete(item._id)}>
                <RxCross2 />
            </div>
            <img src={item.photo} alt="" />
            <h2>{item.name}</h2>
            <button className="btn btn-sm btn-primary" onClick={() => handleClick(item)}>Confirm</button>
        </div>
    )
}
