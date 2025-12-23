import React from 'react'
import Card from './components/Card'
import Name from './components/Name'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <Card />
      <Name user='Prashant' age={90}/>
      <Name user='Nick' age={40}/>
      <Name user='Raj' age={20}/>
      <Button text='Learn More'/>
      <Button text='Explore'/>
    </div>
  )
}

export default App