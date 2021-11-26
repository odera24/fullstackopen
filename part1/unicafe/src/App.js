import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = (props) => {
  if (props.stats.total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  const average = props.stats.average/props.stats.total
  const positive = props.good * 100 / props.stats.total

  return (
    <div>
      <StatisticLine text='good' value={props.good}/>
      <StatisticLine text='neutral' value={props.neutral}/>
      <StatisticLine text='bad' value={props.bad}/>
      <StatisticLine text='all' value={props.stats.total}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={positive}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <div>{text} {value} %</div>
    )
  }

  return (
    <div>{text} {value}</div>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [stats, setAverageTotal] = useState({average: 0, total: 0})

  const handleGoodClick = () => {
    setAverageTotal({...stats, average: stats.average + 1, total: stats.total + 1})
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setAverageTotal({...stats, total: stats.total + 1})
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAverageTotal({...stats, average: stats.average - 1, total: stats.total + 1})
    setBad(bad + 1)
  }

  


  return (
    <div>
      <h1>give feedback</h1>
      
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} stats={stats}/>
    </div>
  )

}

export default App