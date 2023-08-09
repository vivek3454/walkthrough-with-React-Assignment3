import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams()
    const [singleImage, setSingleImage] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
            const data = await res.json();
            console.log(data);
            setSingleImage(data.photo)
        }
        fetchData()

    }, [id])
    return (

        <section className="text-gray-600 body-font container px-5 py-24 mx-auto flex justify-center">
            {singleImage &&
                <>
                    <Link to={'/'} className='text-2xl absolute top-10 left-10 w-8 h-8 rounded-full flex justify-center items-center'><i className="fa-solid fa-circle-left"></i></Link>
                    <div className="w-full md:w-[700px] mb-10 px-0 md:px-4">
                        <div className="rounded-lg h-96 max-[420px]:h-60 overflow-hidden bg-slate-400">
                            {
                                singleImage.url && <img alt='bird' className="object-fill object-center h-full w-full" src={singleImage.url} />
                            }
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{singleImage.title}</h2>
                        <p className="leading-relaxed text-base">{singleImage.description}</p>
                    </div>
                </>
            }
        </section>
    )
}

export default Detail