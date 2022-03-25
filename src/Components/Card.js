import React from 'react'
import { CardWrapper,
        CardIcon,
        CardTitle,
        CardImage
} from './Card-Styles'

function Card({title, icon, img}) {
  return (
    <CardWrapper>
      <CardImage src={img}/>
      <CardIcon icon={icon} />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

export default Card