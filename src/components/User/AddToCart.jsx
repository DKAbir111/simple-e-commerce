import { useContext } from "react"
import { AddItemContext } from "./Context/AddContext"
import AddItemCard from "./Context/AddItemCard"

export default function AddToCart() {
    const { additem } = useContext(AddItemContext)
    return (
        <div className="p-5">
            <h2 className="text-xl font-semibold mb-5">Total Added Product:{additem.length}</h2>
            <div className="flex flex-col gap-3">
                {
                    additem.map(item => <AddItemCard key={item._id} item={item} />)
                }
            </div>
        </div>
    )
}
