import React from 'react'
import img4 from "../../assets/img4.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import "./card.css"
function Card() {
    const arr=[
        {
            id:1,
            img:img4,
            title:"BURGER",
            content:"Lorem Ipsum has been the industrys standard dummy text"

        },
        {
            id:2,
            img:img2,
            title:"PIZZA",
            content:"Lorem Ipsum has been the industrys standard dummy text"

        },
        {
            id:3,
            img:img3,
            title:"PASTA",
            content:"Lorem Ipsum has been the industrys standard dummy text"
        }
    ]
  return (
    <>
    <div className='card'>
    <h1>ORDER NOW</h1>
    <div className='card-item'>
    {
        arr.map((item)=>(
            <div key={item.id} className='cards'>
            <div className='card-img'>
            <img src={item.img} alt="" />

            </div>
         
           

             
               
                <p className='title'>{item.title}</p>
                <p>{item.content}</p>
            </div>
        ))
    }
    </div>

    <div className="btn-order">
        <button className='btn'>Order</button>
    </div>

    </div>
      
    </>
  )
}

export default Card
