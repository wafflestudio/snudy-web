import CalendarBar from './calendar-bar/CalendarBar';

import styles from './Schedule.module.scss';

const Schedule = () => {
  return (
    <div className={styles.wrapper}>
      스케줄
      <CalendarBar />
    </div>
  );
};

export default Schedule;
