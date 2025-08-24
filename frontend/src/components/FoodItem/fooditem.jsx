import React, { useContext } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const fooditem = ({id, name, price, description, image}) => {
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  
  return (
    <div className='fooditem'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id] || cartItems[id] === 0
        ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt=''/>    
        : <div className="food-item-counter">
          <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
          <p>{cartItems[id]}</p>
          <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
        </div>
       }
      </div>
      <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
      </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price}/-</p>
    </div>
  )
}

export default fooditem
