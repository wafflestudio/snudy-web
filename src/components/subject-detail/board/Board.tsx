import { useEffect, useState } from 'react';

import { Skeleton } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { Post } from './Board.types';

import styles from './Board.module.scss';

const Board = () => {
  const [posts, setPosts] = useState<Post[]>();

  const navigate = useNavigate();
  const { id: lecture_id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!lecture_id) navigate('/');
    axios.get<{ posts: Post[] }>(`/msw/lecture/${lecture_id}/board`).then((res) => setPosts(res.data.posts));
  }, [lecture_id]);

  console.log(posts);

  return (
    <section className={styles.sectionWrapper}>
      <Skeleton height={100} width={100} variant="circular" animation="wave" />
      <Skeleton height={40} variant="text" animation="wave" />
      <Skeleton height={300} variant="rectangular" animation="wave" />
    </section>
  );
};

export default Board;
