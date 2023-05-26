import { useRoutes, BrowserRouter} from 'react-router-dom'
import { CartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import MyOrder from '../MyOrder'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes ([
      { path: '/',element: <Home /> },
      { path: '/men-clothes',element: <Home /> },
      { path: '/women-clothes',element: <Home /> },
      { path: '/jewerly',element: <Home /> },
      { path: '/electronics',element: <Home /> },
      { path: '/',element: <Home /> },
      { path: '/',element: <Home /> },
      { path: '/my-account',element: <MyAccount /> },
      { path: '/my-order',element: <MyOrder/>},
      { path: '/my-orders',element: <MyOrders /> },
      { path: '/my-orders/last',element: <MyOrder /> },
      { path: '/my-orders/:id' ,element: <MyOrder /> },
      { path: '/*',element: <NotFound /> },
      { path: '/sign-in',element: <SignIn /> },
  ])
  return routes;
}

const App = ()=> {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
