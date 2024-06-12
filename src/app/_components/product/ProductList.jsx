import Image from 'next/image'
import React from 'react'
import "./Card.css"
import Link from 'next/link'

export default function ProductList(props) {
  const data=props.products
  return (
    <>
    <div className='container overflow-hidden ml-auto'>
      <h3 className='text-4xl'>Latest products</h3>
    </div>
      <div className='containerr'>
    {data.map((item, index) => (
    <Link href={"/productDetail/"+item.id}>
                    <div class="card w-52 max-w-52" key={index}>
                    <div class="image_container">
                      <img className='w-full' src={"http://localhost:1337"+item.attributes?.images?.data[0].attributes.formats.thumbnail.url} alt='Product'/>
                      {/* </svg> */}
                    </div>
                    <div class="title">
                      <span>{item.attributes.title}</span>
                    </div>
                    
                    <div class="action mt-auto w-24">
                      <div class="price">
                        <span>${item.attributes.price}</span>
                      </div>
                      {/* <div class="STOCK">
                        <span>{item.attributes.Stock}</span>
                      </div> */}
                      <button class="cart-button">
                        <svg
                          class="cart-icon"
                          stroke="currentColor"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                        {/* <div class='container md:6'> */}
                        <span>Add to cart</span>

                        {/* </div> */}
                      </button>
                    </div>
                  </div>
                  </Link>
                ))}
                
    </div>
    <div className='container overflow-hidden ml-auto mt-5'>
      <h3 className='text-4xl'>Latest products</h3>
    </div>
    <div className='container1 flex max-w-full'>
    {data.map((item, index) => (
                    <div class="card w-52 max-w-52" key={index}>
                    <div class="image_container">
                      <img className='w-full' src={"http://localhost:1337"+item.attributes?.images?.data[0].attributes.formats.thumbnail.url} alt='Product'/>
                      {/* </svg> */}
                    </div>
                    <div class="title">
                      <span>{item.attributes.title}</span>
                    </div>
                    
                    <div class="action mt-auto w-24">
                      <div class="price">
                        <span>${item.attributes.price}</span>
                      </div>
                      {/* <div class="STOCK">
                        <span>{item.attributes.Stock}</span>
                      </div> */}
                      <button class="cart-button">
                        <svg
                          class="cart-icon"
                          stroke="currentColor"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                        {/* <div class='container md:6'> */}
                        <span>Add to cart</span>

                        {/* </div> */}
                      </button>
                    </div>
                  </div>
                ))}
                
    </div>
    </>
  )
}
