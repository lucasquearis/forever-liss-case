import { useState } from 'react';

const useInput = (initialState) => {
  const [state, setState] = useState(initialState);

  const changeEvent = ({ target: { value } }) => {
    const test = /\W/g.test(value);
    if (test) return null;
    return setState(value);
  };

  return [state, changeEvent, setState];
};

export default useInput;
