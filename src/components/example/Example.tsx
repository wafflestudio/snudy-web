import { useEffect, useState } from 'react';

/**
 * TODO remove
 *  an example component for conventions
 */
const Example = () => {
  const [state, setState] = useState();

  useEffect(() => {
    fetch('https://localhost:8000/example')
      .then((res) => res.json())
      .then((res) => setState(res));
  }, []);

  console.log(state);

  return null;
};

export default Example;
