import React, { useCallback, useState } from 'react';

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback(() => {
    console.log('Count:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={memoizedCallback}>Log Count</button>
    </div>
  );
}

export default UseCallbackExample;