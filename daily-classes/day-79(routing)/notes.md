### __React-Router-DOM__

- install react-routing-dom
- in main.jsx “import {BrowserRouter} from ‘react-router-dom’”
- wrap <App/> by BrowerRouter in main.jsx file
- In App.jsx “import { Route, Routes} from ‘react-router-dom‘“ 
- make <Routes><Routes/> (collection of all route) and inside Routes make <route>
- In <Route/> motion path (where to go) and element (what to render) attributes
- In Navbar Use <Link> by ‘react-router-dom’  tag to redirect to any specific route
- Make Navbar Component as well and add it before <Routes> in App.jax
- Nested Routes can be made by writing in this way - path=”/product/men”
- Dynamic Routes can be made by writing this way - path=”/product/:id”
- You can access id by using useParams() hook inside that component you rendered in a Dynamic Route