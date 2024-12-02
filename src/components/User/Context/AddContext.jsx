/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react"
import { toast } from "react-toastify"
export const AddItemContext = createContext(null)
export default function AddContext({ children }) {

    const [additem, setAdditem] = useState([])
    const addToCart = (product) => {
        const isExist = additem.find(item => item._id === product._id);
        if (isExist) {
            toast.error("Product already added to cart")
            return
        }
        setAdditem([...additem, product])
        toast.success("Added to cart")
    }
    const productInfo = {
        addToCart,
        additem,
        setAdditem
    }
    return (
        <AddItemContext.Provider value={productInfo}>
            {children}
        </AddItemContext.Provider>
    )
}
