import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './css/Categorias.scss';
import Filter from './Search';
const CategoryBanner = ({setFilter}) => {


  const [categories, setCategory] = useState("")


  useEffect(() => {
    bannerCategory();
  }, []);


  const bannerCategory = () => {


    axios.get("getcategory").then((res) => {
      let cleanCategories = res.data;
      setCategory(cleanCategories);


    })

  }



  return (
    <div>
      <h2>Categorías</h2>
      <div className='categoryBanner'>
        {categories ? categories.map((cat, i) => <img key={i} src={cat.avatar} onClick={()=>setFilter(cat.idCategories)}></img>) : ""}

      </div>

    </div>
  )
}

export default CategoryBanner;