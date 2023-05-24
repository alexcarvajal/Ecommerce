/* import { useContext } from "react";
import { CartContext } from "../../Context"; */
import { XCircleIcon } from "@heroicons/react/24/solid";
import "./styles.css";

const CheckOutSideMenu = (props) => {
  /* const context = useContext(CartContext) */
  const { itemCh, setItemSelectedCh } = props;
  /*   console.log('Product to Show; ',context.productShow)
   */ return (
    <aside
      className={`${itemCh ? "flex" : "hidden"} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl ">My Order</h2>
        <div>
          <XCircleIcon
            className="h-6 w-6 text-slate-400 cursor-pointer"
            onClick={() => setItemSelectedCh (null)}></XCircleIcon>
        </div>
      </div>
    </aside>
  );
};
export default CheckOutSideMenu;
