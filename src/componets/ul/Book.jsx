import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Rating.jsx'
import Price from './Price.jsx'
import { faSpaghettiMonsterFlying } from '@fortawesome/free-solid-svg-icons'

const Book = ({ book }) => {
    const [img, setImg] = useState();

    const mountRef = useRef(true)
    useEffect(() => {
        const image = new Image();
        image.src = book.url;
        image.onload = () => {
            setTimeout(() => {
                if(mountRef.current){
                    setImg(image);
                }
                
            }, 300)
            
        }
        return () => {
            mountRef.current = false
        }
    })
    
    return (
        <div className="book">
            {
                img ? (<> <Link to={`/books/${book.id}`}>
                <figure className='book__img--wrapper'>
                    <img src={img.src} alt="" className='book__img'/>

                </figure>
                </Link>
                <div className="book__title">
                    <Link to={`/books/${book.id}`} className='book__title--link'>
                        {book.title}
                    </Link>
                </div>
                <Rating rating={book.rating}/>
                <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
                </> ) : (<>
                    <div className="book__img--skeleton"></div>
                    <div className="skeleton book__title--skeleton"></div>
                    <div className="skeleton book__rating--skeleton"></div>
                    <div className="skeleton book__price--skeleton"></div>
                </>)
            }
            
       </div> 
    )
}

export default Book


