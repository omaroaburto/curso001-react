import React, {useState} from 'react'
import AddCategory from './AddCategory';
import { GifGrip } from './GifGrip';

export const GifExpertApp = ({elements=['gatos', 'perros']}) => {
    const [categories, setCategories] = useState(elements);

    return (
        <>
          <h1>GifExpertApp</h1>
          <AddCategory setCategories = {setCategories} categories = {categories}/>
          <hr/> 
          <ul>
            {categories.map(category=>{
                return (<GifGrip 
                    category={category}
                    key={category}
                />);
            })}
          </ul>  
        </>
    )
}

 
