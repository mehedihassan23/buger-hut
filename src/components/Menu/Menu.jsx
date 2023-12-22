import React, { useEffect, useState } from 'react'
import "./Menu.css"
 
const Menu = () => {
    const [pizza, setPizza] = useState([])
    useEffect(()=>{
        fetch("db.json")
        .then(res => res.json())
        .then(data => setPizza(data.posts))
        .catch(err => console.log(err))
    }, [])
  return (
    <section className='menuSection'>
      <h1 className='menuHeading'>Our Menu</h1>
       
      <div className="menu">
           {
            pizza && pizza.map(item => {
                const {title, price, image} = item;
                return <article className='item'>
                    <img src={image} alt="pizza" />
                    <h1>Name: {title}</h1>
                    <h2>Price:  ${price}   </h2>
                </article>
            })
           }
      </div>
    </section>
  )
}

export default Menu
