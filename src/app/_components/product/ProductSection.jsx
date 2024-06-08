"use client"
import React, { useState ,useEffect} from 'react'
import ProductList from './ProductList'
import ProductApis from '@/app/_utils/ProductApis'

export default function ProductSection() {
    const [products, setProducts] =useState([])
    
     useEffect(() => {
    getlatestProducts_()  
    },[]) 
    const getlatestProducts_ =  () => {
        ProductApis.getLatestProducts().then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    }
    
  return (
    <div><ProductList/></div>
  )
}
