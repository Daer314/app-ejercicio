import React from 'react'
import Card from '../../Components/Card'
import { CardsContainer } from '../../Components/Card-Styles'
import abs from '../../Images/abs.jpeg'
import arms from '../../Images/arms.jpeg'
import back from '../../Images/back.jpeg'
import shoulders from '../../Images/shoulders.jpeg'
import legs from '../../Images/legs.jpeg'
import triceps from '../../Images/triceps.png'
import chest from '../../Images/chest.jpeg'

import { WorkoutsContainer } from './Workouts-Styles'

function Workouts() {
  return (
    <WorkoutsContainer>
      <CardsContainer>
        <Card title='Abs' img={abs} icon=''/>
        <Card title='Chest' img={chest} icon=''/>
        <Card title='Back' img={back} icon=''/>
        <Card title='Triceps' img={triceps} icon=''/>
        <Card title='Biceps' img={arms} icon=''/>
        <Card title='Legs' img={legs} icon=''/>
        <Card title='Shoulders' img={shoulders} icon=''/>
      </CardsContainer>
    </WorkoutsContainer>
  )
}

export default Workouts