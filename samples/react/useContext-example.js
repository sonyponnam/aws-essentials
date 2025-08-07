import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function UseContextExample() {
  const contextValue = useContext(MyContext);

  return <div>{contextValue}</div>;
}

export default UseContextExample;