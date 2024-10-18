import React from 'react'
import { useDeleteproductMutation } from '../app/service/dummyData'
import { defaultSerializeQueryArgs } from '@reduxjs/toolkit/query'

export default function Deleteproducts() {
    const [deleteproduct, { data, loading, error }] = useDeleteproductMutation()

    const handleDelete = async () => {
        const x = "120"

        const data = await deleteproduct(x)
        console.log(data);

    }



    return (
        <div>
            {data?.title? <h1>{data.title}</h1> : null}
            {loading && <p>loading...</p>}
            {error && <p>error: {error.message}</p>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
