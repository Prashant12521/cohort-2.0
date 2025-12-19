const h1 = React.createElement('h1',null,'This is React')
const h2 = React.createElement('h1',null,'This is React2')
const h3 = React.createElement('h1',null,'This is React3')

const container = document.querySelector('.container')

const root = ReactDOM.createRoot(container)


const some = ()=>{
  return React.createElement('div',null,[h1,h2,h3])
}

root.render(some())