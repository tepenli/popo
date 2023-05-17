import React from "react";
import Card from "./Card.jsx";
import contact from "../contact.js";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contact[0].name}
        phone={contact[0].phone}
        email={contact[0].email}
        img={contact[0].img}
      />
      <Card
        name={contact[1].name}
        phone={contact[1].phone}
        email={contact[1].email}
        img={contact[1].img}
      />
      <Card
        name={contact[2].name}
        phone={contact[2].phone}
        email={contact[2].email}
        img={contact[2].img}
      />
    </div>
  );
}
export default App;
