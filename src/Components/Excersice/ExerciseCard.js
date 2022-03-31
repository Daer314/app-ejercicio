import React from 'react'
import { ExerciseContainer,
    ExerciseWrapper,
    ExerciseTitle,
    ExerciseInfo,
    Info,
    ExerciseImg,
    InfoWrapper
} from './Exercise-Styles'
import squat from '../../Images/squat.jpeg'

function ExerciseCard({title, reps, weight, sets, weightType}) {
  return (
    <ExerciseContainer>
        <ExerciseWrapper>
            <ExerciseImg src={squat} alt='' />
            <ExerciseInfo>
                <ExerciseTitle>{title}</ExerciseTitle>
                    <InfoWrapper>
                        <Info>{sets} sets x {reps} reps /</Info>
                        <Info>{weight} {weightType}</Info>
                    </InfoWrapper>
            </ExerciseInfo>
        </ExerciseWrapper>
    </ExerciseContainer>
  )
}

export default ExerciseCard