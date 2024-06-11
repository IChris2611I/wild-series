import { useState, useEffect } from 'react';

function App() {
  const [backData, setBackData] = useState('');

  async function message() {
    const response = await fetch('http://localhost:3310/api/home');
    const data = await response.text();
    setBackData(data);
  }

  useEffect(() => {
    message();
  }, []);

  return (
    <>
      <h1>Message from the Back:</h1>
      <p>{backData}</p>
    </>
  );
}

export default App;
