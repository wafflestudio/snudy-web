import { rest } from 'msw';

import { BASE_URL } from '../../../apis/baseURL';

import { Post } from './Board.types';

const getPosts = rest.get(`${BASE_URL}/msw/lecture/:lecture_id/board`, (req, res, ctx) => {
  const { page_num } = req.params;

  console.log(page_num);

  const posts: Post[] = [
    { id: 1, title: `title 1`, thumbnail: '', content: ``, writer: 'qwer', created_at: '', views: 2 },
    { id: 2, title: `title 2`, thumbnail: '', content: ``, writer: 'asdf', created_at: '', views: 2 },
  ];

  return res(ctx.json({ posts }));
});

export const handler = [getPosts];
