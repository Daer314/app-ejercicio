import React from 'react'
import ExerciseCard from '../../Components/Excersice/ExerciseCard'
import { DayContainer, DayTitle } from './Week-Styles'

function Wednesday() {
  return (
    <DayContainer>
      <DayTitle>Wednesday</DayTitle>      
      <ExerciseCard title='Globet Squat' sets='4' reps='10' weight='140' weightType='lb'/>
      <ExerciseCard title='Split Squat (Foot elevated)' sets='3' reps='12' weight='22' weightType='lb'/>
      <ExerciseCard title='Bulgarian' sets='3' reps='10' weight='20' weightType='lb'/>
      <ExerciseCard title='Side Lunges' sets='3' reps='10' weight='10' weightType='lb'/>
      <ExerciseCard title='Backwards Lunges' sets='3' reps='10' weight='120' weightType='lb'/>
      <ExerciseCard title='Deadlift' sets='4' reps='10' weight='80' weightType='lb'/>
      <ExerciseCard title='Hip Thrust' sets='3' reps='10' weight='120' weightType='lb'/>
      <ExerciseCard title='Calves' sets='4' reps='15' weight='120' weightType='lb'/>
    </DayContainer>
  )
}

export default Wednesday