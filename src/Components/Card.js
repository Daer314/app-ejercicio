import React from 'react'
import img from './ejercicio.jpeg'
import { CardWrapper,
        CardIcon,
        CardTitle,
        CardImage
} from './Card-Styles'

function Card({title, icon}) {
  return (
    <CardWrapper>
      <CardImage src={img}/>
      <CardIcon icon={icon} />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

export default Card