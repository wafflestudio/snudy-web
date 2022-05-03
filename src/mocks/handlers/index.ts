/*
  example
  https://mswjs.io/docs/api/rest#examples
*/

import { exampleHandler } from '../../components/example/Example.msw';
import { boardHandler } from '../../components/subject-detail/board/Board.msw';

export const handlers = [
  // handlers here
  ...exampleHandler,
  ...boardHandler,
];
