import React from 'react'
import PropTypes from 'prop-types';
export const GifGripItem = ({id, title, url}) => {
    return (
        <div key={id} className="item-caja">
            <img 
                key={id} 
                src={url} 
                alt={title}
            />   
        </div>  
    )
}

GifGripItem.propTypes ={
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired 
}

