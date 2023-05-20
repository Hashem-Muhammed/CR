import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Products } from './Products'

export  function Home() {
  let navigator = useNavigate()
  let goToAdd = () => {
    navigator('/product/0/edit')
  }
  return (
    <div className='container bg-dark text-center p-5 w-100 my-1'>
        <h1 className='text-light mb-5' >Proudtcs</h1>
        <button class="btn btn-warning" onClick={goToAdd}>Add Product</button>
        <Products/>
    </div>
  )
}
