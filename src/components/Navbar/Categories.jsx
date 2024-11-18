import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
   
    return (
        <div className='flex gap-4 justify-center items-center mt-10'>

            {categories.map(category => <Link to={`/category/${category.slug}`} key={category.id} className='btn' >{category.name}</Link>)}
        </div>
    );
};

export default Categories;