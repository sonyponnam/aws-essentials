import React, { useState } from 'react';

function ConditionalRenderingExample() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && <p>This is conditionally rendered!</p>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </div>
  );
}

export default ConditionalRenderingExample;