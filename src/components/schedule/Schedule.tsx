import CalendarBar from './calendar-bar/CalendarBar';
import TimeTable from './timetable/TimeTable';

import styles from './Schedule.module.scss';

const Schedule = () => {
  return (
    <div className={styles.wrapper}>
      <TimeTable />
      <CalendarBar />
    </div>
  );
};

export default Schedule;
