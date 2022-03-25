import React from 'react'
import { SelectionCardContainer, 
  SelectionCardWrapper 
} from './SelectionCard-Styles'

function SelectionCard({SelectionCardTitle}) {
  return (
    <SelectionCardContainer>
        <SelectionCardWrapper>
            {SelectionCardTitle}
        </SelectionCardWrapper>
    </SelectionCardContainer>
  )
}

export default SelectionCard