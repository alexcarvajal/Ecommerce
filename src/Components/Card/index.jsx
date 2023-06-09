import { useContext } from "react"
import { CartContext } from "../../Context"
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon }from '@heroicons/react/24/solid'

const Card = (data) => {

  const context = useContext(CartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductsToCart = (event,productData) =>{
    event.stopPropagation()
    context.setCount(context.count +1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
}

  const renderICon = (id) =>{
    const isInCart = context.cartProducts.filter(product => product.id === id).length >0
    if(isInCart){
      return(
      <>
      <div
      className='absolute top-0 right-0 flex justify-center items-center bg-green-600 w-6 h-6 rounded-full m-2 p-1'>
      <CheckIcon  className='h-6 w-6 text-white'></CheckIcon></div>
      </>
     
      )
    }else{
      return(
        <>
      <div
      className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
      onClick={(event) => addProductsToCart(event,data.data)}>
          <PlusIcon  className='h-6 w-6 text-black'></PlusIcon>
      </div>
      </>
      )
    }
  }

  return (
    <div 
    className ='bg-white cursor-pointer w-56 h-60 rounded-lg'
    onClick={()=> showProduct(data.data)}
    >
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-.5'>
            {data.data.category}
            </span>
            <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt={data.data.title} />
            {renderICon(data.data.id)}

        </figure>
        <p className='flex justify-between'>
            <span className=' text-sm font-light mr-2'>{data.data.title.slice(0,22)}</span>
            <span className='text-xs font-medium'>$ {data.data.price}</span>
        </p>
    </div>
  )
}
export default Card