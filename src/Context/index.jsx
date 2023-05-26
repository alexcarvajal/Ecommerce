
import { createContext,useState,useEffect } from "react";
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

    //Get Products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
        useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setItems(data))
      }, []);

      //Get Products by title
      const [searchByTitle, setSearchByTitle] = useState(null);
      //Get Products by Category
      const [searchByCategory, setSearchByCategory] = useState(null);
    /*   console.log(searchByCategory) */
       // Filter items by title
      const filteredItemsByTitle = (items,searchByTitle ) =>{
        return items?.filter(item =>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
      const filteredItemsByCategory = (items,searchByCategory ) =>{
      return items?.filter(item =>item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
      }

      const filterBy = (searchType,items,searchByTitle,searchByCategory )=>{
    if(searchType === 'BY_TITLE'){
      return(
        filteredItemsByTitle(items,searchByTitle)
      )
    }
    if(searchType === 'BY_CATEGORY'){
      return(
        filteredItemsByCategory(items,searchByCategory)
      )
    }
    if(searchType === 'BY_TITLE_AND_CATEGORY'){
      return(
        filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      )
    }
    if(!searchType){
      return(
        items
      )
    }
    }
      useEffect(()=>{
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle,searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items,searchByTitle,searchByCategory))
        if(searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY',items,searchByTitle,searchByCategory))
        if(!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null,items,searchByTitle,searchByCategory))
      },[items,searchByTitle,searchByCategory])

      console.log(filteredItems)
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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
            }}>
            {children}
        </CartContext.Provider>
    )
}