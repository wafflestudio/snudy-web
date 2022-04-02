import { useEffect, useState } from 'react';

import axios from 'axios';

/**
 * TODO remove
 *  an example component for conventions
 */
const Example = () => {
  const [state, setState] = useState();

  useEffect(() => {
    axios.get('/example').then((res) => setState(res.data));
  }, []);

  console.log(state);

  return null;
};

export default Example;
