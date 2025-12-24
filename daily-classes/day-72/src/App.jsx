import React from "react";
import Nav from "./components/Nav";
import Vote from "./components/Vote"
import No from "./components/No";
import Button from "./components/Button";

const App = () => {

  const person = [
    {
      name: 'Raj',
      age: 18
    },
    {
      name: 'Raja',
      age: 11
    },
    {
      name: 'Ram',
      age: 28
    }
  ]

  return (
    <div className="w-full">
      <Nav title="Nick" color='grey' links={["Home", "About", "Account", "Login"]} />
      <Nav title="Raj" color='red' links={["Home", "Store", "Address", "Contact"]} />
      <Nav title="Sai" color='blue' links={["Home", "Cart", "Privacy", "About"]} />

      {person[1].age >= 18 ? <Vote /> : <No />}
    
      <Button />
    </div>
  );
};

export default App;
