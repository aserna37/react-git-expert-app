import React from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridfItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    
    const {data: images, loading} = useFetchGifs( category );

    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        {loading && <p className="animate__animated animate__flash">Cargando...</p>}

           <div className="card-grid ">
                   {
                    images.map( img => (
                        <GifGridfItem
                        key= {img.id } 
                        {...img} />
                    ))
                }
               
            </div>
        </>
    )
}
