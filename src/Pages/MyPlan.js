import React from 'react'
import SelectionCard from '../Components/SelectionCard'

function MyPlan() {
  return (
    <div>
      <SelectionCard SelectionCardTitle={'Create new Plan'}/>
      <SelectionCard SelectionCardTitle={'Saved Plans'}/>
    </div>
  )
}

export default MyPlan