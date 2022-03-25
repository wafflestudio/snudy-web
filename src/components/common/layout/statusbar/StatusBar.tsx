import { Box } from '@mui/material';

import styles from './StatusBar.module.scss';

const StatusBar = () => {
  return (
    <Box className={styles.wrapper}>
      <span className={styles.statusText}>2022.03.18 / 남은 과제 : 5</span>
    </Box>
  );
};

export default StatusBar;
