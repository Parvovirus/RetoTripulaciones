import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CategoryBanner = () => {

  
  const [nameCategory, setNameCategory] = useState("")


  useEffect(() => {
    bannerCategory();
  }, []);


  const bannerCategory = () => {


    axios.get("getcategory").then((res) => {
      let cleanCategories = res.data;
     

      let nameCategoryArray = [];

      for (let i = 0; i < cleanCategories.length; i++) {
        nameCategoryArray.push(cleanCategories[i].name)
      }
      setNameCategory(nameCategoryArray);


    })
 
  }


  return (
    <div>
      <h2>CATEGORIAS</h2>
      {nameCategory ? nameCategory.map((cat, i) => <button key={i}>{cat}</button>) : ""}

    </div>
  )
}

export default CategoryBanner;