import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
const OrdersCard = props => {
const{ totalPrice, totalProducts  }=props



return(
    <div className="flex justify-between items-center mb-4 border rounded-lg border-black w-80 p-4 ">
        <div className="flex justify-between w-full">
            <p className="flex w-full flex-col">
                <span className=" font-light ">01.02.23</span>
                <p className="flex items-center gap-2">
                    <ShoppingBagIcon className=" flex h-3 w-3 text-black cursor-pointer"/>
                    <span className="flex font-light ">{totalProducts} articules</span>
                </p>
            </p>
            <p className="flex item-center gap-2">
            <span className="flex font-medium text-xl"> ${totalPrice}</span>
            <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"/>
            </p>
        </div>
    </div>
)
}

export default OrdersCard