import { useState } from 'react';

const useInputEmail = (initialState) => {
  const [state, setState] = useState(initialState);

  const changeEvent = async ({ target: { value } }) => {
    setState(value);
  };

  return [state, changeEvent, setState];
};

export default useInputEmail;
