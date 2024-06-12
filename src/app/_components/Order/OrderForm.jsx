import React, { useState } from 'react'
import "./formCss.css"
import axiosClient from '@/app/_utils/axiosClient'

export default function OrderForm(props) {
    const [nom, setNom] = useState("")
    const [mobilenum, setMobilenum] = useState("")
    const [adress, setAdress] = useState("")
    const [ville, setVille] = useState("")
    const [product, setProduct] = useState(props.id)
    const [quantity, setQuantity] = useState(1)
    function createOrder(){
        axiosClient.post("/oreders",
            {
             "data":{
                "nom": nom,
                "mobilenum": mobilenum,
                "adress": adress,
                "ville":ville,
                "product":product,
                "quantity":quantity
             }
            }
        )
    }
  return (
    <div class="form">
    <p class="title">Order Now</p>
    <p class="message">Veuillez remplissez le formulaire pour passer votre commande. </p>
        <div class="flex">
        <label>
            <input onChange={(e)=>setNom(e.target.value)} required="" placeholder="" type="text" class="input"/>
            <span>nom</span>
        </label>

        <label>
            <input onChange={(e)=>setMobilenum(e.target.value)} required="" placeholder="" type="text" class="input"/>
            <span>Mobile number</span>
        </label>
    </div>  
            
    <label>
        <input onChange={(e)=>setAdress(e.target.value)} required="" placeholder="" type="email" class="input"/>
        <span>adress</span>
    </label> 
        
    <label>
        <input onChange={(e)=>setVille(e.target.value)} required="" placeholder=""  class="input"/>
        <span>ville</span>
    </label>
   
    <button type="button" onClick={createOrder}>Submit</button>
    
    {nom+ mobilenum+adress+ville+product+quantity}
</div>

  )
}
