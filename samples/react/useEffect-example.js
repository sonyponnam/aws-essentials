import React, { useEffect, useState } from 'react';

function UseEffectExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

export default UseEffectExample;