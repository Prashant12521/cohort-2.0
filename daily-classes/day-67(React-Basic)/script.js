// React Start

const h1 = React.createElement("h1", null, "Hello from React");
const h3 = React.createElement("h3", null, "I am Groot");

const div = React.createElement('div',{id:'parent', class:'elem'},[h1,h3])

// ReactDOM

const root = ReactDOM.createRoot(document.querySelector("#container"));

root.render(div);