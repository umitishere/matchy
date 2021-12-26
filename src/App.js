import { useState } from 'react';

import Form from "./components/Form.js";

function App() {

  const [names, setNames] = useState([]);

  const handleFormSubmit = (submittedName) => {
    setNames((prevState) => ([
      ...prevState, submittedName
    ]))
  }

  return (
    <main>
      <Form onSubmit={handleFormSubmit} />
      {
        names.map((name) => <li key={Math.random() * 100}>{name}</li>)
      }
    </main>
  );
}

export default App;
