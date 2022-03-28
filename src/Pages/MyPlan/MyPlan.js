import React from 'react'
import SelectionCard from '../../Components/SelectionCard'
import Day from '../../Components/Day/Day'
import { PlanContainer,
  MyPlanning
} from './MyPlan-Styles'
import Card from '../../Components/Card'
import img from '../../Images/img1.jpeg'
import { FaDumbbell } from 'react-icons/fa'

function MyPlan() {
  return (
    <PlanContainer>
      <SelectionCard SelectionCardTitle={'Create new Plan'}/>
      <SelectionCard SelectionCardTitle={'Saved Plan'}/>
      <MyPlanning>
        <Day title='Monday'/>
        <Card title='Chest + Triceps' icon={<FaDumbbell/>} img={img} />
        <Day title='Tuesday'/>
        <Card title='Back + Biceps' icon={<FaDumbbell/>} img={img} />
      </MyPlanning>
    </PlanContainer>
  )
}

export default MyPlan