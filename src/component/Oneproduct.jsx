import { useGetproductbyidQuery } from '../app/service/dummyData'

export default function Oneproduct() {

    const { data, isLoading, error } = useGetproductbyidQuery(1)


    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error</div>
    }

    if (!data) {
        return <div>No data</div>
    }
    console.log(data)



  return (
    <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <img src={data.images[0]} alt={data.name} width="500" height={"500"} style={{objectFit: "contain"}} />
        <p>{data.price}</p>
      
    </div>
  )
}
