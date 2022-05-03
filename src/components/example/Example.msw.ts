import { rest } from 'msw';

import { BASE_URL } from '../../apis/baseURL';

/**
 * example for mocking
 */

const getExample = rest.get(`${BASE_URL}/example`, (req, res, ctx) => res(ctx.json(['사과', '바나나'])));

export const exampleHandler = [getExample];
