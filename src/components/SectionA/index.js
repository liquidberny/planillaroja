import React from 'react'

const SectionA = ({id, title, content, img}) => {
  return (
    <section id={id}>
        <h3><em>{title}</em></h3>
        <p>{content}</p>
        <img className='img-section' src={img} alt='nuestro equipo imagen'/>
    </section>
  )
}

export default SectionA