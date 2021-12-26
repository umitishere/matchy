import { useState } from 'react';

import Form from "./components/Form.js";

function App() {

  const [names, setNames] = useState([]);

  return (
      <main>
        <Form />
      </main>
    );
}

export default App;
