import { rest } from 'msw';

/**
 * example component for mocking
 */

const getExample = rest.get('https://localhost:8000/example', (req, res, ctx) => res(ctx.json(['사과', '바나나'])));

export const handler = [getExample];
