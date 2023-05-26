import { useContext } from "react";
import { CartContext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
import "./styles.css";

const Details = (props) => {
  /* const context = useContext(CartContext) */
  const context = useContext(CartContext)
  /*   console.log('Product to Show; ',context.productShow)
   */ return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail scroll-details flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl ">Detail</h2>
        <div>
          <XCircleIcon
            className="h-6 w-6 text-slate-400 cursor-pointer"
            onClick={() => context.closeProductDetail()}
          ></XCircleIcon>
        </div>
      </div>
      <figure className="px-3 ">
      <img
          className='w-full h-5/5 rounded-lg'
          src={context.productToShow.image}
          alt={context.productToShow.title} />
             <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
      </figure>
    </aside>
  );
};
export default Details;
