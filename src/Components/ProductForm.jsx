import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { addProduct, editProduct, getProduct } from '../Product API/product-api';

export function ProductForm() {
  
  let {id} = useParams();
  let navigate = useNavigate();
  let [product, setProduct] = useState({})
  let getValues = (e) => {
      setProduct({...product,
      [e.target.name]: e.target.value})
  }
  let submit = (e) => {
    e.preventDefault();
    if(id == 0)
  {
    let add = async () => { await addProduct(product)};
    add();
    navigate('/')

  } 
  else {
      let edit = async () => { await editProduct(product)};
      edit();
      navigate('/')
    }
    
  } 
let f = async () => { 
    let product = await getProduct(id);
    setProduct(product);
  
}
useEffect(() => {
  if (id != 0) {
    f();
  }
}, []);
  return (
    <div className='p-5  bg-light m-5'>
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control defaultValue={product.name} onChange={getValues} name = "name" type="text" placeholder="Enter Product Name" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control onChange={getValues} name="price" type="number" placeholder="Product Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control onChange={getValues} name="quantity" type="number" placeholder="Product Quantity" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}
