import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/ShopCategory.css'

import dropdown_icon from '../Components/Assets/dropdown_icon.png'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className="shop-category">
      <img src={props.banner} alt="Category_image" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
