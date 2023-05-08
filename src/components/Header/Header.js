import React,{useState} from 'react'
import "./header.css"
import  whatsapp from "../../assets/whatsapp-logo.svg"
import cart from "../../assets/shoppingcart.png"
import ham_menu from "../../assets/ham-menu.png"

function Header() {

    const headerLinks=["Home","Order","Food","Restaurant","Testimonials","Contact Us"]
    const [toggle,setToggle]=useState(true)
  return (
    <>
    <div className='header'>
    <div className='hamburger_menu'>
    <img className='ham-menu' src={ham_menu} alt="" onClick={()=>setToggle(!toggle)} />

    </div>

    {
     toggle && <div className='nav'>
    {
            headerLinks.map((item,i)=>(
                <div key={i} className='nav-link'>
                <p>{item}</p>
                </div>
            ))
        }

    </div>

    }
   
    { toggle && <div className='icon'>
      <img src={whatsapp} alt="whatsapp" />
      <img src={cart} alt="cart" />
      
    
    </div>
    }

 
       
    </div>


   
    </>
  )
}

export default Header
