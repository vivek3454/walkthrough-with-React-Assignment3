import { useEffect, useState } from 'react'
import Card from '../components/Card'

const Home = () => {
    const [allImages, setAllImages] = useState([]);
    useEffect(() => {
      const fetchData = async ()=>{
        const res = await fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=4&limit=20');
        const data = await res.json();
        setAllImages(data.photos)
      }
      fetchData()

    })
    

  return (
    <div className='flex flex-wrap gap-5 justify-center items-center mx-6 my-10'>
        
        {
            allImages.length > 0?
            allImages.map((image)=>(
                <Card key={image.id} data={image} />
            ))
            :
            <p className='h-[88vh] flex justify-center items-center text-2xl'>Loading...</p>
        }
    </div>
  )
}

export default Home