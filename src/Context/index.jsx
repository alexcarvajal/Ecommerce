
import { createContext,useState } from "react";

export const CartContext = createContext()
export const CartProvider = ({children}) =>{

    //count all the products

    const [count,setCount]=useState(0)

    //open and close de details window
        const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
        const openProductDetail = () => setIsProductDetailOpen(true)
        const closeProductDetail = () => setIsProductDetailOpen(false)

    //open and close de my orders window
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product detail- Show product
    const[productToShow, setProductToShow]= useState({})
    
    // Add products to cart
    const [cartProducts,setCartProducts]=useState([])
    //Order
    const [order,setOrder]=useState([])


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
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
            }}>
            {children}
        </CartContext.Provider>
    )
}