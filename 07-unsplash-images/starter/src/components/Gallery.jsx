import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { useGlobalContext } from '../Context/Context'

const url = "https://api.unsplash.com/search/photos?client_id=_3KPoZCE687rLQr0c0laMjfXPGAwBhlPoQLGLpi2_Kw"

const Gallery = () => {

    const {searchTerm} = useGlobalContext()

    const {data,isLoading,isError} = useQuery({
        queryKey:['images',searchTerm],
        queryFn: async()=>{
            const result = await axios.get(`${url}&query=${searchTerm}`);
            console.log(result)
            return result.data
        }
    })
    // console.log(response)
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error: {isError.message}</div>;
      }
  return (
    <div className='image-container'>
        {data?.results?.map((item)=>{
            const url = item?.urls?.regular
            return <img src={url} alt={item.alt_description} className='img' key={item.id} />
        })}
    </div>
  )
}

export default Gallery