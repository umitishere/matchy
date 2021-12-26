import { useState } from 'react';

import Form from "./components/Form.js";

function App() {

  const [names, setNames] = useState(["asd"]);

  const handleFormSubmit = (submittedName) => {
    setNames((prevState) => ([
      ...prevState, submittedName
    ]))
  }

  return (
      <main>

        <Form onSubmit={handleFormSubmit} />
      </main>
    );
}

export default App;
