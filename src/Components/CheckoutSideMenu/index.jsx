import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { totalPrice } from "../../utils";
import OrderCard from "../OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(CartContext)
  const handleDelete = (id) =>{
    const filteredProducts = context.cartProducts.filter(product =>product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () =>{
    const orderToAdd ={
      date: '01.02.03',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0)
    context.closeCheckoutSideMenu() 
    context.setSearchByTitle(null)
  }
 
  
 return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl ">My  Order</h2>
        <div>
          <XCircleIcon
            className="h-6 w-6 text-slate-400 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XCircleIcon>
        </div>
      </div>

      <div className="px-4 flex-1 mb-4 ">
      {context.cartProducts.map(product=>(
          <OrderCard 
          key={product.id}
          id={product.id}
          title={product.title} 
          imageUrl={product.image}
          price={product.price}
          handleDelete={handleDelete}
          />
        
      ))}
      </div>
      <div className="px-2">
        <p className="flex justify-between items-center">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
        <button className="w-full py-3 bg-slate-700  text-white rounded-lg"
        onClick={()=> handleCheckout()}
        >Checkout</button>
        </Link>
      </div>
    </aside>
  );
};
export default CheckoutSideMenu;
