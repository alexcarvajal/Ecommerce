import { TrashIcon } from "@heroicons/react/24/solid"
const OrderCard = props => {
const{ id, title, imageUrl, price, handleDelete }=props
let renderTrashIcon
if(handleDelete){
    renderTrashIcon = <TrashIcon onClick={()=> handleDelete(id)} className="h-6 w-6 text-slate-700 cursor-pointer" ></TrashIcon>
}
return(
    <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
            </figure>
            <p className="w-20 text-sm font-light">{title}</p>
        </div>
            <div className="flex items-center gap-2">
            <p className="text-lg font-medium">$ {price}</p>
            {renderTrashIcon}
        </div>
    </div>
)
}

export default OrderCard