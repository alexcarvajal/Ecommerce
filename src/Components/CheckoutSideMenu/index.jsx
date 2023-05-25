import { useContext } from "react";
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

  console.log('Cart: ', context.cartProducts)
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

      <div className="px-2 ">
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
      </div>
    </aside>
  );
};
export default CheckoutSideMenu;
