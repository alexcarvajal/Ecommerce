/* import { useContext } from "react";
import { CartContext } from "../../Context"; */
import { XCircleIcon } from "@heroicons/react/24/solid";
import "./styles.css";

const Details = (props) => {
  /* const context = useContext(CartContext) */
  const { item, setItemSelected } = props;
  /*   console.log('Product to Show; ',context.productShow)
   */ return (
    <aside
      className={`${
        item ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl ">Detail</h2>
        <div>
          <XCircleIcon
            className="h-6 w-6 text-slate-400 cursor-pointer"
            onClick={() => setItemSelected (null)}
          ></XCircleIcon>
        </div>
      </div>
      <figure className="px-3 ">
        <img
          className="w-full  rounded-lg"
          src={item?.image}
          alt={item?.name}
        />
        <p className="flex flex-col p-3">
          <span className="font-medium text-2xl mb-2">${item?.price}</span>
          <span className="font-medium text-md">{item?.title}</span>
          <span className="font-light text-sm">{item?.description}</span>
        </p>
      </figure>
    </aside>
  );
};
export default Details;
