"use client"
import React, { useState ,useEffect} from 'react'
import ProductList from './ProductList'
import ProductApis from '@/app/_utils/ProductApis'

export default function ProductSection() {
    const [products, setProducts] =useState([])
    const [loading, setLoading] = useState(true);
    
     useEffect(() => {
    getlatestProducts_() 
    },[]) 
    const getlatestProducts_ =  () => {
        ProductApis.getLatestProducts().then(res=>{setProducts(res.data.data);console.log(res.data); setLoading(false);})
    }

    if (loading) return <p>Loading...</p>;
    
  return (
    <div><ProductList products={products}/></div>
  )
}
