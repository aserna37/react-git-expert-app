import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

function GifExpertApp() {

    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Pokemon']);
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories ={ setCategories } />
            <hr />

            
            <ol>
                {
                    categories.map(category => ( 
                        
                        <GifGrid
                        key= { category }
                        category = { category } />
                
                        ))
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp
