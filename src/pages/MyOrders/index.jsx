import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"
import  OrdersCard  from "../../Components/OrdersCard"
import { CartContext } from "../../Context"
import { useContext } from "react"

function MyOrders() {
  const context = useContext(CartContext)
  return (

      <Layout>
          <div className="flex items center justify-center relative w-80 mb-4">
            <h1 className="font-medium text-xl">My Orders</h1>
          </div>
          {
          context.order.map((order, index)=>
          (
          <Link key={index} to ={`/my-orders/${index}`}>
          <OrdersCard
           totalPrice={order.totalPrice} 
           totalProducts={order.totalProducts} 
           />
           </Link>
          ))
        }
      
      </Layout>
    )
      }
  
  export default MyOrders
  