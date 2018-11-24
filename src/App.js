import React from 'react';
import { useHook } from 'hook';

export default () => {
  const state = useHook();
  return <div className="App">{state}</div>;
};
