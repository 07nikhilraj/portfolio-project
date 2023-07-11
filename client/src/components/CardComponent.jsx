import React from 'react'

const CardComponent = () => {
  return (
    <div>
        <article className='card flex flex-col h-[350px] w-[400px] min-w-[250px] p-[1.5rem] bg-[#17141d] shadowMy hover:translate-y-[-1rem] duration-200'>
            <header className='card-header'>
                <p>May 25th 2020</p>
                <h2 className='text-3xl'>Card Tricks are fun, Hi MoM!</h2>
            </header>
        </article>
    </div>
  )
}

export default CardComponent
