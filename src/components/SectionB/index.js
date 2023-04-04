import React from 'react'
import './style.css'

const SectionB = ({id, title, content, img}) => {
  return (
    <section className="card" id={id}>
        <h3><em>{title}</em></h3>
        <p>{content}</p>
        <img className='img-section' src={img} alt='nuestro equipo imagen'/>
    </section>
  )
}

export default SectionB