import dayjs from 'dayjs';

import { mockData, Day } from './TimeTable.mock';

import styles from './TimeTable.module.scss';

// matches to dayjs day() return val

const DAY_LABEL_MAP = {
  [Day.SUNDAY]: '일',
  [Day.MONDAY]: '월',
  [Day.TUESDAY]: '화',
  [Day.WEDNESDAY]: '수',
  [Day.THURSDAY]: '목',
  [Day.FRIDAY]: '금',
  [Day.SATURDAY]: '토',
};

export interface TimeTableItem {
  name: string;
  color: string;
  time: { day: Day; start_time: number; duration: number }[];
}

const HALF_HOUR_HEIGHT = 60;

const TimeTable = () => {
  const currentDay = dayjs().day();
  const currentDate = dayjs().date();
  const days = [0, 1, 2, 3, 4, 5, 6].map((num) => ({ date: num + currentDate, day: ((num + currentDay) % 7) as Day }));
  const times = Array(48)
    .fill(0)
    .map((_, i) => i / 2);

  const renderCell = (day: { day: Day; date: number }, time: number) => {
    const timeItem = mockData.find(
      (data) => !!data.time.find((timeItem) => timeItem.day === day.day && timeItem.start_time === time)
    );

    if (!timeItem) return <td className={styles.cell} key={`${time}_${day.date}`} />;

    const currentTime = timeItem.time.find((timeItem) => timeItem.day === day.day && timeItem.start_time === time);

    return (
      <td className={styles.cell} key={`${time}_${day.date}`} style={{ position: 'relative' }}>
        <div
          className={styles.timeItem}
          style={{ height: HALF_HOUR_HEIGHT * 2 * (currentTime?.duration ?? 0), backgroundColor: timeItem.color }}
        >
          {timeItem.name}
        </div>
      </td>
    );
  };

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
            <tr key={time}>{days.map((day) => renderCell(day, time))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
