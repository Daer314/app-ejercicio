import React from 'react'
import Card from '../../Components/Card'
import { CardsContainer } from '../../Components/Card-Styles'
import { FaDumbbell } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img1 from '../../Images/img1.jpeg'
import img2 from '../../Images/img2.jpeg'
import img3 from '../../Images/img3.png'
import img4 from '../../Images/img4.png'
import { HomeContainer } from './Home-Styles'


function Home() {
  return (
    <HomeContainer>
      <CardsContainer>
        <Link to='/my-plan' style={{'text-decoration': 'none'}}>
          <Card title='My Training Plan' icon={<FaDumbbell/>} img={img1}/>
        </Link>
        <Link to='/workouts' style={{'text-decoration': 'none'}}>
          <Card title='Workouts' icon={<FaDumbbell/>} img={img2}/>
        </Link>
        <Link to='/bulk-week' style={{'text-decoration': 'none'}}>
          <Card title='Get Bulk Week Training Plan' icon={<FaDumbbell/>} img={img3} />
        </Link>
        <Link to='/shreded-week' style={{'text-decoration': 'none'}}>
          <Card title='Get shreded Week Training Plan' icon={<FaDumbbell/>} img={img4}/>
        </Link>
      </CardsContainer>
    </HomeContainer>
  )
}

export default Home