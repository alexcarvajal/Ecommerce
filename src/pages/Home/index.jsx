import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Details from "../../Components/Details";
import Layout from "../../Components/Layout";
import CheckOutSideMenu from "../../Components/CheckoutSideMenu";
function Home() {

  const [items, setItems] = useState(null);
  const [itemSelected, setItemSelected]= useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setItems(data))
  }, []);
  return (
   <Layout>
      Home
      <div className="grid gap-6 grid-cols-4 w-auto max-w-screen-lg">
      {
        items ?.map(item=>{
         return <Card key={item.id} setItemSelected={setItemSelected} data={item} />
        })
      }
      </div>
      <Details item={itemSelected} setItemSelected={setItemSelected} />
      <CheckOutSideMenu itemCh={itemSelected} setItemSelectedCh={setItemSelected} />
      </Layout>
    
  );
}
export default Home;
