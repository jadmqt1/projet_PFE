import React from 'react'

export default function ImagesDiv(props) {
    
  return (
    <>
    {
        props.data != [] && props.data.attributes?.images?.data.map((item)=>(<div onClick={()=>{setImage("/images/watch.png")}} className='my-3 border-gray-500 border-2 w-20 mx-2' ><img src={"http://localhost:1337"+item.attributes.formats.thumbnail.url}  className='w-full' width={400} height={400} alt="product image" /></div>))
    }
    </>
  )
}
