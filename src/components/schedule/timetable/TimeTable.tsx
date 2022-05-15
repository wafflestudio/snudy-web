import dayjs from 'dayjs';

import styles from './TimeTable.module.scss';

// matches to dayjs day() return val
enum Day {
  SUNDAY = 0,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

const DAY_LABEL_MAP = {
  [Day.SUNDAY]: '일',
  [Day.MONDAY]: '월',
  [Day.TUESDAY]: '화',
  [Day.WEDNESDAY]: '수',
  [Day.THURSDAY]: '목',
  [Day.FRIDAY]: '금',
  [Day.SATURDAY]: '토',
};

const TimeTable = () => {
  const currentDay = dayjs().day();
  const currentDate = dayjs().date();
  const days = [0, 1, 2, 3, 4, 5, 6].map((num) => ({ date: num + currentDate, day: ((num + currentDay) % 7) as Day }));
  const times = Array(24)
    .fill(0)
    .map((_, i) => i);

  return (
    <div className={styles.wrapper}>
      <table className={styles.timetable}>
        <thead>
          <tr>
            {days.map((day) => (
              <th className={styles.cell} key={day.date}>
                {day.date}일 {DAY_LABEL_MAP[day.day]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              {days.map((day) => (
                <td className={styles.cell} key={`${time}_${day.date}`} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
