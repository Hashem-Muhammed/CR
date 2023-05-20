import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct } from '../Product API/product-api'

export function ProductDetails() {
    let { id } = useParams()
    let navigate = useNavigate();
    let [product , setProduct] = useState({})
    let displayProduct = async() => {
        let product = await getProduct(id)
        setProduct(product)
    }
    useEffect(() => {
		displayProduct();
	}, []);
    let goBack = () => {
        navigate("/");

    }
  return (
    <div className=' bg-dark text-light text-center w-100 p-3'>
        <h2>Product Name : {product.name}</h2>
        <h4>Product price : {product.price} $</h4>
        <h4>Product quantity : {product.quantity}</h4>
        <button onClick={goBack} className='btn btn-primary'>
            Go Back
        </button>
    </div>
  )
}
