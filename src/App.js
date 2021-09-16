import React, {useState,useEffect} from "react";
import ProductList from "./components/ProductList";
import { Route, Switch } from 'react-router-dom';
import "./index.css"
import Newpage from "./pages/Newpage";

function App() {
  const [ loading, setLoading] = useState(false);
  const [product,setProduct] = useState([]);
  const [page,setPage] = useState([]);
  const fetchProduct = async () => {
    setLoading(true)
    
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProduct((oldPhotos) =>{
        return[...oldPhotos, ...data]
      })
      setLoading(false)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProduct()
   
  }, [page])

  useEffect(() => {
    const event = window.addEventListener('scroll',() => {
      if(
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight -2
      ) {
        setPage((oldPage)=>{
          return oldPage + 1
        })
      }
    })
    return () => window.removeEventListener('scroll',event)
  }, [])
  return(
    <>
    <div className="header">
      <h1 className="sticky-inner">Fresh Stock</h1>
    </div>
    <ProductList products = {product} />
    
    </>
  );
}

export default App;