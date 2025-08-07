import React, { useMemo, useState } from 'react';

function UseMemoExample() {
  const [count, setCount] = useState(0);

  const expensiveComputation = useMemo(() => {
    console.log('Computing...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Computed Value: {expensiveComputation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemoExample;