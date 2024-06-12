"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProductApis from '@/app/_utils/ProductApis'
import OrderForm from '@/app/_components/Order/OrderForm'
import ImagesDiv from './ImagesDiv'



export default function page({ params }) {
  const [product, setProduct] = useState([])
  

  const getOneProducts_ = async () => {
  await  ProductApis.getOneProduct(params.id).then(res=>{console.log(res.data.data);setProduct(res.data.data)})
}
useEffect(() => {
    getOneProducts_(); 
    console.log(product)
  },[])


   


    const [image, setImage] = useState(product.attributes?.images?.data[0].attributes.formats.thumbnail.url);
    
        const [value, setValue] = useState(1);
      
        const handleIncrement = () => {
          console.log(params.id)
          setValue(value + 1);
        };
      
        const handleDecrement = () => {
          if (value > 0) {
            setValue(value - 1);
          }
        };
      
        const handleChange = (e) => {
          const newValue = parseInt(e.target.value, 10);
          if (!isNaN(newValue)) {
            setValue(newValue);
          }
        };
  return (
<>
    <div className='flex  justify-center mt-10'>
        <div className='flex container'>
            <div className='w-[35%]'>
                 <div className='border-gray-500 border-2'><img className='w-full' src={"http://localhost:1337"+product.attributes?.images?.data[0].attributes.formats.thumbnail.url} alt="" /></div>

                <div className='flex'>
                 { product != [] &&
                  <ImagesDiv data={product}/> }
                  </div>

            </div>

            <div className='ml-10'>
                <div className='text-[50px]'>{  product?.attributes?.price  }$</div>
                <div className='text-[30px] font-medium mb-5 font-sans'>{  product.attributes?.title  }</div>
                <div><span className='border-gray-500 bg-gray-200 border text-[11px] rounded-xl p-1'>Free delivery with advance payment</span></div>
                <div className='my-5 font-medium max-w-[400px] '>Exploring the World Best AirPods, Unleash Wireless Freedom. The Ultimate Wireless Audio Experience, Find Your Freedom Today</div>
                <div ><span className='text-gray-500 border-gray-500 border-b'>More info +</span></div>
                <div>
                    <span className='border border-gray-500 inline-flex p-3 my-4' style={{alignItems: 'center' }}>
                    <button onClick={handleDecrement} style={{ marginRight: '5px' }}> - </button>
                    <input id="img"
                      type="text"
                      value={value}
                      onChange={handleChange}
                      style={{ textAlign: 'center', width: '40px' }}
                    />
                    <button onClick={handleIncrement} style={{ marginLeft: '5px' }}> + </button>
                </span>
                <a href='#form' className='border border-gray-500 inline-flex p-3 my-4 ml-2 bg-black text-white'> Order Now</a>
                
                </div>
                
            </div>
      </div>
   
    </div>
    <div className='flex  justify-center mt-10'>
        <div className='flex container justify-center'>
    <OrderForm id={params.id} />
    </div>
    </div>
    </>
  )
}
