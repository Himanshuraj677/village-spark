import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../../style/farming.css"

const SearchProducts = () => {
  const {category} = useParams();
  let  [products, setProducts] = useState("");
  useEffect(() => {
    setProducts(category);
  }, [category])
  return (
    <div>
      <h1 className='demo-product'>{products}</h1>
    </div>
  )
}

export default SearchProducts;
