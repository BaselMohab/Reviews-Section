import React, {useEffect, useState} from 'react'
import { FiChevronRight, FiChevronLeft, FiChevronsLeft } from 'react-icons/fi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import data from './data'

const App = () => {
const [people, setPeople] = useState(data);
const [index, setIndex] = useState(0);


useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0){
        setIndex(lastIndex)
    }

    if ( index > lastIndex){
        setIndex(0)
    }
}, [index])

return (
    <section className='section'>
        <div className="section-title">
            <h1>
                <span className="span">/</span>
                Reviews
            </h1>    
        </div>  
        <section className="section-center">
        {people.map((people, peopleIndex)=> {
            const{id, name, title, image, quote} = people

            let position = 'nextSlide';

            if (peopleIndex === index){
                position = 'activeSlide';
            }

            if (peopleIndex === index - 1 || (index === 0 && peopleIndex === people.length - 1)){
                position = 'prevSlide';
            }

            return (
                <article key={id} className={position}>
                <img src={image} alt={name} className='person-img' />
                <h3 className="review-name">{name}</h3>
                <h5 className="review-title">{title}</h5>
                <p className="review-quote">{quote}</p>
                <FaQuoteRight className='icon'/>
                </article>
            )
        })}
            <buttton className="prev" onClick={()=> setIndex(index - 1)}>
                <FiChevronLeft />
            </buttton>
            <buttton className="next" onClick={()=> setIndex(index + 1)}>
                <FiChevronRight />
            </buttton>
        </section>
    </section>
)
}

export default App

