import React from 'react'
import cards from '../data/Cards'

const DataCards = () => {

  return (
    <>
        <div className='data-cards grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-20'>

            {cards.map((card, index) => (
            <div className="card border border-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out" key={index}>
                <div className="card-img">
                    <img src={card.card_img} alt="" />
                </div>
                <div className="card-text p-3">
                    <p className='font-bold text-xl'>{card.card_title}</p>
                    <p className='text-sm'>{card.card_description}</p>
                </div>
            </div>
            ))}
          
        </div>
    </>
  )
}

export default DataCards
