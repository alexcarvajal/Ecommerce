import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
const Navbar = () =>{
    const context = useContext(CartContext)
    const activeStyle='underline underline-offset-4'
    return(
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-sm font-light bg-slate-400 bg-opacity-50'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        XtremeShop
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({isActive}) => isActive?activeStyle:undefined}
                    onClick={()=> context.setSearchByCategory()}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/men-clothes'
                     className={({isActive}) => isActive?activeStyle:undefined}
                     onClick={()=> context.setSearchByCategory("men's clothing")}>
                        Men`s clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/women-clothes'
                    className={({isActive}) => isActive?activeStyle:undefined}
                    onClick={()=> context.setSearchByCategory("women's clothing")}>
                        Women`s clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/jewerly'
                    className={({isActive}) => isActive?activeStyle:undefined}
                    onClick={()=> context.setSearchByCategory("jewelery")}>
                        Jewerly
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    className={({isActive}) => isActive?activeStyle:undefined}
                    onClick={()=> context.setSearchByCategory("electronics")}>
                        Electronics
                    </NavLink>
                </li>
                
            </ul>
            <ul className='flex items-center gap-3'>
               
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({isActive}) => isActive?activeStyle:undefined}>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                     className={({isActive}) => isActive?activeStyle:undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                     className={({isActive}) => isActive?activeStyle:undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center ">
                <ShoppingCartIcon 
                onClick={()=> {context.openCheckoutSideMenu()}}
                className='h-6 w-6 text-black-500 cursor-pointer'></ShoppingCartIcon>  
                <div>
               
                {context.cartProducts.length}
                    </div>
                </li>
              
            </ul>
        </nav>
    )
}

export default Navbar