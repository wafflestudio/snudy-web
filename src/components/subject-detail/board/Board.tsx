import { Skeleton } from '@mui/material';

import styles from './Board.module.scss';

const Board = () => (
  <section className={styles.sectionWrapper}>
    <Skeleton height={100} width={100} variant="circular" animation="wave" />
    <Skeleton height={40} variant="text" animation="wave" />
    <Skeleton height={300} variant="rectangular" animation="wave" />
  </section>
);

export default Board;
