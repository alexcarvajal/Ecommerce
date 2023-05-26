import Layout from "../../Components/Layout";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function MyOrder () {
    const context = useContext(CartContext)
    const currentPath = window.location.pathname
   let index = currentPath.substring(currentPath.lastIndexOf('/') + 1 )
   if(index === 'last') index = context.order?.length -1 

    return (
    <Layout>
    <div className= 'flex items-center justify-center relative w-80 mb-4 '>
          <Link to='/my-orders' className='absolute left-0'>
        <ArrowUturnLeftIcon
         className="h-6 w-6 text-slate-400 cursor-pointer"
          ></ArrowUturnLeftIcon>
          </Link>
          <h1>
          My Order
          </h1>
        </div>
    <div className="px-4 flex flex-col w-90">
  {
          context.order?.[index]?.products.map(product=>(
          <OrderCard 
          key={product.id}
          id={product.id}
          title={product.title} 
          imageUrl={product.image}
          price={product.price}
          />
        
      ))} 
      </div>
    </Layout>
  )
}

export default MyOrder