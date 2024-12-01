/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react"
export const AddItemContext = createContext(null)
export default function AddContext({ children }) {

    const [additem, setAdditem] = useState([])
    const addToCart = (product) => {
        setAdditem([...additem, product])
    }
    const productInfo = {
        addToCart,
        additem
    }
    return (
        <AddItemContext.Provider value={productInfo}>
            {children}
        </AddItemContext.Provider>
    )
}
