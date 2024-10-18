import React from 'react'
import { useUpdateproductMutation } from '../app/service/dummyData'

export default function Updatedata() {
    const [updateproduct, { loading, error, data }] = useUpdateproductMutation()


   

    const handleSubmit = async () => {
        const data = {
            id: 1,
            name: "new name",
            price: 100,
            description: "new description"
        }
        console.log(await updateproduct(data))
    }

    return (
        <div>
            {data?.title? <h1>{data.title}</h1> : null}
            {loading && <p>loading...</p>}
            {error && <p>error: {error.message}</p>}
            <button onClick={handleSubmit} disabled={loading}>submit to updateproduct</button>            
        </div>
    )
}
