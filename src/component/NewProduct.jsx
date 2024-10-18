import React from 'react'
import { useState } from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData'


export default function NewProduct() {  

  const [addNewProduct, { data, loading, error }] = useAddNewProductMutation()

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (data) {
    return <div>New product added successfully!</div>
  }

  const handleSubmit = async () => {
    const fakeproductdata = {
      id: 1,
      title: 'new tshirt',
      price: '$123',
      description: ' new tshirt description',
      image: ' https://via.placeholder.com/150',
    }
    await addNewProduct(fakeproductdata)    
  }

  return (
    <>
      <button onClick={handleSubmit}>Add New Product</button>
    </>
  )

}
