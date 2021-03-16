import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'; 
import { GifGripItem } from './GifGripItem';
import PropTypes from 'prop-types';
export const GifGrip =  ({category}) => { 
    const {data:imagenes, loading} = useFetchGif(category); 

    return (
        <>
            <h3>{category.toUpperCase()}</h3> 
            {loading && <span>Loading...</span>}
            <div className="caja"> 
                {
                    imagenes.map(({url, id, title}) =>{
                            return (
                                <GifGripItem key={Math.random()} url={url} id={id} title={title}/>  
                            );
                    })
                }
            </div> 
        </>
    )
}

GifGrip.propTypes = {
    category: PropTypes.string.isRequired
}
