import React, { useEffect, useState } from 'react'
import {  Table } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import {deleteProduct, getProducts} from '../Product API/product-api'

export function Products() {
  let navigator = useNavigate()
    let [products , setProducts] = useState([])
    let getAllProducts = async () => {
        let data = await getProducts()
        setProducts(data)

    }
    
    
    useEffect(() => {
		getAllProducts();
	}, []);
  let del = async (id) => {
      await deleteProduct(id);
      window.location.reload();
    }
  return (
    <div className='container bg-dark text-center p-5'>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        products.map((product) =>{
            return(
                <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price} $</td>
      <td>{product.quantity}</td>
      <td>
              <div className='d-flex justify-content-center align-items-center '>
										<NavLink to={`/product/${product.id}/edit`}>
											<i className=' text-info mx-1 bi bi-pencil-square'></i>
										</NavLink>
										<i onClick={()=>del(product.id)} className=' text-danger mx-1 bi bi-trash3-fill'></i>
										<NavLink to={`/product/${product.id}`}>
											<i className=' text-warning mx-1 bi bi-eye-fill'></i>
										</NavLink>
                    </div>
				</td>
        </tr>
            )
        })
    }
    
  </tbody>
</Table>
    </div>
  )
}
