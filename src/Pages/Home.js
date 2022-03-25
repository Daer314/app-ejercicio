import React from 'react'
import Card from '../Components/Card'
import { CardsContainer } from '../Components/Card-Styles'
import { FaDumbbell } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <CardsContainer>
      <Link to='/my-plan' style={{'text-decoration': 'none'}}>
        <Card title='My Training Plan' icon={<FaDumbbell/>}/>
      </Link>
      <Link to='/workouts' style={{'text-decoration': 'none'}}>
        <Card title='Workouts' icon={<FaDumbbell/>}/>
      </Link>
      <Link to='/bulk-week' style={{'text-decoration': 'none'}}>
        <Card title='Get Bulk Week Training Plan' icon={<FaDumbbell/>}/>
      </Link>
      <Link to='/shreded-week' style={{'text-decoration': 'none'}}>
        <Card title='Get shreded Week Training Plan' icon={<FaDumbbell/>}/>
      </Link>
    </CardsContainer>
  )
}

export default Home