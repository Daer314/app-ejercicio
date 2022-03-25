import React from 'react'
import SelectionCard from '../../Components/SelectionCard'
import { PlanContainer } from './MyPlan-Styles'

function MyPlan() {
  return (
    <PlanContainer>
      <SelectionCard SelectionCardTitle={'Create new Plan'}/>
      <SelectionCard SelectionCardTitle={'Saved Plans'}/>
    </PlanContainer>
  )
}

export default MyPlan