/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
import { createContext,useState } from "react";
export const CartContext = createContext()
export const CartProvider = ({children}) =>{

    //count all the products

    const [count,setCount]=useState(0)

    //open and close de details window

    const [detailOpen, setDetailOpen] = useState(false)
    const openDetail = () => setDetailOpen(true)
    const closeDetail = () => setDetailOpen(false)

    //Product detail- Show product

/*     const[productShow, setProductShow]= useState({}) */
    // Add to cart
    const [cartProducts,setCartProducts]=useState([])

    console.log("Numeros ",count)
    return(
        <CartContext.Provider value={{
            count,
            setCount,
            openDetail,
            closeDetail,
            cartProducts,
            setCartProducts,
        
        }}>
            {children}
        </CartContext.Provider>
    )
}