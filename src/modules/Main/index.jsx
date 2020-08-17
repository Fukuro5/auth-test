import React, { useState } from 'react'
import { FirstStep, SecondStep } from './components'
import st from './styles.scss'

const Main = props => {
  const [step, setStep] = useState(1)
  
  if(step == 1) {
    return (
      <FirstStep />
    )
  } else if(step == 2) {
    return (
      <SecondStep />
    )
  }
}

export default Main