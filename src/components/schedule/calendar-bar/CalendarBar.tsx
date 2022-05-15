import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';

import styles from './CalendarBar.module.scss';
const CalendarBar = () => {
  return (
    <div className={styles.wrapper}>
      <h1>3</h1>
      <p>목요일</p>
      <div className={styles.monthSelector}>
        <Button variant="text" className={styles.monthButton}>
          <ArrowForwardIosIcon />
        </Button>
        <p>2022년 3월</p>
        <Button variant="text" className={styles.monthButton}>
          <ArrowForwardIosIcon />
        </Button>
      </div>
      <div className={styles.calendarWrapper}>여기 달력</div>
    </div>
  );
};

export default CalendarBar;
