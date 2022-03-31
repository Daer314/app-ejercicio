import React from 'react'
import SelectionCard from '../../Components/SelectionCard'
import Day from '../../Components/Day/Day'
import { PlanContainer,
  MyPlanning,
  DayLink
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
          <DayLink to='/monday'>
            <Card title='Chest + Triceps' icon={<FaDumbbell/>} img={img} />
          </DayLink>
        <Day title='Tuesday'/>
          <DayLink to='/monday'>
            <Card title='Back + Biceps' icon={<FaDumbbell/>} img={img} />
          </DayLink>
        <Day title='Wednesday'/>
          <DayLink to='/wednesday'>
            <Card title='Legs' icon={<FaDumbbell/>} img={img} />
          </DayLink>
        <Day title='Thursday'/>
          <DayLink to='/'>
            <Card title='Chest + Triceps' icon={<FaDumbbell/>} img={img} />
          </DayLink>
        <Day title='Friday'/>
          <DayLink to='/'>
            <Card title='Back + Biceps' icon={<FaDumbbell/>} img={img} />
          </DayLink>
        <Day title='Saturday'/>
          <DayLink to='/'>
            <Card title='Legs' icon={<FaDumbbell/>} img={img} />
          </DayLink>
      </MyPlanning>
    </PlanContainer>
  )
}

export default MyPlan