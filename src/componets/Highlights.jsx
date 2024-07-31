import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Hightlight from './ul/Highlight'

const Highlights = () => {
    return (
        <section id='highlights'>
            <div className="container">
                <h2 className="section__title">
                    Why choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Hightlight icon={ <FontAwesomeIcon icon='bolt' />} 
                    title="Easy and Quick"
                    para=" Get access to the book you purchased online instantly."/>
                    
                    <Hightlight icon={ <FontAwesomeIcon icon='book-open' />} 
                    title="10,000+ Books"
                    para=" Library has books in all your favourite categories"/>
                    
                    <Hightlight icon={ <FontAwesomeIcon icon='tags' />} 
                    title="Affordable"
                    para=" Get your hands on popular books for as little as $10"/>
                    
                </div>
            </div>
        </section>
    )
}

export default Highlights