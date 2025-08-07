import React from 'react';

function EventHandlingExample() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me!</button>;
}

export default EventHandlingExample;