import React from 'react'
import { DayName } from './Day-Styles'

function Day({title}) {
  return (
    <DayName>{title}</DayName>
  )
}

export default Day