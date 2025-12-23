import React from 'react'
import Card from './components/Card'

const App = () => {

  const cars = [
  {
    carName: "Porsche 911 GT3 RS",
    color: "Ice Grey",
    time: "3.2s",
    gear: "Manual",
    smallInfo:
      "Timeless, iconic, and unapologetically analog — this Porsche 911 embodies the soul of Stuttgart’s finest era.",
    img: "/img/gt3.png"
  },
  {
    carName: "Audi R8 V10 Performance",
    color: "Nardo Grey",
    time: "3.1s",
    gear: "Automatic",
    smallInfo:
      "A naturally aspirated V10 masterpiece combining daily usability with supercar thrills.",
    img: "/img/R8.png"
  },
  {
    carName: "Ferrari 488 Pista",
    color: "Rosso Corsa",
    time: "2.9s",
    gear: "Automatic",
    smallInfo:
      "Ferrari’s track-focused V8 weapon built for speed and precision.",
    img: "/img/488.png"
  },
  {
    carName: "McLaren 720S",
    color: "Papaya Orange",
    time: "2.8s",
    gear: "Automatic",
    smallInfo:
      "Lightweight engineering and brutal acceleration define this McLaren.",
    img: "/img/720S.png"
  },
  {
    carName: "Lamborghini Huracán STO",
    color: "Blu Laufey",
    time: "3.0s",
    gear: "Automatic",
    smallInfo:
      "Race-bred aerodynamics inspired directly by Lamborghini’s motorsport DNA.",
    img: "/img/Lambo.png"
  }
];

  return (
    <div className='h-screen p-5 flex items-center justify-center bg-[#e4e4e4] flex-wrap gap-5 font-mono'>
      {cars.map((car, index)=>{

        return <Card key={index} car={car}/>
      })}
    </div>
  )
}

export default App