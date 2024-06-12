"use client"
import React, { useState ,useEffect} from 'react'
import ProductList from './ProductList'
import ProductApis from '@/app/_utils/ProductApis'
import "./loo.css"
import Image from 'next/image'


export default function ProductSection() {
    const [products, setProducts] =useState([])
    const [loading, setLoading] = useState(true);
    
     useEffect(() => {
    getlatestProducts_() 
    },[]) 
    const getlatestProducts_ =  () => {
        ProductApis.getLatestProducts().then(res=>{setProducts(res.data.data);console.log(res.data); setLoading(false);})
    }

    if (loading) return <p className='lodding'><Image src='/Ellipsis@1x-1.0s-200px-200px.svg' width={500} height={500}/></p>;
    
  return (
    <div><ProductList products={products}/></div>
  )
}
