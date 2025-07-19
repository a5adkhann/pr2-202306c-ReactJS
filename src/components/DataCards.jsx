import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import cards from '../data/Cards'

const DataCards = () => {

    const [cards, setCards] = useState([]);

    const fetchCardsAPI = async() => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setCards(response.data);
        }
        catch(err){
            console.log("Error Loading API Products", err);
        }
    }

    useEffect(() => {
        fetchCardsAPI();
    }, []);


  return (
    <>
        <div className='data-cards grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-20' data-aos="flip-left" data-aos-duration="3000">

            {cards.slice(0, 3).map((card, index) => (
            <div className="card border border-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out" key={index}>
                <div className="card-img">
                    <img className='h-[30vh] w-[100%]' src={card.image} alt="" />
                </div>
                <div className="card-text p-3">
                    <p className='font-bold text-xl'>{card.title}</p>
                    <p className='text-sm'>{card.description.substring(0, 50)+"..."}</p>
                </div>
            </div>
            ))}
          
        </div>
    </>
  )
}

export default DataCards
