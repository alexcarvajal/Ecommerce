import { useContext } from "react"
import { CartContext } from "../../Context"
import { PlusIcon } from '@heroicons/react/24/solid'

const Card = (props) => {
  const {data, setItemSelected} =props
  const context = useContext(CartContext)

  const addProductsToCart = (event,productData) =>{
    event.stopPropagation()
    context.setCount(context.count +1)
    context.setCartProducts([productData])
    console.log('Cart: ', context.cartProducts)
  }
  /* const showProduct = (productDetail) =>{
    context.openDetail()
   context.setProductShow(productDetail) 
  }
 */
  return (
    <div 
    className ='bg-white cursor-pointer w-56 h-60 rounded-lg'
    onClick={()=> setItemSelected(data)}
    >
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-.5'>
            {data.category}
            </span>
            <img className='w-full h-full object-cover rounded-lg' src={data.image} alt="headphones" />
            <div 
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
            onClick={(event)=> addProductsToCart(event, data)}
            >
              <PlusIcon className='h-6 w-6 text-black'></PlusIcon></div>
        </figure>
        <p className='flex justify-between'>
            <span className=' text-sm font-light mr-2'>{data.title.slice(0,22)}</span>
            <span className='text-xs font-medium'>$ {data.price}</span>
        </p>
    </div>
  )
}
export default Card