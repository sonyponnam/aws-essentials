import React, { useLayoutEffect, useRef } from 'react';

function UseLayoutEffectExample() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    console.log('Layout effect!', divRef.current);
  });

  return <div ref={divRef}>Check console for layout effect.</div>;
}

export default UseLayoutEffectExample;