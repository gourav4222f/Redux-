import React from 'react';
import { useGetallproductsQuery } from '../app/service/dummyData';



export default function AllProduct() {

    const { data, isLoading, error } = useGetallproductsQuery();

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error</div>
    }

    if (!data) {
        return <div>No data</div>
    }
    console.log(data.products)

    return (
        <>
            hello
            <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.products.map((product) => {
                return (
                    <div style={{ margin: "20px", width: "300px" }} key={product.id}>
                        <h2>{product.name}</h2>
                        <img src={product.images[0]} alt={product.name} height={"500px"} width={"500px"} style={{ objectFit: "contain" }} />
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })}                
            </div>
        </>
    )
}
