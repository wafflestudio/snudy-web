/*
  example
  https://mswjs.io/docs/api/rest#examples
*/

import { handler as exampleHandler } from '../../components/example/Example.msw';
import { handler as boardHandler } from '../../components/subject-detail/board/Board.msw';

export const handlers = [
  // handlers here
  ...exampleHandler,
  ...boardHandler,
];
