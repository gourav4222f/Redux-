import { useGetproductbyidQuery } from '../app/service/dummyData'

export default function Oneproduct() {

    const { data, isLoading, error } = useGetproductbyidQuery(1)

    console.log(data)


  return (
    <div>
      hello
    </div>
  )
}
