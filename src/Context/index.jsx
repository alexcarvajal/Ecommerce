
import { createContext,useState } from "react";

export const CartContext = createContext()
export const CartProvider = ({children}) =>{

    //count all the products

    const [count,setCount]=useState(0)

    //open and close de details window
        const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
        const openProductDetail = () => setIsProductDetailOpen(true)
        const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product detail- Show product

    const[productToShow, setProductToShow]= useState({})
    // Add to cart
    const [cartProducts,setCartProducts]=useState([])
    return(
        <CartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
            }}>
            {children}
        </CartContext.Provider>
    )
}